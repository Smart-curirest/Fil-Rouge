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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();

            // Relation avec l'utilisateur (propriétaire ou gestionnaire)
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            // Informations principales sur le logement
            $table->string('titre', 255);
            $table->text('description');
            $table->decimal('prix', 10, 2)->unsigned();
            $table->string('adresse');
            $table->boolean('disponible')->default(true);

            // Chemin (relatif ou URL) vers l'image principale du logement
            $table->string('image_path')->nullable();

            $table->integer('surface')->unsigned()->nullable(); 
            $table->tinyInteger('chambres')->unsigned()->default(1);
            $table->tinyInteger('salles_de_bain')->unsigned()->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
