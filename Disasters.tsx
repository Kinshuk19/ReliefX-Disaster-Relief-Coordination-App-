import React from 'react';
import { MapPin, AlertTriangle, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Disasters = () => {
  const disasters = [
    {
      id: '1',
      title: 'Cyclone Michaung',
      location: 'Chennai, Tamil Nadu',
      severity: 'Critical',
      image: 'https://images.unsplash.com/photo-1583245117386-f0fe26b8cbdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      peopleAffected: '50,000+',
      description: 'Severe flooding and damage in Chennai metropolitan area. Emergency evacuation in progress.',
    },
    {
      id: '2',
      title: 'Kerala Landslides',
      location: 'Idukki, Kerala',
      severity: 'High',
      image: 'https://images.unsplash.com/photo-1573347675152-41c2523fc062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      peopleAffected: '15,000+',
      description: 'Multiple landslides reported in hilly regions. Rescue operations ongoing.',
    },
    {
      id: '3',
      title: 'Maharashtra Drought',
      location: 'Marathwada Region',
      severity: 'High',
      image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      peopleAffected: '100,000+',
      description: 'Severe water scarcity affecting agricultural communities.',
    },
    {
      id: '4',
      title: 'Uttarakhand Flash Floods',
      location: 'Chamoli, Uttarakhand',
      severity: 'Critical',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      peopleAffected: '25,000+',
      description: 'Flash floods causing widespread damage to infrastructure and communities.',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Active Disasters in India</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
            <option value="">All Regions</option>
            <option value="north">North India</option>
            <option value="south">South India</option>
            <option value="east">East India</option>
            <option value="west">West India</option>
            <option value="central">Central India</option>
            <option value="northeast">Northeast India</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
            <option value="">All Types</option>
            <option value="flood">Floods</option>
            <option value="cyclone">Cyclones</option>
            <option value="earthquake">Earthquakes</option>
            <option value="landslide">Landslides</option>
            <option value="drought">Droughts</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {disasters.map((disaster) => (
          <div key={disaster.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={disaster.image}
              alt={disaster.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-900">{disaster.title}</h2>
                <span className={`px-3 py-1 rounded-full text-white text-sm ${
                  disaster.severity === 'Critical' ? 'bg-red-500' :
                  disaster.severity === 'High' ? 'bg-orange-500' :
                  'bg-yellow-500'
                }`}>
                  {disaster.severity}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{disaster.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Affected: {disaster.peopleAffected}</span>
                </div>
                <p className="text-gray-600">{disaster.description}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <Link
                  to={`/disasters/${disaster.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disasters;