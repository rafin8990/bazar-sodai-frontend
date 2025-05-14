import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ShoppingBag } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  // Generate random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 900000) + 100000}`;
  
  return (
    <div className="pt-24 pb-16 container-custom flex flex-col items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-primary-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
          We'll send you a confirmation email shortly.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Order Details</h2>
            <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-medium">
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Method:</span>
              <span className="font-medium">Standard Shipping</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
          
          <Link to="/custom-order" className="btn-outline">
            <Package className="h-5 w-5 mr-2" />
            Create Custom Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;