'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const featuredProducts = [
  {
    name: 'Premium Powder Detergent',
    image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1739958451/2_hiozph.svg',
    description: 'Advanced formula for deep cleaning',
  },
  {
    name: 'Liquid Detergent',
    image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1739959213/LDpink_h5ydno.svg',
    description: 'Perfect for machine & hand wash',
  },
  {
    name: 'Detergent Cake',
    image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738835566/Products_f49d0p.svg',
    description: 'Long-lasting with superior cleaning power',
  },
];

export function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setActiveIndex(null);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-24 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular cleaning solutions
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
            >
              <Card className={cn(
                "group relative overflow-hidden hover:shadow-lg transition-all duration-300 bg-white",
                activeIndex === index && "scale-105"
              )}>
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      activeIndex === index ? "scale-110" : "scale-100"
                    )}
                    unoptimized
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300",
                    activeIndex === index && "opacity-100"
                  )} />
                </div>
                <CardContent className={cn(
                  "p-6 transform transition-transform duration-300",
                  activeIndex === index && "translate-y-[-10px]"
                )}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg group"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
