'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Superior Stain Removal',
    description: 'Advanced formula that tackles even the toughest stains while being gentle on fabrics.',
    icon: Sparkles,
  },
  {
    title: 'Fabric Care',
    description: 'Specially designed to protect and preserve your clothes, keeping them looking newer for longer.',
    icon: Heart,
  },
  {
    title: 'Eco-Friendly',
    description: 'Biodegradable ingredients that are safe for the environment without compromising on cleaning power.',
    icon: Leaf,
  },
];

export function FeaturesSection() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Fabie Plus?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect balance of powerful cleaning and environmental responsibility.
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
              <Card className="h-full hover:shadow-lg transition-shadow">
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