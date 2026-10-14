<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charie Product Hub</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f4f7fb;
            color: #172033;
        }

        nav {
            background: #102a56;
            color: white;
            padding: 22px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        nav h1 {
            font-size: 23px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
        }

        .hero {
            background: linear-gradient(120deg, #102a56, #2878c8);
            color: white;
            padding: 100px 8%;
            text-align: center;
        }

        .hero h2 {
            font-size: clamp(32px, 5vw, 52px);
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 18px;
            line-height: 1.7;
        }

        .btn {
            display: inline-block;
            margin-top: 28px;
            background: white;
            color: #102a56;
            padding: 14px 26px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
        }

        section {
            padding: 60px 8%;
        }

        .section-title {
            text-align: center;
            margin-bottom: 35px;
            font-size: 30px;
        }

        .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 24px;
        }

        .card {
            background: white;
            border-radius: 12px;
            padding: 28px 20px;
            text-align: center;
            box-shadow: 0 4px 16px #0000000d;
        }

        .product-icon {
            font-size: 55px;
            margin-bottom: 15px;
        }

        .card h3 {
            margin-bottom: 12px;
        }

        .card p {
            color: #667085;
            line-height: 1.6;
        }

        footer {
            background: #102a56;
            color: white;
            text-align: center;
            padding: 25px;
        }

        @media (max-width: 600px) {
            nav {
                flex-direction: column;
                text-align: center;
            }

            nav a {
                margin: 8px;
            }

            .hero {
                padding: 70px 6%;
            }
        }
    </style>
</head>

<body>

    <nav>
        <h1>CHARIE PRODUCT HUB</h1>

        <div>
            <a href="/">Home</a>
            <a href="#products">Products</a>
            <a href="/login">Login</a>
            <a href="/register">Sign Up</a>
        </div>
    </nav>

    <div class="hero">
        <h2>Welcome to Charie Product Hub</h2>

        <p>
            Discover quality products at affordable prices.
            Your trusted destination for everyday essentials.
        </p>

        <a href="#products" class="btn">Explore Products</a>
    </div>

    <section id="products">
        <h2 class="section-title">Our Featured Categories</h2>

        <div class="products">
            <div class="card">
                <div class="product-icon">👕</div>
                <h3>Fashion</h3>
                <p>Discover clothing and everyday fashion essentials.</p>
            </div>

            <div class="card">
                <div class="product-icon">🎧</div>
                <h3>Electronics</h3>
                <p>Explore useful gadgets and electronic accessories.</p>
            </div>

            <div class="card">
                <div class="product-icon">🎒</div>
                <h3>Accessories</h3>
                <p>Find practical accessories for your daily needs.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>© {{ date('Y') }} Charie Product Hub. All rights reserved.</p>
    </footer>

</body>
</html>
