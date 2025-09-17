import React from 'react';
import { ArrowDown, Users, Globe, BookOpen, Play } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-12 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">AUT</span>
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-blue-600"></div>
              <div className="w-16 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">MNG</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Building
            <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Bridges
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            The Austrian-Mongolian Business Association fosters economic, cultural, and academic partnerships between two nations rich in heritage and opportunity.
          </p>

          {/* Video Play Button Overlay */}
          <div className="flex justify-center mb-8">
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300">
              <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToDonate}
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Support Our Mission
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-red-600 hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Economic Partnerships</h3>
              <p className="text-gray-600">Connecting businesses and fostering trade relationships between Austria and Mongolia.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 transform hover:-translate-y-2">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">Celebrating and sharing the rich cultural heritage of both nations.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 transform hover:-translate-y-2">
              <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Academic Collaboration</h3>
              <p className="text-gray-600">Facilitating educational partnerships and knowledge exchange programs.</p>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="mt-16 animate-bounce hover:animate-pulse transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;