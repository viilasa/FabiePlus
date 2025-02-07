'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">About SkyGlow Trading</h2>
            <p className="text-lg text-gray-600">
            SkyGlow is set to become the leading FMCG Sales and Distribution company in the UAE. Our success is driven by a customer-centric approach, in-depth market research, and a commitment to excellence. With expert teams in Sales, Marketing, Logistics, and Management, we ensure top-tier service and continuous innovation.
            </p>
            <p className="text-lg text-gray-600">
            Utilizing advanced systems like SAP, Hand-held Terminals, and GPRS, we streamline supply chain operations for efficiency. Our extensive distribution network covers Hypermarkets, Supermarkets, Self-Service stores, Groceries, Wholesales, and HORECA, ensuring timely deliveries and seamless operations.


            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
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
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/21/full/1729486826-6805.jpg"
              alt="SkyGlow Trading Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}