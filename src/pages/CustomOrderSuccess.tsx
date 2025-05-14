import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';

const CustomOrderSuccess: React.FC = () => {
  // Generate request ID
  const requestId = `REQ-${Math.floor(Math.random() * 900000) + 100000}`;
  
  return (
    <div className="pt-24 pb-16 container-custom flex flex-col items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-primary-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Request Submitted!</h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your custom order request. Our team will review your requirements and get back to you 
          within 48 hours with further details.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Request Details</h2>
            <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Request ID:</span>
              <span className="font-medium">{requestId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Expected Response:</span>
              <span className="font-medium">
                {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <Link to="/products" className="btn-outline">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderSuccess;