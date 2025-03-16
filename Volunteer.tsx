import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    availability: 'fulltime',
    experience: '',
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
          <UserPlus className="h-8 w-8 text-secondary-600" />
          <h1 className="text-3xl font-bold">Volunteer Registration</h1>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
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
              placeholder="City, State"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
              Skills & Certifications
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., First Aid, CPR, Heavy Equipment Operation"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            >
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="weekends">Weekends Only</option>
              <option value="oncall">On-call</option>
            </select>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Previous Experience
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={4}
              placeholder="Describe any relevant volunteer or professional experience"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary-600 text-white py-3 rounded-lg hover:bg-secondary-700 transition-colors"
          >
            Register as Volunteer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;