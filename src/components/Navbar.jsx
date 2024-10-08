import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nstyle.css'; // Importing external stylesheet

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation(); // Get current route
  let lastScrollY = 0;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path ? { borderBottom: '2px solid white' } : {};
  };

  // Hide navbar on scroll down, show on scroll up
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // hide navbar
    } else {
      setShowNavbar(true); // show navbar
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div>
        <Link to="/" className="nav-item" style={isActive('/')}>
          HOME
        </Link>
        <Link to="/services" className="nav-item" style={isActive('/services')}>
          SERVICES
        </Link>
        <Link to="/about" className="nav-item" style={isActive('/about')}>
          ABOUT
        </Link>
        <Link to="/contact" className="nav-item" style={isActive('/contact')}>
          CONTACT
        </Link>
      </div>

      <div className="auth-links">
        <Link to="/login" className="nav-item" style={isActive('/login')}>
          LOGIN
        </Link>
        <Link to="/register" className="nav-item" style={isActive('/register')}>
          REGISTER
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-item" onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="/services" className="mobile-nav-item" onClick={toggleMenu}>
            SERVICES
          </Link>
          <Link to="/about" className="mobile-nav-item" onClick={toggleMenu}>
            ABOUT
          </Link>
          <Link to="/contact" className="mobile-nav-item" onClick={toggleMenu}>
            CONTACT
          </Link>
          <Link to="/login" className="mobile-nav-item" onClick={toggleMenu}>
            LOGIN
          </Link>
          <Link to="/register" className="mobile-nav-item" onClick={toggleMenu}>
            REGISTER
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
