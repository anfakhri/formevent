<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function index() : Response {
        $events = Event::latest()->paginate(10);

        return Inertia::render('ConfigurationEvent/ConfigurationEvent', [
            'events' => $events,
        ]);
    }
}
