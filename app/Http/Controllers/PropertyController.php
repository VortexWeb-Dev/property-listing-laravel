<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Resources\PropertyResource;
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

        $properties = $query->paginate(10);

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
    public function store(StorePropertyRequest $request)
    {
        //
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
