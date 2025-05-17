import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, searchProducts } from '../data/products';
import type { Product } from '../types/types';


const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [minRating, setMinRating] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Get category from URL params
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }

    // Apply filters
    applyFilters();
  }, [searchParams]);

  const applyFilters = () => {
    let results: Product[] = [...products];

    // Apply search term if exists
    if (searchTerm.trim() !== '') {
      results = searchProducts(searchTerm);
    }

    // Apply category filter if active
    if (activeCategory) {
      results = results.filter(product => 
        product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Apply price range filter
    results = results.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply rating filter
    if (minRating > 0) {
      results = results.filter(product => product.rating >= minRating);
    }

    setFilteredProducts(results);
  };

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    
    // Update URL parameters
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    
    setSearchParams(searchParams);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleRatingChange = (rating: number) => {
    setMinRating(rating);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setPriceRange([0, 2000]);
    setMinRating(0);
    setSearchTerm('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    applyFilters();
  }, [activeCategory, priceRange, minRating]);

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">আমাদের পন্যসমূহ</h1>
          <p className="text-gray-600 max-w-2xl">
            নিত্য প্রয়োজনীয় জিনিস বাজারদর অনুযায়ী  সেরা কোয়ালিটির পণ্য  প্রতারণামুক্ত ও নির্ভেজাল  নিশ্চিত করে আপনার বাসায়  পৌঁছে দিব.. আপনার যেকোনো দৈনন্দিন  প্রয়োজনে বাজার সদাযই আপনার পাশে থাকবে সবসময় ইনশাল্লাহ
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4" />
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button 
                  className="text-sm text-primary-600 hover:text-primary-800"
                  onClick={clearFilters}
                >
                  Clear All
                </button>
              </div>

              {/* Search Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Search</h3>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="form-input w-full pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </form>
              </div>

              {/* Categories Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    className={`block w-full text-left px-2 py-1.5 rounded ${
                      activeCategory === null ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleCategoryChange(null)}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-2 py-1.5 rounded ${
                        activeCategory === category.name ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <label className="text-xs text-gray-500">Min</label>
                      <div className="form-input">
                        ${priceRange[0]}
                      </div>
                    </div>
                    <div className="text-gray-400">-</div>
                    <div>
                      <label className="text-xs text-gray-500">Max</label>
                      <div className="form-input">
                        ${priceRange[1]}
                      </div>
                    </div>
                  </div>
                  <input
                    type="range"
                    name="min"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                  <input
                    type="range"
                    name="max"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="text-sm font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[0, 3, 4, 4.5].map((rating) => (
                    <button
                      key={rating}
                      className={`block w-full text-left px-2 py-1.5 rounded ${
                        minRating === rating ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => handleRatingChange(rating)}
                    >
                      {rating === 0 ? (
                        'All Ratings'
                      ) : (
                        <div className="flex items-center">
                          <span>{rating}+ ★</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Active Filters */}
            {(activeCategory || minRating > 0 || priceRange[0] > 0 || priceRange[1] < 2000) && (
              <div className="mb-4 flex flex-wrap gap-2">
                {activeCategory && (
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700">
                    Category: {activeCategory}
                    <button 
                      className="ml-1"
                      onClick={() => handleCategoryChange(null)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {minRating > 0 && (
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700">
                    Rating: {minRating}+
                    <button 
                      className="ml-1"
                      onClick={() => handleRatingChange(0)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {(priceRange[0] > 0 || priceRange[1] < 2000) && (
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700">
                    Price: ${priceRange[0]} - ${priceRange[1]}
                    <button 
                      className="ml-1"
                      onClick={() => setPriceRange([0, 2000])}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {filteredProducts.length} products
              </p>
              {/* Placeholder for future sorting functionality */}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-4">No products found matching your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;