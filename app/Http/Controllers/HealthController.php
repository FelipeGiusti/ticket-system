<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HealthController extends Controller
{
    public function index(){
        return response()->json([
            'status' => 'ok',
            'messagem' => 'Ticket System funcionando via controller',
        ]);
    }
}
