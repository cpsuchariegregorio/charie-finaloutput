<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Display products
    public function index()
    {
        $products = Product::latest()->get();

        return Inertia::render('Products', [
            'products' => $products,
            'success' => session('success'),
        ]);
    }

    // Save a new product
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        Product::create($validated);

        return redirect()->route('products')
            ->with('success', 'Product added successfully!');
    }

    // Dashboard summary
    public function dashboard()
    {
        $products = Product::all();

        return Inertia::render('Dashboard', [
            'totalProducts' => $products->count(),
            'totalStock' => $products->sum('stock'),
            'inventoryValue' => $products->sum(
                fn ($product) => $product->price * $product->stock
            ),
        ]);
    }
}