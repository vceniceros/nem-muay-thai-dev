<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::all();
        return $events;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $event = New Event();
        $event->name = $request->name;
        $event->place = $request->place;
        $event->img = $request->img;
        $event->day = $request->day;
        $event->description = $request->description;
        $event->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $event = Event::find( $id );
        return $event;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $event = Event::findOrFail($request->id);
        $event->name = $request->name;
        $event->place = $request->place;
        $event->img = $request->img;
        $event->day = $request->day;
        $event->description = $request->description;
        $event->save();
        return $event;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Event::destroy($id);
        return $event;
    }
}
