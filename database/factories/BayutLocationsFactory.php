<?php

namespace Database\Factories;

use App\Models\BayutLocations;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\bayut_locations>
 */
class BayutLocationsFactory extends Factory
{
    protected $model = BayutLocations::class;

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
