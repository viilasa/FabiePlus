'use client';

import { motion } from 'framer-motion';

export function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Our Store
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our eco-friendly products firsthand at our store.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <div className="w-full aspect-[4/3] md:aspect-[16/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.223555770912!2d55.330953!3d25.285521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ca49a4520a5%3A0xbaed472d137799a8!2sAbu%20Hail%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1737045109599!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-12 max-w-lg mx-auto"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Mohammed Zainal Faridooni Building</h3>
          <p className="text-gray-600 mb-1">Abu Hail - Dubai - United Arab Emirates</p>
          <p className="text-gray-600 mb-1">Phone & WhatsApp: +971-502915676</p>
          <p className="text-gray-600 mb-1">Email: sales@sggeneraltrading.com</p>
          <p className="text-gray-600">Hours: Mon-Fri 08:00-19:00</p>
        </motion.div>
      </div>
    </section>
  );
}