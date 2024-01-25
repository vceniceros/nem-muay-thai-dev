<?php

use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\FightController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(EventController::class)->group(function () {
    Route::get('/events', 'index');
    Route::post('/event', 'store');
    Route::get('/event/{id}', 'show');
    Route::put('/event/{id}', 'update');
    Route::delete('/event/{id}', 'destroy');
});

Route::controller(FightController::class)->group(function () {
    Route::get('/fights','index');
    Route::post('/fight','store');
    Route::get('/fight/{id}','show');
    Route::put('/fight/{id}','update');
    Route::delete('/fight/{id}', 'destroy');
});
