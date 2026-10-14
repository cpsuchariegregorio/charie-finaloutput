import { Head, Link } from '@inertiajs/react';

export default function Welcome({ canLogin = true, canRegister = true }) {
    return (
        <>
            <Head title="Charie Product Hub" />

            <div className="min-h-screen bg-slate-50 text-slate-900">
                <nav className="flex flex-wrap items-center justify-between gap-4 bg-blue-950 px-6 py-5 text-white md:px-12">
                    <h1 className="text-xl font-extrabold">
                        CHARIE PRODUCT HUB
                    </h1>

                    <div className="flex items-center gap-5">
                        <a href="#home">Home</a>
                        <a href="#categories">Categories</a>

                        {canLogin && (
                            <Link href="/login">Login</Link>
                        )}

                        {canRegister && (
                            <Link
                                href="/register"
                                className="rounded-lg bg-white px-4 py-2 font-bold text-blue-950"
                            >
                                Sign Up
                            </Link>
                        )}
                    </div>
                </nav>

                <section
                    id="home"
                    className="bg-gradient-to-r from-blue-950 to-blue-600 px-6 py-24 text-center text-white md:py-32"
                >
                    <p className="mb-4 font-semibold uppercase tracking-widest text-blue-200">
                        Quality • Value • Convenience
                    </p>

                    <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
                        Welcome to Charie Product Hub
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
                        Discover quality products at affordable prices.
                        Find your everyday essentials in one convenient place.
                    </p>

                    <a
                        href="#categories"
                        className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-bold text-blue-950"
                    >
                        Explore Products
                    </a>
                </section>

                <section id="categories" className="px-6 py-16 md:px-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold">
                            Our Categories
                        </h2>

                        <p className="mt-3 text-slate-600">
                            Explore products for your everyday needs.
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-3">
                        {[
                            {
                                icon: '👕',
                                title: 'Fashion',
                                description: 'Clothing and fashion essentials.',
                            },
                            {
                                icon: '🎧',
                                title: 'Electronics',
                                description: 'Gadgets and electronic accessories.',
                            },
                            {
                                icon: '🎒',
                                title: 'Accessories',
                                description: 'Useful accessories for daily life.',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200"
                            >
                                <div className="text-6xl">{item.icon}</div>
                                <h3 className="mt-5 text-xl font-bold">
                                    {item.title}
                                </h3>
                                <p className="mt-3 leading-7 text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="bg-blue-950 px-6 py-6 text-center text-white">
                    © {new Date().getFullYear()} Charie Product Hub. All rights reserved.
                </footer>
            </div>
        </>
    );
}
