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

    public function store(Request $request){
        $request->validate([
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:10',
            'priority' => 'nullable|in:low,medium,high',
        ]);


        $ticket = Ticket::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status ?? 'open',
            'priority' => $request->priority ?? 'medium',
        ]);

        return response()->json($ticket);
    }

    public function show($id){
        $ticket = Ticket::findOrFail($id);

        return response()->json($ticket);
    }

    public function update(Request $request, $id){
        $request->headers->set('Accept', 'application/json');

        $ticket = Ticket::findOrFail($id);

        $request->validate([
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:10',
            'priority' => 'nullable|in:low,medium,high',
            'status' => 'nullable|in:open,in_progess,resolved,closed'
        ]);

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
