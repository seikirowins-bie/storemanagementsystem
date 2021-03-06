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


Route::post('authenticate',[App\Http\Controllers\Auth\LoginController::class,'Sign_in']);
Route::post('sign-out',[App\Http\Controllers\Auth\LoginController::class,'logout']);


// user management
Route::post('create-account',[App\Http\Controllers\UserManagementController::class,'createAccount']);
Route::get('user-role',[App\Http\Controllers\UserManagementController::class,'getRoles']);
Auth::routes();