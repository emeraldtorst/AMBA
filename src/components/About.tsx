import React from 'react';
import { Target, Heart, Handshake, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">AMBA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of mutual respect and shared prosperity, AMBA serves as the premier platform for Austrian-Mongolian collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are dedicated to strengthening the bonds between Austria and Mongolia through meaningful business partnerships, cultural understanding, and academic excellence. Our association serves as a trusted bridge, facilitating connections that drive economic growth and mutual understanding.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Strategic Partnerships</h4>
                  <p className="text-gray-600">Facilitating high-impact business collaborations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Cultural Bridge</h4>
                  <p className="text-gray-600">Promoting understanding through cultural exchange</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Handshake className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Trust & Integrity</h4>
                  <p className="text-gray-600">Building relationships based on transparency and mutual respect</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Austrian-Mongolian Partnership"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-blue-600 text-white p-6 rounded-xl shadow-xl">
              <Award className="w-8 h-8 mb-2" />
              <p className="font-semibold">Trusted Partner</p>
              <p className="text-sm opacity-90">Since 2018</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-700">Business Partnerships</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Cultural Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
              <div className="text-gray-700">Academic Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">€2M+</div>
              <div className="text-gray-700">Economic Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;