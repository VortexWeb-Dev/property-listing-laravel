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
        Schema::create('bayut_locations', function (Blueprint $table) {
            $table->id();
            $table->string('location');
            $table->string('city');
            $table->string('community')->nullable();
            $table->string('sub_community')->nullable();
            $table->string('building')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bayut_locations');
    }
};
