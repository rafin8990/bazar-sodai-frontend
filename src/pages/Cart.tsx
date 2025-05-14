import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  // Calculate tax (mock)
  const tax = cartTotal * 0.075; // 7.5% tax rate
  const shipping = cartTotal > 75 ? 0 : 9.99; // Free shipping over $75
  const orderTotal = cartTotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-16 container-custom flex flex-col items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                </div>
              </div>

              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-6 mb-4 sm:mb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link to={`/products/${item.id}`} className="text-lg font-medium text-gray-900 hover:text-primary-600">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                        <div className="flex items-center mb-4 sm:mb-0">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              type="button"
                              className="text-gray-600 hover:text-gray-900 p-2"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <button
                              type="button"
                              className="text-gray-600 hover:text-gray-900 p-2"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button
                            type="button"
                            className="ml-4 text-gray-500 hover:text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Price */}
                        <div className="flex items-baseline">
                          <span className="text-lg font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          {item.quantity > 1 && (
                            <span className="ml-2 text-sm text-gray-500">
                              (${item.price.toFixed(2)} each)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (7.5%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/checkout" className="btn-primary w-full py-3 text-center">
                  Proceed to Checkout
                </Link>
              </div>
              
              <div className="mt-4">
                <Link to="/products" className="text-primary-600 hover:text-primary-800 text-sm font-medium inline-flex items-center justify-center w-full">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import statement for ArrowLeft icon
import { ArrowLeft } from 'lucide-react';

export default Cart;