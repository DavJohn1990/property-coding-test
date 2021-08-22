<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        DB::table('properties')->insert(
            [
                [
                    'name' => 'Ramsey House',
                    'created_at' => now(),
                ],
                [
                    'name' => 'Blackberry Cottage',
                    'created_at' => now(),
                ],
                [
                    'name' => 'Griffin House',
                    'created_at' => now(),
                ],
            ]
        );

        DB::table('jobs')->insert(
            [
                [
                    'summary' => 'Gardening',
                    'description' => 'Cut the grass',
                    'property_id' => 1,
                    'created_at' => now(),
                ],
                [
                    'summary' => 'Fix kitchen sink',
                    'description' => 'Tap leaking',
                    'propery_id' => 2,
                    'created_at' => now(),
                ],
            ]
        );
    }
}
