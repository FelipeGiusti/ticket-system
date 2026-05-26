<?php
namespace App\Http\Controllers;

use App\Models\Ticket;

use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index(){
        $tickets = Ticket::all();
        return response()->json($tickets);
    }

    public function store(){
        $ticket = Ticket::create([
            'title' => 'Primeiro Ticket',
            'description' => 'Meu primeiro ticket no Laravel',
            'status' => 'open',
            'priority' => 'medium',
        ]);

        return response()->json($ticket);
    }
}
