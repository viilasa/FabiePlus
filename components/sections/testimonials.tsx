'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homemaker',
    content: "Fabie Plus has transformed my laundry routine. The stain removal power is incredible, and I love knowing I'm using an eco-friendly product.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    name: 'Michael Chen',
    role: 'Environmental Activist',
    content: 'Finally, a detergent that delivers on its eco-friendly promises without compromising on cleaning power. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    name: 'Emma Thompson',
    role: 'Fashion Designer',
    content: 'As someone who works with fabrics daily, I appreciate how gentle yet effective Fabie Plus is. It keeps clothes looking new longer.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="max-w-2xl mx-auto">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}