'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including name, email, and contact details when you use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, and to communicate with you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell or share your personal information with third parties except as described in this policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience on our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at sales@sggeneraltrading.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}