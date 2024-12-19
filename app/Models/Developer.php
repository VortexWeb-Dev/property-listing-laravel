<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    /** @use HasFactory<\Database\Factories\DeveloperFactory> */
    use HasFactory;

    protected $fillable = ['name'];

    // Define inverse relationship
    public function properties()
    {
        return $this->hasMany(Property::class);
    }
}
