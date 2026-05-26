<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketController;

Route::post('/teste', function () {
    return response()->json([
        'success' => true
    ]);
});

Route::post('/tickets', [TicketController::class, 'store']); //cria ticket
Route::get('/tickets', [TicketController::class, 'index']); //lista tickets
Route::get('/tickets/{id}', [TicketController::class, 'show']); //pesquisa ticket por ID
Route::post('/tickets/{id}', [TicketController::class, 'update']); //atualizar ticket por ID
Route::delete('/tickets/{id}', [TicketController::class, 'destroy']); //softdelete em ticket por ID