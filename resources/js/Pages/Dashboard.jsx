import { Head, Link, usePage, router } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;

    const logout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-100">
                <aside className="fixed left-0 top-0 hidden h-full w-64 bg-slate-900 p-6 text-white md:block">
                    <h1 className="mb-10 text-2xl font-bold">CHARIE SYSTEM</h1>

                    <nav className="space-y-3">
                        <Link
                            href={route('dashboard')}
                            className="block rounded-lg bg-indigo-600 px-4 py-3"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/profile"
                            className="block rounded-lg px-4 py-3 hover:bg-slate-800"
                        >
                            Profile
                        </Link>
                    </nav>

                    <button
                        onClick={logout}
                        className="absolute bottom-8 left-6 right-6 rounded-lg bg-red-600 px-4 py-3 hover:bg-red-700"
                    >
                        Logout
                    </button>
                </aside>

                <main className="p-6 md:ml-64 md:p-10">
                    <header className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Dashboard
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Welcome back, {auth?.user?.name ?? 'User'}!
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Account</p>
                            <h3 className="mt-2 text-xl font-bold text-indigo-600">
                                Active
                            </h3>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">User</p>
                            <h3 className="mt-2 text-xl font-bold text-gray-800">
                                {auth?.user?.name ?? 'User'}
                            </h3>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Status</p>
                            <h3 className="mt-2 text-xl font-bold text-green-600">
                                Logged In
                            </h3>
                        </div>
                    </div>

                    <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800">
                            Welcome to Charie System!
                        </h3>

                        <p className="mt-3 text-gray-600">
                            You have successfully accessed your dashboard.
                            Use the sidebar to navigate your account.
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
}