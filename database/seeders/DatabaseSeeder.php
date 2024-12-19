<?php

namespace Database\Seeders;

use App\Models\bayutLocations;
use App\Models\developer;
use App\Models\owner;
use App\Models\pfLocations;
use App\Models\property;
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
