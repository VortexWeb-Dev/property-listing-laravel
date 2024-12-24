<?php

namespace Database\Seeders;

use App\Models\BayutLocations;
use App\Models\Developer;
use App\Models\Owner;
use App\Models\PfLocations;
use App\Models\Property;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed Owners
        owner::factory(10)->create();

        // Seed Developers
        developer::factory(5)->create();

        // Seed PfLocations
        pfLocations::factory(10)->create();

        // Seed BayutLocations
        bayutLocations::factory(10)->create();

        // Seed Properties
        property::factory(50)->create();
    }
}
