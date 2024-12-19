<?php

namespace Database\Factories;

use App\Models\Owner;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\owner>
 */
class OwnerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Owner::class;
    public function definition(): array
    {
        return [
            'bitrix_id' => $this->faker->uuid(),
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->unique()->phoneNumber(),
            'image_url' => $this->faker->imageUrl(),
            'designation' => $this->faker->jobTitle(),
            'role' => $this->faker->randomElement(['admin', 'agent', 'team_lead']),
        ];
    }
}
