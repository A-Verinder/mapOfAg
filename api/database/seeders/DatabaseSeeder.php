<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 0; $i < 5; $i++) {
            Student::create(
                [
                    'first_name' => fake()->firstName,
                    'last_name'  => fake()->lastName,
                    'email'      => fake()->email,
                    'subject'    => fake()->randomElement(['English', 'Geography', 'Maths', 'Science']),
                    'grade'      => 100 - ($i * 15),
                ]
            );
        }
    }
}
