import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ArrowLeft, ShoppingBag, Check, Minus, Plus } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  const product = id ? getProductById(parseInt(id, 10)) : undefined;
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)
    : [];

  useEffect(() => {
    // Reset selections when product changes
    if (product) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      
      setQuantity(1);
      
      // Scroll to top when product changes
      window.scrollTo(0, 0);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return (
      <div className="pt-24 pb-16 container-custom flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn-primary">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link 
                  to={`/products?category=${product.category}`} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  {product.category}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <Link 
              to="/products" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to products
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) 
                      ? 'text-accent-500 fill-current' 
                      : i < product.rating 
                        ? 'text-accent-500 fill-current opacity-50' 
                        : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-900">{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-500">{product.reviews} reviews</span>
            </div>
            
            <div className="text-2xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="border-t border-gray-200 py-6">
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-10 h-10 rounded-full ${
                          selectedColor === color 
                            ? 'ring-2 ring-offset-2 ring-primary-500' 
                            : ''
                        }`}
                        style={{ 
                          backgroundColor: color === 'ivory' ? '#fffff0' :
                                          color === 'natural' ? '#f5f5dc' :
                                          color === 'sage' ? '#bcbd8b' : 
                                          color === 'blush' ? '#ffb6c1' :
                                          color === 'terracotta' ? '#e2725b' :
                                          color === 'navy' ? '#000080' :
                                          color === 'dusty blue' ? '#8ca9b0' :
                                          color === 'clear' ? '#f8f8ff' :
                                          color === 'smoke' ? '#848884' :
                                          color === 'white' ? '#ffffff' :
                                          color === 'black' ? '#000000' :
                                          color === 'speckled' ? 'repeating-conic-gradient(#f3f3f3 0% 25%, #dedede 0% 50%)' :
                                          color === 'gray' ? '#808080' :
                                          color === 'amber' ? '#ffbf00' :
                                          color === 'cream' ? '#fffdd0' : color
                        }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-md text-sm ${
                          selectedSize === size
                            ? 'bg-primary-50 border-primary-500 text-primary-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center border border-gray-300 rounded-md w-32">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-900 p-2"
                    onClick={decrementQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-900 p-2"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Stock status */}
              <div className="flex items-center mb-6">
                <div className={`flex items-center ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? (
                    <>
                      <Check className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">
                        {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-medium">Out of Stock</span>
                  )}
                </div>
              </div>
              
              {/* Add to cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="btn-primary flex-1 py-3"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <Link to="/cart" className="btn-outline flex-1 py-3 text-center">
                  View Cart
                </Link>
              </div>
            </div>
            
            {/* Shipping info */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <p>Free shipping on orders over $75. Orders ship within 1-3 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;