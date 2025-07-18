<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function () {
    return response()->json(['message' => 'Hello, World!']);
});

Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])
    ->name('users.index');

Route::get('/ping', function () {
    return response()->json(['pong' => "haw"]);
});


Route::apiResource('appointments', App\Http\Controllers\AppointmentController::class);