<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketController;


Route::get('/tickets', [TicketController::class, 'index']); //lista tickets
Route::post('tickets', [TicketController::class, 'store']); //cria ticket