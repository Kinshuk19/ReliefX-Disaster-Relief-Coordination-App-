import React from 'react';
import { AlertTriangle, Users, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const disasters = [
    {
      id: '1',
      title: "Coastal Flooding",
      location: "Miami, FL",
      severity: "High",
      image: "https://images.unsplash.com/photo-1523498740588-9fc7453aef22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: '2',
      title: "Forest Fire",
      location: "Sacramento, CA",
      severity: "Critical",
      image: "https://images.unsplash.com/photo-1576044876297-0ab7661186b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: '3',
      title: "Tornado Damage",
      location: "Oklahoma City, OK",
      severity: "Moderate",
      image: "https://images.unsplash.com/photo-1507181080368-cc2195abacdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Rapid Response for Communities in Crisis
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          ReliefX connects disaster victims with volunteers and resources in real-time. 
          Together, we make emergency response faster and more effective.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/request-help')}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 text-lg font-semibold"
          >
            Request Help
          </button>
          <button 
            onClick={() => navigate('/volunteer')}
            className="bg-secondary-600 text-white px-8 py-3 rounded-lg hover:bg-secondary-700 text-lg font-semibold"
          >
            Volunteer Now
          </button>
        </div>
      </section>

      {/* Active Disasters Section */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Active Disasters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disasters.map((disaster, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={disaster.image} 
                alt={disaster.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{disaster.title}</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{disaster.location}</span>
                </div>
                <div className="flex items-center mt-2">
                  <AlertTriangle className={`h-4 w-4 mr-1 ${
                    disaster.severity === 'Critical' ? 'text-red-500' :
                    disaster.severity === 'High' ? 'text-orange-500' :
                    'text-yellow-500'
                  }`} />
                  <span className="text-gray-700">{disaster.severity} Severity</span>
                </div>
                <button 
                  onClick={() => navigate(`/disasters/${disaster.id}`)}
                  className="mt-4 w-full bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Users className="h-8 w-8 text-primary-600" />,
            stat: "10,000+",
            label: "Volunteers Mobilized"
          },
          {
            icon: <Clock className="h-8 w-8 text-primary-600" />,
            stat: "15 min",
            label: "Average Response Time"
          },
          {
            icon: <AlertTriangle className="h-8 w-8 text-primary-600" />,
            stat: "500+",
            label: "Disasters Managed"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;