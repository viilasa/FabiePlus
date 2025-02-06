'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = {
  powder: [
    {
      name: 'Power Clean Detergent Powder',
      images: [
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738834727/cardd_ynadsu.svg',
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738836444/Products_yg1r0w.svg',
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738836823/3124_blonal.svg'
      ],
      description: 'An economical low suds powder detergent with long lasting fragrances, recommended for light soiled and medium soiled fabrics. It is versatile enough for hard or soft water, hot or cold. Highly recommended for both machine and hand washing.',
      weight: '2.5kg',
      features: ['Removes tough stains', 'Color protection', 'Fresh scent'],
      details: {
        description: 'Our premium detergent powder is specially formulated to deliver exceptional cleaning power while being gentle on fabrics. Perfect for both machine and hand washing.',
        benefits: [
          'Advanced stain removal technology',
          'Color-safe formula',
          'Biodegradable ingredients',
          'Suitable for all water temperatures',
          'Fresh long-lasting fragrance',
          'Economical packaging'
        ],
        specifications: {
          sizes: ['500g', '1kg', '2.5kg'],
          usage: 'One scoop per regular load',
          fabricTypes: 'All fabric types including delicates',
          scent: 'Ocean Breeze',
          packaging: 'Resealable bag with measuring scoop'
        },
        instructions: [
          'Sort clothes by color and fabric type',
          'Use appropriate amount based on load size',
          'For tough stains, apply directly on the spot',
          'Store in a cool, dry place'
        ]
      }
    }
  ],
  liquid: [
    {
      name: 'Ultra Clean Liquid Detergent',
      images: [
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738837596/3124_ylfaor.svg',
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738837100/3124_1_vintfu.svg',
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738837862/3124_1_dkhcc5.svg'
      ],
      description: 'An economical low suds liquid detergent. It is versatile enough for hard or soft water, hot or cold. Highly recommended for both front load and top load machine. Available in 1 ltr, 2 ltr and 4 ltr packaging.',
      sizes: ['1L', '2L', '4L'],
      features: ['No residue', 'Fresh fragrance', 'Suitable for all machines'],
      details: {
        description: 'Experience the power of cleaning with new Fabie Plus Liquid Detergent ough on stains, gentle on fabrics! Specially formulated to penetrate deep into fibers, it lifts away dirt and grime, leaving clothes fresh, bright, and soft. With every wash, enjoy a fresh fragrance, delicate yet enduring, lingers long after the wash, wrapping your garments in a serene embrace',
        benefits: [
          'Quick dissolving formula',
          'No residue technology',
          'Fabric softening agents',
          'Anti-bacterial properties',
          'Gentle on hands',
          'Machine & hand wash compatible'
        ],
        specifications: {
          sizes: ['1L', '2L', '4L'],
          usage: '30ml per regular load',
          fabricTypes: 'All washable fabrics',
          scent: 'Spring Fresh',
          packaging: 'Easy-pour bottle with measuring cap'
        },
        instructions: [
          'Measure according to load size',
          'Pour into running water',
          'For hand wash, dilute in water before use',
          'Keep bottle closed when not in use'
        ]
      }
    }
  ],
  cake: [
    {
      name: 'Premium Detergent Cake',
      images: [
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738835566/Products_f49d0p.svg',
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738838079/3124_2_losfc9.svg',
        'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738838425/3124_3_spo3gu.svg'
      ],
      description: 'an economical low suds washing bar with long lasting fragrances, recommended for highly soiled fabrics.',
      weight: '200g',
      features: ['Tough on stains', 'Gentle on hands', 'Fresh scent', 'Economical'],
      details: {
        description: 'Traditional detergent cake enhanced with modern cleaning technology. Perfect for hand washing and pre-treating tough stains.',
        benefits: [
          'Superior stain removal',
          'Long-lasting bar',
          'Pleasant fragrance',
          'Easy grip design',
          'Gentle on hands',
          'Cost-effective'
        ],
        specifications: {
          sizes: ['150g', '200g'],
          usage: 'Wet fabric and rub directly',
          fabricTypes: 'Best for cotton and synthetics',
          scent: 'Floral Fresh',
          packaging: 'Individual wrap'
        },
        instructions: [
          'Wet the fabric and the bar',
          'Rub directly on stained areas',
          'Use with gentle pressure',
          'Store in a dry soap dish'
        ]
      }
    }
  ]
};

const ProductCard = ({ product, category }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (cardRef.current?.offsetLeft || 0));
    setScrollLeft(cardRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (cardRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (cardRef.current) {
      cardRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <Card 
          className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col relative"
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500",
                    isHovered && "scale-110"
                  )}
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
            
            {isHovered && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-10"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className={cn(
              "absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300",
              isHovered && "opacity-100"
            )} />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {product.images.map((_: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentImageIndex === index 
                      ? "bg-white w-4" 
                      : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
          <CardHeader className="flex-grow">
            <CardTitle className="text-xl font-semibold text-blue-900">{product.name}</CardTitle>
            <CardDescription className="text-gray-600">{product.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AnimatePresence>
              {product.features && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <h4 className="font-medium text-sm text-blue-900">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature: string) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            {product.sizes && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-blue-900">Available Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <span
                      key={size}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
           
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="bg-white rounded-lg p-6 shadow-lg space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Product Description</h3>
            <p className="text-gray-600">{product.details.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.details.benefits.map((benefit: string) => (
                <li key={benefit} className="flex items-center space-x-2 text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Available Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {product.details.specifications.sizes.map((size: string) => (
                    <span key={size} className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Usage</h4>
                <p className="text-gray-600">{product.details.specifications.usage}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Suitable For</h4>
                <p className="text-gray-600">{product.details.specifications.fabricTypes}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Fragrance</h4>
                <p className="text-gray-600">{product.details.specifications.scent}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Usage Instructions</h3>
            <ul className="space-y-2">
              {product.details.instructions.map((instruction: string) => (
                <li key={instruction} className="flex items-center space-x-3 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('powder');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium detergents designed for superior cleaning performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-[300px] mb-16 rounded-2xl overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1738832509/Hero_1_kafy3w.svg"
            alt="Fabie Plus Brand"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-lg"
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  Fabie Plus
                </h2>
                <p className="text-xl text-blue-100">
                  Experience the power of premium cleaning with our innovative detergent line, 
                  crafted for excellence and environmental consciousness.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <Tabs 
          defaultValue="powder" 
          className="space-y-8"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full justify-center bg-white/50 backdrop-blur-sm p-1 rounded-full">
            <TabsTrigger 
              value="powder"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Detergent Powder
            </TabsTrigger>
            <TabsTrigger 
              value="liquid"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Liquid Detergent
            </TabsTrigger>
            <TabsTrigger 
              value="cake"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Detergent Cake
            </TabsTrigger>
          </TabsList>

          {Object.entries(products).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              {items.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  category={category}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-24 bg-blue-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Our experts are here to help you find the perfect detergent for your needs
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 transition-colors duration-300"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  );
}