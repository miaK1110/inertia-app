<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('index', [
        'name' => 'Mia'
    ]);
});
Route::get('/page1', function () {
    return Inertia::render('page1', [
        'name' => 'Page1'
    ]);
});
Route::get('/page2', function () {
    return Inertia::render('page2', [
        'name' => 'Page2'
    ]);
});

Route::get('/login', function () {
    return Inertia::render('login');
});
