<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('reference_number')->unique();
            $table->string('title_deed')->nullable();
            $table->string('title_en');
            $table->string('title_ar')->nullable();
            $table->text('description_en');
            $table->text('description_ar')->nullable();
            $table->enum('offering_type', ['RS', 'RR', 'CS', 'CR']);
            $table->enum('property_type', [
                'AP',
                'TH',
                'VH',
                'PH',
                'LP',
                'FF',
                'BU',
                'CD',
                'DX',
                'FA',
                'FA',
                'HA',
                'HF',
                'LC',
                'LP',
                'OF',
                'OF',
                'RE',
                'RE',
                'SA',
                'WB',
                'SH',
                'SR',
                'OF',
                'WH',
                'WH',
                'LP',
                'FF',
                'WB',
                'FF'
            ]);
            $table->float('size');
            $table->integer('unit_no');
            $table->enum('bedrooms', [
                'studio',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '10+'
            ]);
            $table->integer('bathrooms');
            $table->integer('parkings')->nullable();
            $table->enum('furnished', ['unfurnished', 'semiFurnished', 'furnished'])->nullable();
            $table->float('plot_size')->nullable();
            $table->float('lot_size')->nullable();
            $table->string('builtup_area')->nullable();
            $table->string('layout_type')->nullable();
            $table->string('project_name')->nullable();
            $table->enum('project_status', [
                'Ready Secondary',
                'Off-plan Secondary',
                'Ready Promary',
                'Off-plan Primary'
            ])->nullable();
            $table->enum('sale_type', [
                'freehold',
                'new',
                'resale'
            ])->nullable();
            $table->enum('ownership', [
                'freehold',
                'nonehold',
                'leasehold'
            ])->nullable();
            $table->foreignId('developer_id')->nullable()->constrained('developers');
            $table->foreignId('agent_id')->constrained('owners');
            $table->foreignId('owner_id')->constrained('owners');
            $table->string('build_year')->nullable();
            $table->string('landlord_name')->nullable();
            $table->string('landlord_email')->nullable();
            $table->string('landlord_phone')->nullable();
            $table->enum('availability', ['available', 'underOffer', 'reserved', 'sold'])->nullable();
            $table->date('available_from')->nullable();
            $table->date('available_to')->nullable();
            $table->string('rera_permit');
            $table->date('rera_issue_date')->nullable();
            $table->date('rera_expiry_date')->nullable();
            $table->string('dtcm_permit')->nullable();
            $table->float('price');
            $table->enum('rental_period', ['yearly', 'monthly', 'weekly', 'daily'])->nullable();
            $table->string('payment_method')->nullable();
            $table->float('down_payment')->nullable();
            $table->integer('cheques')->nullable();
            $table->float('service_charge')->nullable();
            $table->enum('financial_status', ['cash', 'mortgaged'])->nullable();
            $table->float('price_in_gbp')->nullable();
            $table->json('amenities')->nullable();
            $table->json('photo_urls')->nullable();
            $table->string('tour_url')->nullable();
            $table->string('360_url')->nullable();
            $table->string('qr_url')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->foreignId('pf_location_id')->constrained('pf_locations');
            $table->foreignId('bayut_location_id')->constrained('bayut_locations');
            $table->string('floorplan_url')->nullable();
            $table->json('notes')->nullable();
            $table->json('document_urls')->nullable();
            $table->date('contract_expiry')->nullable();
            $table->enum('status', ['published', 'unpublished', 'live', 'draft', 'archive', 'pocket']);
            $table->boolean('hide_price')->default(false);
            $table->boolean('pf_publish')->default(false);
            $table->boolean('bayut_publish')->default(false);
            $table->boolean('dubizzle_publish')->default(false);
            $table->boolean('website_publish')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
