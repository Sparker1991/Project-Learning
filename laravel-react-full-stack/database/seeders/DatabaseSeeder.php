<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\UserDashboardData;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
            /*
         \App\Models\User::factory(25)->create();

        $this->call([
            UserDashboardDataSeeder::class,
        ]);*/

        UserDashboardData::create([
            'user_id' => 26,
            'created_dt' => now(),
            'card_type' => 'images',
            'progress' => 50,
            'archived' => false,
        ]);

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
