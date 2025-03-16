import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Disasters from './pages/Disasters.tsx';
import Volunteer from './pages/Volunteer.tsx';
import Resources from './pages/Resources.tsx';
import RequestHelp from './pages/RequestHelp.tsx';
import DisasterDetails from './pages/DisasterDetails.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disasters" element={<Disasters />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/request-help" element={<RequestHelp />} />
            <Route path="/disasters/:id" element={<DisasterDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;