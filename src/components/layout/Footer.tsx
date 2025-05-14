import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h4 className="text-xl font-semibold mb-4">বাজার সদাই</h4>
            <p className="text-gray-400 mb-4">
               নিত্য প্রয়োজনীয় জিনিস বাজারদর অনুযায়ী  সেরা কোয়ালিটির পণ্য  প্রতারণামুক্ত ও নির্ভেজাল  নিশ্চিত করে আপনার বাসায়  পৌঁছে দিব.. আপনার যেকোনো দৈনন্দিন  প্রয়োজনে বাজার সদাই আপনার পাশে থাকবে সবসময় ইনশাল্লাহ
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Shop */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=Fruits%20%26%20Vegetables"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fruits & Vegetables
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Dairy%20%26%20Eggs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dairy & Eggs
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Meat%20%26%20Seafood"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Meat & Seafood
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Bakery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bakery
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Pantry%20Essentials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pantry Essentials
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Beverages"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beverages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Help */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/custom-order"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  মুকসুদপুর ইউনিয়ন, মইতপাড়া গ্রাম পল্লিবাজার
                  <br />
                  ঢাকা জেলা,দোহার থানা
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <PhoneCall className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">01804227813</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a
                  href="mailto:hello@luxehaven.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  solymansovon123@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Bazar Sodai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
