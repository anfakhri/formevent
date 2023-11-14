<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index() : Response {
        // return view('admin.dashboard', [
        //     'title' => 'Dashboard'
        // ]);

        $participants = Participant::latest()->paginate(10);

        return Inertia::render('Dashboard', [
            'participants' => $participants,
        ]);
    }
}
