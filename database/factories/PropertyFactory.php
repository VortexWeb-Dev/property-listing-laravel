<?php

namespace Database\Factories;

use App\Models\BayutLocations;
use App\Models\Developer;
use App\Models\Owner;
use App\Models\PfLocations;
use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\property>
 */
class PropertyFactory extends Factory
{
    protected $model = Property::class;

    public function definition(): array
    {
        return [
            'reference_number' => $this->faker->unique()->uuid(),
            'title_deed' => $this->faker->uuid(),
            'title_en' => $this->faker->sentence(3),
            'title_ar' => $this->faker->optional()->word(),
            'description_en' => $this->faker->paragraph(),
            'description_ar' => $this->faker->optional()->paragraph(),
            'offering_type' => $this->faker->randomElement(['RS', 'RR', 'CS', 'CR']),
            'property_type' => $this->faker->randomElement(['AP', 'BW', 'CD', 'DX', 'FF', 'HF', 'LP', 'PH', 'TH', 'VH', 'WB', 'HA', 'LC', 'BU', 'WH', 'FA', 'OF', 'RE', 'SH', 'SR', 'SA']),
            'size' => $this->faker->optional()->randomFloat(2, 50, 5000),
            'unit_no' => $this->faker->optional()->randomDigitNotNull(),
            'bedrooms' => $this->faker->optional()->numberBetween(0, 10),
            'bathrooms' => $this->faker->optional()->numberBetween(1, 8),
            'parkings' => $this->faker->optional()->numberBetween(0, 5),
            'furnished' => $this->faker->randomElement(['unfurnished', 'semi-furnished', 'furnished']),
            'plot_size' => $this->faker->optional()->randomFloat(2, 50, 10000),
            'lot_size' => $this->faker->optional()->randomFloat(2, 50, 10000),
            'builtup_area' => $this->faker->optional()->numberBetween(500, 10000),
            'layout_type' => $this->faker->optional()->word(),
            'ownership' => $this->faker->randomElement(['free', 'none', 'lease']),
            'developer_id' => Developer::factory(),
            'agent_id' => Owner::factory(),
            'owner_id' => Owner::factory(),
            'build_year' => $this->faker->optional()->year(),
            'landlord_name' => $this->faker->optional()->name(),
            'landlord_email' => $this->faker->optional()->safeEmail(),
            'landlord_phone' => $this->faker->optional()->phoneNumber(),
            'availability' => $this->faker->randomElement(['available', 'under_offer', 'reserved', 'sold']),
            'available_from' => $this->faker->optional()->date(),
            'rera_permit' => $this->faker->optional()->uuid(),
            'rera_issue_date' => $this->faker->optional()->date(),
            'rera_expiry_date' => $this->faker->optional()->date(),
            'dtcm_permit' => $this->faker->optional()->uuid(),
            'price' => $this->faker->randomFloat(2, 100000, 10000000),
            'rental_period' => $this->faker->optional()->randomElement(['yearly', 'monthly', 'weekly', 'daily']),
            'payment_method' => $this->faker->optional()->randomElement(['cash', 'installments', 'cash_installments']),
            'down_payment' => $this->faker->optional()->randomFloat(2, 10000, 1000000),
            'cheques' => $this->faker->optional()->numberBetween(1, 12),
            'service_charge' => $this->faker->optional()->randomFloat(2, 1000, 50000),
            'financial_status' => $this->faker->optional()->randomElement(['cash', 'mortgaged']),
            'price_in_gbp' => $this->faker->optional()->randomFloat(2, 10000, 1000000),
            'amenities' => $this->faker->optional()->randomElements(['pool', 'gym', 'parking', 'security'], 3),
            'photo_urls' => $this->faker->optional()->randomElements([$this->faker->imageUrl(), $this->faker->imageUrl(), $this->faker->imageUrl()], 3),
            'tour_url' => $this->faker->optional()->url(),
            '360_url' => $this->faker->optional()->url(),
            'qr_url' => $this->faker->optional()->url(),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'pf_location_id' => PfLocations::factory(),
            'bayut_location_id' => BayutLocations::factory(),
            'floorplan_url' => $this->faker->optional()->url(),
            'notes' => $this->faker->optional()->randomElements(['note1', 'note2', 'note3'], 2),
            'document_urls' => $this->faker->optional()->randomElements([$this->faker->url(), $this->faker->url()], 2),
            'contract_expiry' => $this->faker->optional()->date(),
            'status' => $this->faker->randomElement(['published', 'unpublished', 'live', 'draft', 'archive', 'pocket']),
            'hide_price' => $this->faker->boolean(),
            'pf_publish' => $this->faker->boolean(),
            'bayut_publish' => $this->faker->boolean(),
            'dubizzle_publish' => $this->faker->boolean(),
            'website_publish' => $this->faker->boolean(),
        ];
    }
}
