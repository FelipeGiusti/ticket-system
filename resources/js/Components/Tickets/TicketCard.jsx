const statusLabels = {
    open: 'Aberto',
    in_progress: 'Em andamento',
    resolved: 'Resolvido',
    closed: 'Fechado',
};

const priorityLabels = {
    low: 'Baixa',
    medium: 'Média',
    high: 'Alta',
};

const priorityColors = {
    low: 'text-blue-500',
    medium: 'text-yellow-500',
    high: 'text-red-500',
};

const statusColors = {
    open: 'text-green-500',
    in_progress: 'text-yellow-500',
    resolved: 'text-blue-500',
    closed: 'text-gray-500',
};

export default function TicketCard({ ticket} ){
    return (
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 flex justify-between gap-10">
            {/* ESQUERDA */}
            <div className='flex-1'>
                <h2 className='text-3xl font-bold text-gray-900'>{ticket.title}</h2>
                <p className='text-gray-600 mt-4 text-lg'>{ticket.description}</p>
                <div className='border-t border-gray-200 mt-8 pt-6'>
                    <div className='flex gap-4'>
                        {/* STATUS */}
                        <div className='bg-gray-50 rounded-2xl p-5 min-w-[220px]'>
                            <p className='text-gray-500 text-sm'>Status</p>
                            <div className='flex items-center gap-3 mt-3'>
                                <div className={`w-3 h-3 rounded-full bg-current ${statusColors[ticket.status]}`} />
                                <span className={`font-semibold text-lg ${statusColors[ticket.status]}`}>{statusLabels[ticket.status]}</span>
                            </div>
                        </div>
                        {/* PRIORIDADE */}
                        <div className='bg-gray-50 rounded-2xl p-5 min-w-[220px]'>
                            <p className='text-gray-500 text-sm'>Prioridade</p>
                            <div className='flex items-center gap-3 mt-3'>
                                <div className={`w-3 h-3 rounded-full bg-current ${priorityColors[ticket.priority]}`} />
                                <span className={`font-semibold text-lg ${priorityColors[ticket.priority]}`}>{priorityLabels[ticket.priority]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* DIREITA */}
            <div className='border-1 border-gray-200 pl-10 flex flex-col items-center justify-center min-w-[180px]'>
                <div className='w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-3xl'>#{ticket.id}
                </div>
                <div className='mt-8 text-gray-500 space-y-3'>
                    <div className='flex items-center gap-2'>
                        <span>📅</span>
                        <span>{new Date(ticket.created_at).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>🕒</span>
                        <span>{new Date(ticket.created_at).toLocaleDateString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</span>
                    </div>
                </div>
            </div>         
        </div>
    )
}