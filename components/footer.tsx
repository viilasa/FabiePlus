import Link from 'next/link';
import { Building, Facebook, Twitter, Instagram, Mail, Phone, Clock, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">SkyGlow Trading</span>
            </Link>
            <p className="text-gray-600">
              Your trusted partner in premium product distribution.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Mohammed Zainal Faridooni Building
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Abu Hail - Dubai - UAE
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +971 55 790 6845 <br /> +971 50 733 4611 <br /> +971 50 291 5676
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                sales@sggeneraltrading.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Mon-Fri 08:00-19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} SkyGlow Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
