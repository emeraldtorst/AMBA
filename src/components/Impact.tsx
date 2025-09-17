import React from 'react';
import { TrendingUp, Users, Globe, BookOpen, Award, Heart } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring success through meaningful partnerships, economic growth, and cultural understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
            <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">€5.2M</div>
            <div className="text-gray-700 font-semibold mb-2">Trade Volume Generated</div>
            <div className="text-sm text-gray-600">Cumulative trade facilitated through our partnerships</div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">850+</div>
            <div className="text-gray-700 font-semibold mb-2">Business Connections</div>
            <div className="text-sm text-gray-600">Companies connected across both nations</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center">
            <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-yellow-600 mb-2">120+</div>
            <div className="text-gray-700 font-semibold mb-2">Students Exchanged</div>
            <div className="text-sm text-gray-600">Academic exchange participants</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">75+</div>
            <div className="text-gray-700 font-semibold mb-2">Cultural Events</div>
            <div className="text-sm text-gray-600">Events promoting cultural understanding</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-700 font-semibold mb-2">Success Rate</div>
            <div className="text-sm text-gray-600">Of facilitated partnerships still active</div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-pink-600 mb-2">1,200+</div>
            <div className="text-gray-700 font-semibold mb-2">Community Members</div>
            <div className="text-sm text-gray-600">Active AMBA community participants</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Alpine Mining Solutions</h4>
                  <p className="text-gray-600 mb-3">
                    "Through AMBA's networking events, we secured a €1.2M contract with Mongolian mining companies. The association's expertise in cross-cultural business was invaluable."
                  </p>
                  <div className="text-sm font-semibold text-red-600">- Klaus Weber, CEO</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Nomadic Tech Innovations</h4>
                  <p className="text-gray-600 mb-3">
                    "AMBA facilitated our entry into the Austrian market. Their cultural insights and business connections helped us establish successful partnerships in renewable energy."
                  </p>
                  <div className="text-sm font-semibold text-blue-600">- Batbayar Erdene, Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;