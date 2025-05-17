import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../../types/types';


interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, description, image } = category;

  return (
    <Link
      to={`/products?category=${name}`}
      className="group relative overflow-hidden rounded-lg shadow-md"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
        <div className="mt-4 overflow-hidden">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 translate-y-8">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;