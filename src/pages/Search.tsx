import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { searchProducts } from '../data/products';
import type { Product } from '../types/types';


const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Search when component mounts or query param changes
  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (searchQuery: string) => {
    setIsSearching(true);
    
    // Update URL
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
    
    // Simulate loading state
    setTimeout(() => {
      const results = searchProducts(searchQuery);
      setResults(results);
      setIsSearching(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSearchParams({});
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">Search Products</h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, categories, etc."
                className="form-input w-full pl-12 pr-10 py-3 text-lg"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <div className="mt-4 flex justify-center">
              <button type="submit" className="btn-primary px-8">
                Search
              </button>
            </div>
          </form>
        </div>
        
        {/* Results */}
        <div className="mt-8">
          {initialQuery && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {isSearching ? (
                  'Searching...'
                ) : (
                  results.length > 0 ? (
                    `Found ${results.length} results for "${initialQuery}"`
                  ) : (
                    `No results found for "${initialQuery}"`
                  )
                )}
              </h2>
            </div>
          )}
          
          {isSearching ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : initialQuery ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-6">
                We couldn't find any products matching "{initialQuery}". Please try different keywords or browse our categories.
              </p>
              <Link to="/products" className="btn-primary">
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">
                Enter a search term above to find products.
              </p>
              <p className="text-gray-500">
                Try searching for product types, materials, colors, or room names.
              </p>
            </div>
          )}
        </div>
        
        {/* Search Suggestions */}
        {(!initialQuery || results.length === 0) && (
          <div className="mt-12">
            <h3 className="text-lg font-medium mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {['sofa', 'lamp', 'table', 'kitchen', 'bedroom', 'vase', 'chair', 'rug'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    handleSearch(term);
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;