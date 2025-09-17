import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AMBA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Austrian-Mongolian Business Association</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Building economic, cultural, and academic bridges between Austria and Mongolia through meaningful partnerships and sustainable collaboration.
            </p>
            <div className="flex items-center space-x-2 text-red-400">
              <Heart size={16} />
              <span className="text-sm">Strengthening bonds since 2018</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About AMBA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">Vienna, Austria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">+43 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">info@amba.at</span>
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Austrian-Mongolian Business Association. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;