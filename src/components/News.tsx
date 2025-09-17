import React from 'react';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "AMBA Facilitates €2M Mining Equipment Deal",
      excerpt: "Austrian machinery manufacturer secures major contract with Mongolian mining consortium through AMBA's business matchmaking program.",
      date: "January 15, 2024",
      category: "Business",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 2,
      title: "New Academic Exchange Program Launches",
      excerpt: "Partnership between Vienna University of Technology and National University of Mongolia to begin student exchanges in engineering fields.",
      date: "January 12, 2024",
      category: "Education",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Mongolian Delegation Visits Austria",
      excerpt: "High-level delegation from Mongolia's Ministry of Trade explores renewable energy partnerships with Austrian companies.",
      date: "January 8, 2024",
      category: "Diplomacy",
      image: "https://images.pexels.com/photos/3184313/pexels-photo-3184313.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Cultural Festival Attracts Record Attendance",
      excerpt: "AMBA's annual Mongolian Cultural Festival in Vienna draws over 3,000 visitors, strengthening cultural ties between the nations.",
      date: "December 20, 2023",
      category: "Culture",
      image: "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in Austria-Mongolia partnerships and AMBA initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {newsItems[0].category}
                    </span>
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-600">Featured</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{newsItems[0].title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{newsItems[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{newsItems[0].date}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-red-600 font-semibold hover:text-red-700">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other News Items */}
          {newsItems.slice(1).map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-red-600 font-semibold hover:text-red-700">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on Austria-Mongolia business opportunities and cultural events.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;