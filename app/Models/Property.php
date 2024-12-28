<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    /** @use HasFactory<\Database\Factories\PropertyFactory> */
    use HasFactory;

    protected $casts = [
        'amenities' => 'array',
        'photo_urls' => 'array',
        'notes' => 'array',
        'document_urls' => 'array',
    ];

    protected $fillable = [
        'reference_number',
        'title_deed',
        'title_en',
        'title_ar',
        'description_en',
        'description_ar',
        'offering_type',
        'property_type',
        'size',
        'unit_no',
        'bedrooms',
        'bathrooms',
        'parkings',
        'furnished',
        'plot_size',
        'lot_size',
        'builtup_area',
        'layout_type',
        'project_name',
        'project_status',
        'sale_type',
        'ownership',
        'developer_id',
        'agent_id',
        'owner_id',
        'build_year',
        'landlord_name',
        'landlord_email',
        'landlord_phone',
        'availability',
        'available_from',
        'available_to',
        'rera_permit',
        'rera_issue_date',
        'rera_expiry_date',
        'dtcm_permit',
        'price',
        'rental_period',
        'payment_method',
        'down_payment',
        'cheques',
        'service_charge',
        'financial_status',
        'price_in_gbp',
        'amenities',
        'photo_urls',
        'tour_url',
        '360_url',
        'qr_url',
        'latitude',
        'longitude',
        'pf_location_id',
        'bayut_location_id',
        'floorplan_url',
        'notes',
        'document_urls',
        'contract_expiry',
        'status',
        'hide_price',
        'pf_publish',
        'bayut_publish',
        'dubizzle_publish',
        'website_publish',
    ];

      // Define relationships
      public function developer()
      {
          return $this->belongsTo(Developer::class);
      }
  
      public function agent()
      {
          return $this->belongsTo(Owner::class, 'agent_id');
      }
  
      public function owner()
      {
          return $this->belongsTo(Owner::class, 'owner_id');
      }
  
      public function pfLocation()
      {
          return $this->belongsTo(PfLocations::class);
      }
  
      public function bayutLocation()
      {
          return $this->belongsTo(BayutLocations::class);
      }
}
