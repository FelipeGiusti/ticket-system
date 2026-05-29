import AppLayout from '@/Layouts/AppLayout';
import { useForm, Link } from '@inertiajs/react';
import { data } from 'autoprefixer';

export default function CreateTicket() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        priority: 'medium',
    })

    const submit = (e) => {
        e.preventDefault();

        post('/tickets');
    };

    return (
        <AppLayout>
            <div className='max-w-4xl mx-auto'>
                { /* HEADER */ }
                <div className='flex items-center justify-between mb-10'>
                    <div>
                        <h1 className='text-5xl font-bold text-gray-900'>Novo Ticket</h1>
                        <p className='text-gray-600 mt-3 text-lg'>Crie um novo ticket para nossa equipe.</p>
                    </div>
                    <Link href="/tickets" className='px=5 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 transition text-gray-700 font-medium'>Voltar</Link>
                </div>
                { /* FORM */ }
                <form onSubmit={submit} className='bg-white rounded-3xl border border-gray-200 shadow-sm p-8 space-y-8'>
                    { /* TÍTULO */ }
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-3'>Título</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Digite o título do ticket'/>
                        {
                            errors.title && (
                                <p className='text-red-500 mt-2 text-sm'>{errors.title}</p>
                            )                   
                        }
                    </div>
                    { /* DESCRIÇÃO */ }
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-3'>Descrição</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={6} className='w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Digite o problema ou solicitação' />
                        {
                            errors.description && (
                                <p className='text-red-500 mt-2 text-sm'>{errors.description}</p>
                            )
                        }
                    </div>
                    { /* PRIORIDADE */ }
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-3'>Prioridade</label>
                        <select value={data.priority} onChange={(e) => setData('priority', e.target.value)} className='w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            <option value="low">Baixa</option>
                            <option value="medium">Média</option>
                            <option value="high">Alta</option>
                        </select>
                        {
                            errors.priority && (
                                <p className='text-red-500 mt-2 text-sm'>{errors.priority}</p>
                            )
                        }
                    </div>
                    { /* BOTÃO */ }
                    <div className='pt-4'>
                        <button type='submit' disabled={processing} className='bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-sm disabled:opacity-50'>
                            {
                                processing ? 'Criando...' : 'Criar Ticket'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
};