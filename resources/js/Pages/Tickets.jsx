import AppLayout from '@/Layouts/AppLayout';
import TicketCard from '@/Components/Tickets/TicketCard';
import { Link } from '@inertiajs/react';

export default function Tickets({ tickets } ){
    return (
        <AppLayout>
            <div className='max-w-7xl mx-auto'>
                {/*HEADER*/}
                <div className='flex items-center justify-between mb-10'>
                    <div>
                        <h1 className='text-5xl font-bold text-gray-900'>Dashboard de Tickets</h1>
                        <p className='text-gray-600 mt-3 text-lg'>Gerencie e acompanhe os tickets do sistema.</p>
                    </div>
                    <Link href="/tickets/create" className='bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-4 rounded-2xl font-semibold shadow-sm'>+ Novo Ticket</Link>
                </div>
                {/* LISTA */}
                <div className='space-y-6'>
                    {
                        tickets.map((ticket) => (
                            <TicketCard key={ticket.id} ticket={ticket} />
                        ))
                    }
                </div>
            </div>
        </AppLayout>
    )
}