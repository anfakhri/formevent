<?php

namespace Database\Seeders;

use App\Models\Participant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            Participant::create([
                'name' => 'contoh data ' . $i,
                'email' => 'sueb' . $i . '@gmail.com',
                'phone' => '0822167198' + $i,
                'instansi' => 'contoh instansi' . $i,
            ]);
        }
    }
}
