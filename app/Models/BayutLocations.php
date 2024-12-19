<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BayutLocations extends Model
{
    /** @use HasFactory<\Database\Factories\BayutLocationsFactory> */
    use HasFactory;

    protected $fillable = [
        'location',
        'city',
        'community',
        'sub_community',
        'building',
    ];

    public function properties()
    {
        return $this->hasMany(Property::class, 'bayut_location_id');
    }
}
