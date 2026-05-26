<?php

use App\Http\Controllers\HealthController;
use App\Http\Controllers\TicketController;

use Illuminate\Support\Facades\Route;

Route::get('/health', [HealthController::class, 'index']);