'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const features = [
  {
    title: 'Premium Products',
    description: 'We distribute only the highest quality cleaning solutions, starting with our flagship Fabie Plus detergent line.',
    icon: TrendingUp,
    image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1738922176/CARD_1_o1fwug.svg',
  },
  {
    title: 'Quality Assurance',
    description: 'Every product in our portfolio undergoes rigorous quality checks to ensure consistent performance.',
    icon: Shield,
    image: 'https://res.cloudinary.com/ddhhlkyut/image/upload/v1739027492/CARD_2_np45lo.svg',
  },
  {
    title: 'Reliable Distribution',
    description: 'Our efficient distribution network ensures timely delivery across Dubai and surrounding regions.',
    icon: Truck,
    image: 'https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose SkyGlow Trading?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in premium cleaning product distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}