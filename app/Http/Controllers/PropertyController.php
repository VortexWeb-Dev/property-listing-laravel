<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Resources\PropertyResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Property::query()
            ->with(['pfLocation', 'developer', 'agent', 'owner']);

        // handle the search query
        if (request()->has('search')) {
            $search = request('search');
            $query->where(function ($q) use ($search) {
                $q->where('title_en', 'ilike', '%' . $search . '%')
                    ->orWhereHas('agent', function ($q) use ($search) {
                        $q->where('name', 'ilike', '%' . $search . '%');
                    })
                    ->orWhere('status', 'ilike', '%' . $search . '%')
                    ->orWhere('price', 'ilike', '%' . $search . '%')
                    ->orWhereHas('pfLocation', function ($q) use ($search) {
                        $q->where('location', 'ilike', '%' . $search . '%');
                    });
            });
        }

        // handle the select query
        if (request()->has('status')) {
            $status = request('status');
            if ($status != 'all') {
                $query->where('status', $status);
            }
        }

        $properties = $query->orderBy('updated_at', 'desc')->paginate(10);

        return inertia('Dashboard', [
            'properties' => PropertyResource::collection($properties),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Property/Create/Index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        function mapOfferingType($offeringType, $listingType)
        {
            switch ("{$offeringType}-{$listingType}") {
                case 'residential-rent':
                    return 'RR';
                case 'residential-sale':
                    return 'RS';
                case 'commercial-rent':
                    return 'CR';
                case 'commercial-sale':
                    return 'CS';
                default:
                    return 'RS';
            }
        }

        $data = $request->all();
        $dataToInsert = [
            'reference_number' => $data['referenceNumber'],
            'title_en' => $data['title_english'],
            'description_en' => $data['description_english'],
            'offering_type' => mapOfferingType($data['offeringType'], $data['listingType']),
            'property_type' => $data['propertyType'],
            'size' => $data['size'],
            'unit_no' => $data['unitNo'],
            'bedrooms' => $data['bedrooms'],
            'bathrooms' => $data['bathrooms'],
            'price' => $data['price'],
            'agent_id' => 1,
            'owner_id' => 1,
            'rera_permit' => $data['reraPermitNumber'],
            'status' => 'draft',
            'pf_location_id' => 1,
            'bayut_location_id' => 1
        ];
        // dd($data);
        // dd($dataToInsert);
        Property::create($dataToInsert);

        return to_route('dashboard')
            ->with('success', 'Property was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $query = Property::query()
            ->with(['pfLocation', 'developer', 'agent', 'owner']);

        // $id = request('id');
        if ($id) {
            $query->where('id', $id);
        }

        $property = $query->findOrFail($id);

        return inertia('Property/View/Index', [
            'property' => new PropertyResource($property),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyRequest $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
