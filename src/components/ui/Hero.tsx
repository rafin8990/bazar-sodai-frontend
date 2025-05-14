import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/banner/banner-1.jpeg',
    title: 'Fresh Vegitable Big Discount ',
    subtitle: 'Save up to 50% off on your first order        ',
  },
  {
    image: '/banner/banner-2.jpeg',
    title: 'Don’t miss amazing grocery deals',
    subtitle: 'Sign up for the daily newsletter              ',
  },
  {
    image: '/banner/banner-3.jpeg',
    title: '"অবিশ্বাস্য গ্রোসারি ডিল মিস করবেন না"',
    subtitle: 'Sign up for the daily newsletter',
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides with animation */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform
              ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}
            `}
          >
            <img src={slide.image} alt="Slide" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container-custom relative h-full flex flex-col justify-center z-20">
        <div className="max-w-xl transition-opacity duration-700 animate-fade-in">
          <span className="inline-block mb-3 rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            2025
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6 tracking-tight">
            {slides[current].title}
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-md">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/about" className="btn-outline text-white border-white/30 backdrop-blur-sm hover:bg-white/10">
              Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-6 z-30">
        <button onClick={prevSlide} className="p-2 bg-black/40 hover:bg-black/60 text-white rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="p-2 bg-black/40 hover:bg-black/60 text-white rounded-full">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse z-20">
        <span className="text-sm text-white mb-2">Scroll Down</span>
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
