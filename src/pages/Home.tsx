import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react";
import Hero from "../components/ui/Hero";
import ProductCard from "../components/ui/ProductCard";
import CategoryCard from "../components/ui/CategoryCard";
import {
  getFeaturedProducts,
  getFeaturedCategories,
  getNewArrivals,
  getBestSellingProducts,
} from "../data/products";

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredCategories = getFeaturedCategories();
  const newArrivals = getNewArrivals();
  const bestSelling = getBestSellingProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Your Everyday Essentials Store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="btn-outline inline-flex items-center"
            >
              View All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular pieces, handpicked for their quality,
              design, and versatility
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="btn-success inline-flex items-center"
            >
              Shop All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                Just Arrived
              </span>
              <h2 className="text-3xl font-bold mb-4">New Season Collection</h2>
              <p className="text-white mb-8">
                Discover our latest designs that bring fresh perspectives to
                classic silhouettes. Crafted with premium materials and
                attention to detail.
              </p>
              <Link
                to="/products"
                className="btn bg-white text-primary-700 hover:bg-gray-100"
              >
                Shop New Arrivals
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newArrivals.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="bg-green-800 rounded-lg p-4 transition-transform hover:scale-105"
                >
                  <div className="h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                  <p className="text-primary-200 mb-3">
                    ${product.price.toFixed(2)}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-sm font-medium text-white inline-flex items-center hover:underline"
                  >
                    View Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <Truck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over $75 within the
                continental US.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <ShieldCheck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind every product with a 1-year warranty and
                satisfaction guarantee.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                Not happy with your purchase? Return within 30 days for a full
                refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bestSelling.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`} // Navigate to the product detail page
                className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition block"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-yellow-500 text-sm">
                    ⭐ {product.rating} ({product.reviews})
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        {/* Customer Reviews Section */}
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from the people who love our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emily R.",
                quote:
                  "Absolutely love the quality and design of the items I purchased. Fast delivery too!",
              },
              {
                name: "James K.",
                quote:
                  "Customer service was amazing. They helped me pick the perfect gift!",
              },
              {
                name: "Sophie M.",
                quote:
                  "Highly recommend this store. I keep coming back for more. Stylish and affordable.",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 italic mb-4">“{review.quote}”</p>
                <p className="text-sm font-medium text-primary-700">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
