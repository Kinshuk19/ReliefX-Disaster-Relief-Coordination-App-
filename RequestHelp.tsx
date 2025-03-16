import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const RequestHelp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    emergencyType: 'medical',
    description: '',
    peopleAffected: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented in the next phase
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-8 w-8 text-red-500" />
          <h1 className="text-3xl font-bold">Request Emergency Help</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Street address, city, state"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="emergencyType" className="block text-sm font-medium text-gray-700 mb-1">
              Emergency Type
            </label>
            <select
              id="emergencyType"
              name="emergencyType"
              value={formData.emergencyType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="medical">Medical Emergency</option>
              <option value="rescue">Rescue Needed</option>
              <option value="shelter">Need Shelter</option>
              <option value="food">Food & Water</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="peopleAffected" className="block text-sm font-medium text-gray-700 mb-1">
              Number of People Affected
            </label>
            <input
              type="number"
              id="peopleAffected"
              name="peopleAffected"
              value={formData.peopleAffected}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description of Emergency
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Submit Emergency Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestHelp;