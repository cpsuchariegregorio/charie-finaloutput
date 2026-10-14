import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Products({ products = [], success }) {
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        price: '',
        stock: '',
    });

    const openAddForm = () => {
        reset();
        setEditingProduct(null);
        setShowForm(true);
    };

    const openEditForm = (product) => {
        setEditingProduct(product);
        setData({
            name: product.name,
            price: product.price,
            stock: product.stock,
        });
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setEditingProduct(null);
        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        if (editingProduct) {
            put(route('products.update', editingProduct.id), {
                onSuccess: () => closeForm(),
            });
        } else {
            post(route('products.store'), {
                onSuccess: () => closeForm(),
            });
        }
    };

    const deleteProduct = (product) => {
        if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
            router.delete(route('products.destroy', product.id));
        }
    };

    const totalStock = products.reduce(
        (sum, product) => sum + Number(product.stock),
        0
    );

    const inventoryValue = products.reduce(
        (sum, product) =>
            sum + Number(product.price) * Number(product.stock),
        0
    );

    return (
        <>
            <Head title="Products" />

            <div className="min-h-screen bg-gray-100 md:flex">
                <aside className="bg-slate-900 p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
                    <h1 className="mb-8 text-2xl font-bold">
                        CHARIE SYSTEM
                    </h1>

                    <nav className="space-y-3">
                        <Link
                            href={route('dashboard')}
                            className="block rounded-lg px-4 py-3 hover:bg-slate-800"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href={route('products')}
                            className="block rounded-lg bg-indigo-600 px-4 py-3"
                        >
                            Products
                        </Link>
                    </nav>
                </aside>

                <main className="min-w-0 flex-1 p-6 md:p-10">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">
                                Products
                            </h2>
                            <p className="mt-2 text-gray-500">
                                Manage your product inventory.
                            </p>
                        </div>

                        <button
                            onClick={openAddForm}
                            className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                        >
                            + Add Product
                        </button>
                    </div>

                    {success && (
                        <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
                            {success}
                        </div>
                    )}

                    {showForm && (
                        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="mb-5 text-xl font-bold text-gray-800">
                                {editingProduct ? 'Edit Product' : 'Add Product'}
                            </h3>

                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Enter product name"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Price (₱)
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={data.price}
                                        onChange={(e) =>
                                            setData('price', e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Enter price"
                                        required
                                    />
                                    {errors.price && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.price}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="1"
                                        value={data.stock}
                                        onChange={(e) =>
                                            setData('stock', e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                        placeholder="Enter stock quantity"
                                        required
                                    />
                                    {errors.stock && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.stock}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
                                    >
                                        {processing
                                            ? 'Saving...'
                                            : editingProduct
                                              ? 'Save Changes'
                                              : 'Add Product'}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={closeForm}
                                        className="rounded-lg bg-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <p className="text-gray-500">Total Products</p>
                            <h3 className="mt-2 text-2xl font-bold">
                                {products.length}
                            </h3>
                        </div>

                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <p className="text-gray-500">Total Stock</p>
                            <h3 className="mt-2 text-2xl font-bold">
                                {totalStock}
                            </h3>
                        </div>

                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <p className="text-gray-500">Inventory Value</p>
                            <h3 className="mt-2 text-2xl font-bold">
                                ₱{inventoryValue.toLocaleString('en-PH', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </h3>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-sm text-gray-500">
                                <tr>
                                    <th className="p-4">ID</th>
                                    <th className="p-4">Product Name</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Stock</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {products.length > 0 ? (
                                    products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="p-4">{product.id}</td>
                                            <td className="p-4 font-medium text-gray-800">
                                                {product.name}
                                            </td>
                                            <td className="p-4">
                                                ₱{Number(product.price).toLocaleString('en-PH')}
                                            </td>
                                            <td className="p-4">
                                                {product.stock}
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => openEditForm(product)}
                                                        className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-600"
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        onClick={() => deleteProduct(product)}
                                                        className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="p-8 text-center text-gray-500"
                                        >
                                            No products found. Click "Add Product" to get started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}
