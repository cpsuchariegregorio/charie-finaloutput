import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login | Charie Product Hub" />

            <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
                <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

                    {/* Left side */}
                    <div className="flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-8 text-white md:p-12">
                        <Link href="/" className="mb-12 text-xl font-extrabold tracking-wide">
                            🛍 CHARIE PRODUCT HUB
                        </Link>

                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-200">
                            Quality • Value • Convenience
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                            Welcome Back!
                        </h1>

                        <p className="mt-5 leading-7 text-blue-100">
                            Your everyday shopping destination. Log in to
                            explore our products and enjoy convenient shopping.
                        </p>

                        <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5">
                            <p className="text-lg font-semibold">
                                Shop what you love.
                            </p>
                            <p className="mt-2 text-sm text-blue-100">
                                Discover products for your everyday needs.
                            </p>
                        </div>

                        <Link href="/" className="mt-10 text-sm text-blue-100 hover:text-white">
                            ← Back to Home
                        </Link>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Sign In
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Enter your account details to continue.
                        </p>

                        {status && (
                            <div className="mt-5 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="mt-8 space-y-5">
                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    value="Email Address"
                                    className="font-semibold text-slate-700"
                                />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-2 block w-full rounded-xl border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-blue-600"
                                    placeholder="you@example.com"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="font-semibold text-slate-700"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-2 block w-full rounded-xl border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-blue-600"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <label className="flex items-center gap-2 text-sm text-slate-600">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                                />
                                Remember me
                            </label>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-xl bg-blue-800 px-5 py-3.5 font-bold text-white shadow-lg transition hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing ? 'Signing in...' : 'Sign In'}
                            </button>

                            {canResetPassword && (
                                <div className="text-center">
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm font-medium text-blue-700 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            )}

                            <div className="border-t border-slate-200 pt-5 text-center text-sm text-slate-600">
                                Don't have an account?{' '}
                                <Link
                                    href={route('register')}
                                    className="font-bold text-blue-700 hover:underline"
                                >
                                    Create an account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}