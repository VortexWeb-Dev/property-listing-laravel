<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'reference_number' => ['required', 'string', 'max:255', 'unique:properties'],
            'title_deed' => ['nullable', 'string', 'max:255'],
            'title_en' => ['required', 'string', 'max:255'],
            'title_ar' => ['nullable', 'string', 'max:255'],
            'description_en' => ['required', 'string'],
            'description_ar' => ['nullable', 'string'],
            'offering_type' => ['required', Rule::in(['RS', 'RR', 'CS', 'CR'])],
            'property_type' => [
                'required',
                Rule::in(['AP','TH','VH','PH','LP','FF','BU','CD','DX','FA','HA','HF','LC','OF','RE','SA','WB','SH','SR','WH'])
            ],
            'size' => ['required', 'numeric'],
            'unit_no' => ['required', 'integer'],
            'bedrooms' => [
                'required',
                Rule::in(['studio','1','2','3','4','5','6','7','8','9','10','10+'])
            ],
            'bathrooms' => ['required', 'integer'],
            'parkings' => ['nullable', 'integer'],
            'furnished' => ['nullable', Rule::in(['unfurnished','semiFurnished','furnished'])],
            'plot_size' => ['nullable', 'numeric'],
            'lot_size' => ['nullable', 'numeric'],
            'builtup_area' => ['nullable', 'string'],
            'layout_type' => ['nullable', 'string'],
            'project_name' => ['nullable', 'string'],
            'project_status' => ['nullable', Rule::in(['Ready Secondary','Off-plan Secondary','Ready Promary','Off-plan Primary'])],
            'sale_type' => ['nullable', Rule::in(['freehold','new','resale'])],
            'ownership' => ['nullable', Rule::in(['freehold','newhold','leasehold'])],
            'developer_id' => ['nullable', 'exists:developers,id'],
            'agent_id' => ['required', 'exists:owners,id'],
            'owner_id' => ['required', 'exists:owners,id'],
            'build_year' => ['nullable', 'string'],
            'landlord_name' => ['nullable', 'string'],
            'landlord_email' => ['nullable', 'string'],
            'landlord_phone' => ['nullable', 'string'],
            'availability' => ['nullable', Rule::in(['available','underOffer','reserved','sold'])],
            'available_from' => ['nullable', 'date'],
            'available_to' => ['nullable', 'date'],
            'rera_permit' => ['required', 'string'],
            'rera_issue_date' => ['nullable', 'date'],
            'rera_expiry_date' => ['nullable', 'date'],
            'dtcm_permit' => ['nullable', 'string'],
            'price' => ['required', 'numeric'],
            'rental_period' => ['nullable', Rule::in(['yearly','monthly','weekly','daily'])],
            'payment_method' => ['nullable', 'string'],
            'down_payment' => ['nullable', 'numeric'],
            'cheques' => ['nullable', 'integer'],
            'service_charge' => ['nullable', 'numeric'],
            'financial_status' => ['nullable', Rule::in(['cash','mortgaged'])],
            'price_in_gbp' => ['nullable', 'numeric'],
            'amenities' => ['nullable', 'json'],
            'photo_urls' => ['nullable', 'json'],
            'tour_url' => ['nullable', 'string'],
            '360_url' => ['nullable', 'string'],
            'qr_url' => ['nullable', 'string'],
            'latitude' => ['nullable', 'string'],
            'longitude' => ['nullable', 'string'],
            'pf_location_id' => ['nullable', 'exists:pf_locations,id'],
            'bayut_location_id' => ['nullable', 'exists:bayut_locations,id'],
            'floorplan_url' => ['nullable', 'string'],
            'notes' => ['nullable', 'json'],
            'document_urls' => ['nullable', 'json'],
            'contract_expiry' => ['nullable', 'date'],
            'status' => ['nullable', Rule::in(['published','unpublished','live','draft','archive','pocket'])],
            'hide_price' => ['nullable', 'boolean'],
            'pf_publish' => ['nullable', 'boolean'],
            'bayut_publish' => ['nullable', 'boolean'],
            'dubizzle_publish' => ['nullable', 'boolean'],
            'website_publish' => ['nullable', 'boolean'],
        ];
    }
}
