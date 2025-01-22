'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2010, Fabie Plus emerged from a simple yet powerful idea: that clean clothes shouldn't come at the expense of our planet. We've dedicated ourselves to creating eco-friendly cleaning solutions that deliver exceptional results while protecting the environment.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to sustainability drives everything we do, from our biodegradable formulas to our recyclable packaging. We believe in transparency, innovation, and the power of conscious consumption to create positive change.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Eco-Friendly</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60"
              alt="Eco-friendly manufacturing facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}