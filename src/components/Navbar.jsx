import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="glass-effect rounded-full px-8 py-3">
          <div className="flex justify-center space-x-8">
            <a href="#home" className="nav-link text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium">Home</a>
            <a href="#story" className="nav-link text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium">Love Story</a>
            <a href="#gallery" className="nav-link text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium">Gallery</a>
            <a href="#schedule" className="nav-link text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium">Schedule</a>
            <a href="#rsvp" className="nav-link text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium">RSVP</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;