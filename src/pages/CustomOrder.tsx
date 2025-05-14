import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Upload, ArrowRight } from 'lucide-react';
import { useCustomOrder } from '../context/CustomOrderContext';
import { CustomOrder } from '../types/types';
import toast from 'react-hot-toast';

const CustomOrderPage: React.FC = () => {
  const navigate = useNavigate();
  const { addOrder } = useCustomOrder();
  
  const [formData, setFormData] = useState<Omit<CustomOrder, 'referenceImage'> & { referenceImage?: string }>({
    productName: '',
    description: '',
    estimatedPrice: 0,
    quantity: 1,
    name: '',
    email: '',
    phone: '',
  });
  
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFormData({ ...formData, [name]: numValue });
    } else if (value === '') {
      setFormData({ ...formData, [name]: 0 });
    }
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a storage service
      // For demo, we'll just create a local object URL
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setFormData({ ...formData, referenceImage: imageUrl });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.productName) newErrors.productName = 'Product name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.name) newErrors.name = 'Your name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation if provided
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[()-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Quantity validation
    if (formData.quantity < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit the order
      addOrder(formData as CustomOrder);
      
      // Navigate to success page
      navigate('/custom-order-success');
    } else {
      toast.error('Please fix the errors in the form');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-4">Request a Custom Order</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Can't find exactly what you're looking for? Let us create something special just for you. 
          Fill out the form below with your requirements, and our design team will get back to you within 48 hours.
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              </div>
              
              {/* Product Name */}
              <div className="col-span-full">
                <label htmlFor="productName" className="form-label">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className={`form-input w-full ${errors.productName ? 'border-red-500' : ''}`}
                  placeholder="e.g., Custom Dining Table"
                />
                {errors.productName && (
                  <p className="mt-1 text-sm text-red-600">{errors.productName}</p>
                )}
              </div>
              
              {/* Description */}
              <div className="col-span-full">
                <label htmlFor="description" className="form-label">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`form-input w-full ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Please describe what you're looking for in detail (dimensions, materials, color, etc.)"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>
              
              {/* Estimated Price */}
              <div>
                <label htmlFor="estimatedPrice" className="form-label">
                  Estimated Budget ($)
                </label>
                <input
                  type="number"
                  id="estimatedPrice"
                  name="estimatedPrice"
                  value={formData.estimatedPrice || ''}
                  onChange={handleNumberChange}
                  min="0"
                  step="0.01"
                  className="form-input w-full"
                  placeholder="Your budget (optional)"
                />
              </div>
              
              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity || 1}
                  onChange={handleNumberChange}
                  min="1"
                  className={`form-input w-full ${errors.quantity ? 'border-red-500' : ''}`}
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
                )}
              </div>
              
              {/* Reference Image */}
              <div className="col-span-full">
                <label htmlFor="referenceImage" className="form-label">
                  Reference Image (Optional)
                </label>
                <div className="mt-1 flex items-center space-x-4">
                  <label className="cursor-pointer btn-outline inline-flex items-center px-4 py-2">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Image
                    <input
                      type="file"
                      id="referenceImage"
                      name="referenceImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  
                  {previewImage && (
                    <div className="relative h-16 w-16 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={previewImage}
                        alt="Reference"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="col-span-full pt-6 mt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              </div>
              
              {/* Name */}
              <div className="col-span-full md:col-span-1">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input w-full ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              {/* Email */}
              <div className="col-span-full md:col-span-1">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input w-full ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              {/* Phone */}
              <div className="col-span-full">
                <label htmlFor="phone" className="form-label">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input w-full ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="(XXX) XXX-XXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              
              <div className="col-span-full mt-6">
                <button type="submit" className="btn-primary inline-flex items-center">
                  Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Specification</h3>
            <p className="text-gray-600">
              The more details you provide about your custom order, the better we can meet your requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full">
                <Upload className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Reference Materials</h3>
            <p className="text-gray-600">
              Images, sketches, or links to similar products help our artisans understand your vision.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-50 p-3 rounded-full">
                <ArrowRight className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">What's Next</h3>
            <p className="text-gray-600">
              After submission, we'll review your request and contact you within 48 hours with pricing and timeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderPage;