<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserDashboardDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $cardTypes = [
            'games',
            'media',
            'images',
            'learning',
        ];

        User::each(function ($user) use ($cardTypes) {
            foreach ($cardTypes as $cardType) {
                DB::table('user_dashboard_data')->insert([
                    'user_id' => $user->id,
                    'created_dt' => now(),
                    'card_type' => $cardType,
                    'progress' => rand(0, 100),
                    'archived' => false,
                ]);
            }
        });
    }
}
