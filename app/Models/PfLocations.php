<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PfLocations extends Model
{
    /** @use HasFactory<\Database\Factories\PfLocationsFactory> */
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
        return $this->hasMany(Property::class, 'pf_location_id');
    }
}
