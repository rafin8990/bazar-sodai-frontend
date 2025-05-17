import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';

import { useCart } from '../../context/CartContext';
import type { Product } from '../../types/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const {
    id,
    name,
    price,
    image,
    rating,
    reviews,
    category,
    new: isNew,
    sale: onSale
  } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="card group overflow-hidden">
      <Link to={`/products/${id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="h-64 bg-gray-100 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="badge bg-primary-500 text-white px-2 py-1">
                New
              </span>
            )}
            {onSale && (
              <span className="badge bg-accent-500 text-white px-2 py-1">
                Sale
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute right-3 bottom-3 bg-white rounded-full p-2 shadow-md opacity-0 transform translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary-50"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-5 w-5 text-primary-700" />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{category}</div>
          <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-1">{name}</h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-accent-500 fill-current" />
              <span className="ml-1 text-sm font-medium text-gray-900">{rating}</span>
            </div>
            <span className="mx-1 text-gray-400">•</span>
            <span className="text-sm text-gray-500">{reviews} reviews</span>
          </div>
          
          {/* Price */}
          <div className="mt-1 font-medium text-gray-900">${price.toFixed(2)}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;