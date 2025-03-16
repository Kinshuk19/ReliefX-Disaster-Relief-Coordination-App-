import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-primary-700">ReliefX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/disasters" className="text-gray-700 hover:text-primary-600">Active Disasters</Link>
            <Link to="/volunteer" className="text-gray-700 hover:text-primary-600">Volunteer</Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary-600">Resources</Link>
            <button 
              onClick={() => navigate('/request-help')}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              Request Help
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
              <Link to="/disasters" className="text-gray-700 hover:text-primary-600">Active Disasters</Link>
              <Link to="/volunteer" className="text-gray-700 hover:text-primary-600">Volunteer</Link>
              <Link to="/resources" className="text-gray-700 hover:text-primary-600">Resources</Link>
              <button 
                onClick={() => navigate('/request-help')}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
              >
                Request Help
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;