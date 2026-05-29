import { Link } from '@inertiajs/react'

export default function AppLayout({ children }){
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* SIDEBAR */}
            <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
                <div>
                    {/* LOGO */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-blue-600">Nome empresa</h1>
                        <p className="text-gray-500 mt-2 text-sm">Sistema de Tickets</p>
                    </div>
                    {/* MENU */}
                    <nav className="space-y-3">
                        <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl bg-blue-50 text-blue-600 font-semibold">📊 Dashboard</button>
                        <Link href="/tickets" className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-gray-100 transition text-gray-700">🎫 Tickets</Link>
                        <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-gray-100 transition text-gray-700">📈 Relatórios</button>
                        <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-gray-100 transition text-gray-700">⚙️ Configurações</button>
                    </nav>
                </div>
                {/* FOOTER USER */}
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900">Felipe Giusti</p>
                    <p className="text-sm text-gray-500 mt-1">Admin</p>
                </div>
            </aside>

            {/* CONTEUDO */}
            <main className="flex-1 p-10 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}