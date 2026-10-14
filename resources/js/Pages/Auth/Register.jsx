import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Create Account" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 px-4 py-10">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white p-8 shadow-2xl">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white shadow-lg">
                            J
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900">
                            Create Account
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Register to get started with your account.
                        </p>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Full Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email Address" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData('password_confirmation', e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6">
                            <PrimaryButton
                                className="w-full justify-center bg-indigo-600 py-3 hover:bg-indigo-700"
                                disabled={processing}
                            >
                                {processing ? 'Creating Account...' : 'Create Account'}
                            </PrimaryButton>
                        </div>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                href={route('login')}
                                className="font-semibold text-indigo-600 hover:text-indigo-800"
                            >
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}