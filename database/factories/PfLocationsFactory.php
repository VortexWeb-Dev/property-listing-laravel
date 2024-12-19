<?php

namespace Database\Factories;

use App\Models\PfLocations;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\pf_locations>
 */
class PfLocationsFactory extends Factory
{
    protected $model = PfLocations::class;

    public function definition(): array
    {
        return [
            'location' => $this->faker->address(),
            'city' => $this->faker->city(),
            'community' => $this->faker->word(),
            'sub_community' => $this->faker->word(),
            'building' => $this->faker->word(),
        ];
    }
}
