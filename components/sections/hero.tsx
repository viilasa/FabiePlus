'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const slides = [
  {
    image: 'https://i.ibb.co/zhMxjJpC/3a.jpg',
    title: 'Elevating Cleaning Standards',
    description: 'Your trusted partner in premium cleaning solutions',
  },
  {
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab',
    title: 'Premium Quality Products',
    description: 'Distributing the finest cleaning solutions across Dubai',
  },
  {
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8',
    title: 'Trusted by Leading Businesses',
    description: 'Building lasting partnerships through quality and reliability',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 9000, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative h-[100svh] overflow-hidden bg-black">
      <div ref={emblaRef} className="h-full overflow-hidden touch-pan-y">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Mobile Story Progress Bar */}
              <div className="absolute top-0 left-0 right-0 z-30 flex gap-1 p-2 md:hidden">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full overflow-hidden bg-white/30"
                  >
                    <div
                      className={`h-full bg-white transition-transform duration-[5000ms] ease-linear ${
                        i === currentSlide
                          ? 'w-full transform-none'
                          : i < currentSlide
                          ? 'w-full translate-x-0'
                          : 'w-full -translate-x-full'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Image with Next/Image for better performance */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              
              <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <motion.h1 
                      className="text-3xl md:text-6xl font-bold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p 
                      className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div 
                      className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 text-white">
                        Our Products
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Touch Areas */}
              <div className="absolute inset-0 z-20 md:hidden">
                <div
                  className="absolute left-0 top-0 h-full w-1/2"
                  onClick={() => emblaApi?.scrollPrev()}
                />
                <div
                  className="absolute right-0 top-0 h-full w-1/2"
                  onClick={() => emblaApi?.scrollNext()}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Navigation Controls */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 hidden md:flex justify-between z-20">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/20 border-white text-white hover:bg-white/40"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/20 border-white text-white hover:bg-white/40"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Desktop Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}