import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AMBA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">AMBA</h1>
              <p className="text-xs text-gray-600">Austrian-Mongolian Business Association</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-red-600 transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-red-600 transition-colors">
              Impact
            </button>
            <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-red-600 transition-colors">
              News
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Donate Button */}
          <button
            onClick={() => scrollToSection('donate')}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <Heart size={16} />
            <span>Donate</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-2 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
                About
              </button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
                Events
              </button>
              <button onClick={() => scrollToSection('impact')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
                Impact
              </button>
              <button onClick={() => scrollToSection('news')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
                News
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('donate')}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-full w-full justify-center"
              >
                <Heart size={16} />
                <span>Donate</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;