import React from 'react';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Austria-Mongolia Trade Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Vienna Convention Center",
      attendees: 200,
      description: "Annual gathering of business leaders exploring trade opportunities and partnerships.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Mongolian Cultural Festival",
      date: "April 20, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Schönbrunn Palace Gardens",
      attendees: 500,
      description: "Celebrating Mongolian heritage with traditional music, dance, and cuisine.",
      image: "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Academic Exchange Program Launch",
      date: "May 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "University of Vienna",
      attendees: 150,
      description: "Launching new student and faculty exchange programs between Austrian and Mongolian universities.",
      image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const pastEvents = [
    {
      title: "Mining Technology Conference 2023",
      date: "November 2023",
      participants: 180,
      outcome: "3 major partnership agreements signed"
    },
    {
      title: "Austrian Culinary Week in Mongolia",
      date: "September 2023",
      participants: 300,
      outcome: "5 restaurants established partnerships"
    },
    {
      title: "Renewable Energy Symposium",
      date: "July 2023",
      participants: 120,
      outcome: "€500K investment commitments"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming events or learn about the impact we've made through past initiatives.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1 text-sm">
                      <Users size={14} />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2">
                    <span>Register Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Impact */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-red-100 to-blue-100 rounded-2xl p-6 mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 mb-3">{event.date}</p>
                  <div className="text-2xl font-bold text-red-600 mb-2">{event.participants}</div>
                  <div className="text-sm text-gray-500 mb-3">Participants</div>
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    {event.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;