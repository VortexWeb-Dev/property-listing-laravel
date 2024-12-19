<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    /** @use HasFactory<\Database\Factories\OwnerFactory> */
    use HasFactory;

    protected $fillable = [
        'bitrix_id',
        'name',
        'email',
        'phone',
        'image_url',
        'designation',
        'role',
    ];

    public function propertiesAsAgent()
    {
        return $this->hasMany(Property::class, 'agent_id');
    }

    public function propertiesAsOwner()
    {
        return $this->hasMany(Property::class, 'owner_id');
    }
}
