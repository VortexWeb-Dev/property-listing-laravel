<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'reference_number' => $this->reference_number,
            'title_deed' => $this->title_deed,
            'title_en' => $this->title_en,
            'title_ar' => $this->title_ar,
            'description_en' => $this->description_en,
            'description_ar' => $this->description_ar,
            'offering_type' => $this->offering_type,
            'property_type' => $this->property_type,
            'size' => $this->size,
            'unit_no' => $this->unit_no,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'parkings' => $this->parkings,
            'furnished' => $this->furnished,
            'plot_size' => $this->plot_size,
            'lot_size' => $this->lot_size,
            'builtup_area' => $this->builtup_area,
            'layout_type' => $this->layout_type,
            'project_name' => $this->project_name,
            'project_status' => $this->project_status,
            'sale_type' => $this->sale_type,
            'ownership' => $this->ownership,
            'developer' => new DeveloperResource($this->whenLoaded('developer')),
            'agent' => new AgentResource($this->whenLoaded('agent')),
            'owner' => new OwnerResource($this->whenLoaded('owner')),
            'build_year' => $this->build_year,
            'landlord_name' => $this->landlord_name,
            'landlord_email' => $this->landlord_email,
            'landlord_phone' => $this->landlord_phone,
            'availability' => $this->availability,
            'available_from' => $this->available_from,
            'available_to' => $this->available_to,
            'rera_permit' => $this->rera_permit,
            'rera_issue_date' => $this->rera_issue_date,
            'rera_expiry_date' => $this->rera_expiry_date,
            'dtcm_permit' => $this->dtcm_permit,
            'price' => $this->price,
            'rental_period' => $this->rental_period,
            'payment_method' => $this->payment_method,
            'down_payment' => $this->down_payment,
            'cheques' => $this->cheques,
            'service_charge' => $this->service_charge,
            'financial_status' => $this->financial_status,
            'price_in_gbp' => $this->price_in_gbp,
            'amenities' => $this->amenities,
            'photo_urls' => $this->photo_urls,
            'tour_url' => $this->tour_url,
            '360_url' => $this->three_sixty_url,
            'qr_url' => $this->qr_url,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'pf_location' => new PfLocationResource($this->whenLoaded('pfLocation')),
            'bayut_location' => new BayutLocationResource($this->whenLoaded('bayutLocation')),
            'floorplan_url' => $this->floorplan_url,
            'notes' => $this->notes,
            'document_urls' => $this->document_urls,
            'contract_expiry' => $this->contract_expiry,
            'status' => $this->status,
            'hide_price' => $this->hide_price,
            'pf_publish' => $this->pf_publish,
            'bayut_publish' => $this->bayut_publish,
            'dubizzle_publish' => $this->dubizzle_publish,
            'website_publish' => $this->website_publish,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d'),
        ];
    }
}
