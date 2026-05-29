<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;

class TicketController extends Controller
{
    public function index(){
        $tickets = Ticket::all();
        return response()->json($tickets);
    }

    public function store(StoreTicketRequest $request){
        $ticket = Ticket::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status ?? 'open',
            'priority' => $request->priority ?? 'medium',
        ]);

        return redirect('tickets');
    }

    public function show($id){
        $ticket = Ticket::findOrFail($id);

        return response()->json($ticket);
    }

    public function update(UpdateTicketRequest $request, $id){
        $request->headers->set('Accept', 'application/json');

        $ticket = Ticket::findOrFail($id);

        $ticket->update([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'priority' => $request->priority, 
        ]);

        return response()->json($ticket);
    }

    public function destroy($id){
        $ticket = Ticket::findOrFail($id);

        $ticket->delete();

        return response()->json([
            'message' => 'Ticket deleted successfully'
        ]);
    }
}
