<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fight;
use Illuminate\Http\Request;

class FightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fight = Fight::all();
        return $fight;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fight = New Fight();
        $fight->eventsId = $request->eventsId;
        $fight->fighter1 = $request->fighter1;
        $fight->fighter2 = $request->fighter2;
        $fight->weight = $request->weight;
        $fight->description = $request->description;
        $fight->video_link = $request->video_link;
        $fight->technicPoints = $request->technicPoints;
        $fight->actitudPoints = $request->actitudPoints;
        $fight->contundensPoints = $request->contundensPoints;
        $fight->promPoints = $request->promPoints;
        $fight->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $fight = Fight::find($id);
        return $fight;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $fight = Fight::findOrFail($id);
        $fight->eventsId = $request->eventsId;
        $fight->fighter1 = $request->fighter1;
        $fight->fighter2 = $request->fighter2;
        $fight->weight = $request->weight;
        $fight->description = $request->description;
        $fight->video_link = $request->video_link;
        $fight->technicPoints = $request->technicPoints;
        $fight->actitudPoints = $request->actitudPoints;
        $fight->contundensPoints = $request->contundensPoints;
        $fight->promPoints = $request->promPoints;
        $fight->save();
        return $fight;
    }
    /**
     * Find the specified resourse by foreing key
     */
    public function findByEventId(string $eventId){
        $fight = Fight::where("events_id", $eventId)->get();
        return $fight;
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $fight = Fight::destroy($id);
        return $fight;
    }
}
