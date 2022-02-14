<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create('fr_FR');
        for ($i=0; $i<50; $i++){
            DB::table('projects')->insert([
                "name" => $faker->catchPhrase,
                "introduction" => $faker->sentence,
                "location" => $faker->country,
                "cost" => $faker->randomNumber(3),
            ]);
        }
    }
}
