'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Fabie Plus. By accessing our website and using our services, you agree to these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
            <p className="mb-4">
              Our services are provided "as is" and are intended for personal and commercial use in accordance with these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Product Information</h2>
            <p className="mb-4">
              We strive to provide accurate product information but do not warrant that product descriptions are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Pricing and Payment</h2>
            <p className="mb-4">
              All prices are subject to change without notice. We reserve the right to modify or discontinue services without liability.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Shipping and Delivery</h2>
            <p className="mb-4">
              Delivery times are estimates only. We are not liable for any delays beyond our control.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Returns and Refunds</h2>
            <p className="mb-4">
              Please refer to our Returns Policy for detailed information about returns and refunds.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p className="mb-4">
              For any questions regarding these terms, please contact us at sales@sggeneraltrading.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}