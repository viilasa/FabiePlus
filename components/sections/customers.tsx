'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const customers = [
  {
    name: 'SOUQ AL MUBARAK',
    font: 'font-serif italic tracking-wide',
  },
  {
    name: 'EVERY DAY MALL',
    font: 'font-sans font-black tracking-tight',
  },
  {
    name: 'CENTRAL MARKET JABALALI',
    font: 'font-mono font-bold tracking-widest',
  },
  {
    name: 'BAQUER MOHEBI GROUPS',
    font: 'font-serif font-extrabold transform uppercase',
  },
  {
    name: 'AL AIN MARKET',
    font: 'font-sans italic font-semibold tracking-wide',
  },
  {
    name: 'MADINA GROUP',
    font: 'font-mono font-black uppercase tracking-wider',
  },
  {
    name: 'MEGA BAZAR',
    font: 'font-serif font-bold tracking-tight transform scale-105',
  },
  {
    name: 'BIG BAZAR',
    font: 'font-sans font-extrabold tracking-widest',
  },
  {
    name: 'B and C  class outlets in all over UAE market',
    font: 'font-mono italic font-black uppercase',
  },
];

export function CustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % customers.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Valued Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading businesses across UAE
          </p>
        </motion.div>

        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {customers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : 20,
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`absolute ${customer.font} text-4xl text-blue-900 text-center`}
                style={{
                  display: currentIndex === index ? 'block' : 'none',
                }}
              >
                {customer.name}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {customers.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-4 bg-blue-600' : 'bg-blue-200'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
