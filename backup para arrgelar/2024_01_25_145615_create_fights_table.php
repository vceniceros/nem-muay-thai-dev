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
        Schema::create('fights', function (Blueprint $table) {
            $table->id();
            $table->foreignId('events_id')->constrained()->cascadeOnDelete();
            $table->string('fighter1');
            $table->string('fighter2');
            $table->integer('weight');
            $table->string('description');
            $table->string('video_link');
            $table->unsignedFloat('technicPoints');
            $table->unsignedFloat('actitudPoints');
            $table->unsignedFloat('contundensPoints');
            $table->unsignedFloat('promPoints');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fights');
    }
};
