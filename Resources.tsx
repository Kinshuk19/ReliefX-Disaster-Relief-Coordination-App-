import React from 'react';
import { Phone, ChevronFirst as FirstAid, Home, Truck, Book, Shield } from 'lucide-react';

const Resources = () => {
  const emergencyContacts = [
    { name: 'National Emergency Number', number: '112' },
    { name: 'Police', number: '100' },
    { name: 'Fire', number: '101' },
    { name: 'Ambulance', number: '108' },
    { name: 'Disaster Management', number: '1078' },
    { name: 'Women Helpline', number: '1091' },
  ];

  const resources = [
    {
      title: 'Medical Resources',
      icon: <FirstAid className="h-8 w-8 text-red-500" />,
      items: [
        'List of COVID-19 Hospitals',
        'Blood Banks Directory',
        'Emergency Medical Services',
        'Mental Health Support',
      ],
    },
    {
      title: 'Shelter Information',
      icon: <Home className="h-8 w-8 text-blue-500" />,
      items: [
        'Emergency Shelter Locations',
        'Relief Camps',
        'Government Schools',
        'Community Centers',
      ],
    },
    {
      title: 'Relief Supplies',
      icon: <Truck className="h-8 w-8 text-green-500" />,
      items: [
        'Food Distribution Centers',
        'Water Supply Points',
        'Medical Supply Stations',
        'Essential Items Collection',
      ],
    },
    {
      title: 'Guidelines & Information',
      icon: <Book className="h-8 w-8 text-purple-500" />,
      items: [
        'Disaster Preparedness Guide',
        'First Aid Instructions',
        'Emergency Protocols',
        'Weather Alerts',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Emergency Resources</h1>

      {/* Emergency Contacts Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="h-6 w-6 text-primary-600" />
          <h2 className="text-2xl font-semibold">Emergency Contact Numbers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">{contact.name}</p>
              <p className="text-xl font-bold text-primary-600">{contact.number}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Important Websites</h2>
        <div className="space-y-3">
          <a href="https://ndma.gov.in" target="_blank" rel="noopener noreferrer" 
             className="block text-primary-600 hover:text-primary-700">
            National Disaster Management Authority (NDMA)
          </a>
          <a href="https://imd.gov.in" target="_blank" rel="noopener noreferrer"
             className="block text-primary-600 hover:text-primary-700">
            India Meteorological Department (IMD)
          </a>
          <a href="https://nidm.gov.in" target="_blank" rel="noopener noreferrer"
             className="block text-primary-600 hover:text-primary-700">
            National Institute of Disaster Management (NIDM)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;