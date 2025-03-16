import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, AlertTriangle, Users, Clock, Phone, Heart } from 'lucide-react';

const DisasterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data with Indian context
  const disasters = {
    '1': {
      id: '1',
      title: "Cyclone Michaung",
      location: "Chennai, Tamil Nadu",
      severity: "Critical",
      image: "https://images.unsplash.com/photo-1583245117386-f0fe26b8cbdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Severe cyclonic storm causing extensive flooding in Chennai and surrounding areas. Multiple neighborhoods evacuated. Emergency response teams deployed across affected regions.",
      affectedArea: "Chennai Metropolitan Area",
      peopleAffected: "50,000+",
      startDate: "2024-03-15",
      status: "Active",
      emergencyContacts: [
        { title: "Tamil Nadu Emergency Ops Center", number: "1070" },
        { title: "Chennai Corporation", number: "1913" },
      ],
      updates: [
        {
          date: "2024-03-15 14:30",
          message: "Red alert issued for Chennai and coastal districts"
        },
        {
          date: "2024-03-15 16:45",
          message: "Relief camps set up in 15 corporation zones"
        },
        {
          date: "2024-03-15 18:20",
          message: "NDRF teams deployed in vulnerable areas"
        }
      ]
    },
    '2': {
      id: '2',
      title: "Kerala Landslides",
      location: "Idukki, Kerala",
      severity: "High",
      image: "https://images.unsplash.com/photo-1573347675152-41c2523fc062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Multiple landslides reported in the hilly regions of Idukki district following heavy rainfall. Several communities isolated. Rescue operations in progress.",
      affectedArea: "Idukki District",
      peopleAffected: "15,000+",
      startDate: "2024-03-14",
      status: "Active",
      emergencyContacts: [
        { title: "Kerala State Emergency Ops Center", number: "1079" },
        { title: "Idukki District Collectorate", number: "0486-2232220" },
      ],
      updates: [
        {
          date: "2024-03-14 10:00",
          message: "Orange alert issued for Idukki district"
        },
        {
          date: "2024-03-14 13:15",
          message: "Evacuation ordered in high-risk areas"
        },
        {
          date: "2024-03-14 16:30",
          message: "Army assistance requested for rescue operations"
        }
      ]
    },
    '3': {
      id: '3',
      title: "Maharashtra Drought",
      location: "Marathwada Region",
      severity: "High",
      image: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Severe drought conditions affecting agricultural communities in Marathwada. Critical water shortage reported in multiple districts.",
      affectedArea: "8 Districts of Marathwada",
      peopleAffected: "100,000+",
      startDate: "2024-02-01",
      status: "Active",
      emergencyContacts: [
        { title: "Maharashtra Disaster Management", number: "1070" },
        { title: "Drought Relief Helpline", number: "022-22027990" },
      ],
      updates: [
        {
          date: "2024-03-10 09:00",
          message: "Water tankers deployed to affected villages"
        },
        {
          date: "2024-03-12 11:30",
          message: "Fodder camps established for livestock"
        },
        {
          date: "2024-03-14 14:45",
          message: "Additional relief funds allocated"
        }
      ]
    },
    '4': {
      id: '4',
      title: "Uttarakhand Flash Floods",
      location: "Chamoli, Uttarakhand",
      severity: "Critical",
      image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Flash floods causing widespread damage to infrastructure and communities in Chamoli district. Multiple bridges and roads affected.",
      affectedArea: "Chamoli District",
      peopleAffected: "25,000+",
      startDate: "2024-03-13",
      status: "Active",
      emergencyContacts: [
        { title: "Uttarakhand Emergency Ops Center", number: "1070" },
        { title: "Chamoli District Control Room", number: "01372-251437" },
      ],
      updates: [
        {
          date: "2024-03-13 08:00",
          message: "Flash flood alert issued for riverside areas"
        },
        {
          date: "2024-03-13 10:30",
          message: "Evacuation operations started in affected villages"
        },
        {
          date: "2024-03-13 14:15",
          message: "Army and NDRF teams deployed for rescue"
        }
      ]
    }
  };

  const disaster = disasters[id as keyof typeof disasters];

  if (!disaster) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Disaster not found</h1>
        <button
          onClick={() => navigate('/disasters')}
          className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
        >
          Back to Disasters
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img 
          src={disaster.image} 
          alt={disaster.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{disaster.title}</h1>
            <span className={`px-4 py-2 rounded-full text-white ${
              disaster.severity === 'Critical' ? 'bg-red-500' :
              disaster.severity === 'High' ? 'bg-orange-500' :
              'bg-yellow-500'
            }`}>
              {disaster.severity} Severity
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{disaster.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>Started: {new Date(disaster.startDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span>Affected Area: {disaster.affectedArea}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>People Affected: {disaster.peopleAffected}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disaster.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium">{contact.title}</p>
                    <p className="text-primary-600 font-bold">{contact.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Situation Overview</h2>
            <p className="text-gray-600">{disaster.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Latest Updates</h2>
            <div className="space-y-4">
              {disaster.updates.map((update, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-4">
                  <p className="text-sm text-gray-500">{update.date}</p>
                  <p className="text-gray-700">{update.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/volunteer')}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Heart className="h-5 w-5" />
              Volunteer to Help
            </button>
            <button 
              onClick={() => navigate('/request-help')}
              className="flex-1 flex items-center justify-center gap-2 bg-secondary-600 text-white py-3 rounded-lg hover:bg-secondary-700 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              Request Assistance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterDetails;