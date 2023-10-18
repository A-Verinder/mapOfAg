<?php

namespace App\Http\Controllers;

use App\Models\Student;

class StudentController
{
    public function index(Request $request)
    {
        $query = Student::query();

        $search = $request->get('search');
        if ($search) {
            $query->where('first_name', 'LIKE', '%' . $search . '%')
                  ->orWhere('last_name', 'LIKE', '%' . $search . '%');
        }

        return $query->get();
    }

}
