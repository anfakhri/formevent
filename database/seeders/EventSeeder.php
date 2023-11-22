<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 2; $i++) { 
            if ($i = 1) {
                Event::create([
                    'name' => 'Event ' . $i,
                    'link' => 'https://www.google.co.id/',
                ]);
            } 
            if ($i = 2) {
                Event::create([
                    'name' => 'Event ' . $i,
                    'link' => 'https://www.youtube.com/',
                ]);
            }
        }
    }
}
