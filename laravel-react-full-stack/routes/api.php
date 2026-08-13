<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\UserDashboardDataController;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Route;

/*Route::get('/hello', function () {
    return response()->json([
        'message' => 'Hello from Laravel!',
    ]);
});*/

Route::middleware('auth:sanctum')->group(function () {
    //Grab the users authorised creds before logout
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/dashboard-data', UserDashboardDataController::class);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
