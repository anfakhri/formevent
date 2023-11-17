<?php

namespace App\Http\Controllers;

use App\Exports\ParticipantExport;
use Inertia\Inertia;
use App\Models\Participant;
use Illuminate\Http\Request;
use App\Http\Requests\ParticipantCreateRequest;
use Illuminate\Support\Facades\Redirect;
use Maatwebsite\Excel\Facades\Excel;

class ParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $participant = Participant::all();
        // // dd($participant);
        // return view('admin/participant',[
        //     'participant'=>$participant,
        // ]);
        return Inertia::render('Form/ParticipantsForm', [
            'title' => 'Participant Form',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ParticipantCreateRequest $request)
    {
        $validated = $request->validated();
        Participant::create(
            [
                'name'=> $validated['name'],
                'email'=> $validated['email'],
                'phone'=> $validated['phone'],
                'instansi'=> $validated['instansi'],
            ]
        );

        return back()->with('success','Data has been Saved Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function export() {
        return Excel::download(new ParticipantExport, 'Participants.xlsx');
    }
}