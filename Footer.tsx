import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-700">ReliefX</span>
            </div>
            <p className="mt-2 text-gray-600">
              Connecting communities for faster disaster relief and recovery.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary-600">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary-600">Contact</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-primary-600">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/training" className="text-gray-600 hover:text-primary-600">Volunteer Training</a></li>
              <li><a href="/guidelines" className="text-gray-600 hover:text-primary-600">Safety Guidelines</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-primary-600">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Emergency: 911</li>
              <li className="text-gray-600">Hotline: 1-800-RELIEF</li>
              <li className="text-gray-600">Support: help@reliefx.org</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} ReliefX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;