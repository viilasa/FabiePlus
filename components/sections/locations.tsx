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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-[400px]"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Store Location</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600">Mohammed Zainal Faridooni Building</p>
                <p className="text-gray-600">Abu Hail - Dubai - United Arab Emirates</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <p className="text-gray-600">Phone & WhatsApp: +971 55 790 6845 <br /> +971 50 733 4611 </p>
                <p className="text-gray-600">Email: sales@sggeneraltrading.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 08:00 - 19:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}