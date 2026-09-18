import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-wrapper">
      <div className="capsule-header">
        <Link to="/" className="nav-logo">
          <img src="/Dental-Lounge-Logo.webp" alt="The Dental Lounge" />
        </Link>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/doctors" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Doctors</NavLink>
          <NavLink to="/contact-us" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
          <Link to="/contact-us" className="btn btn-primary mobile-cta" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
        </nav>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, justifyContent: 'flex-end' }}>
          <Link to="/contact-us" className="btn btn-primary desktop-cta">Book Appointment</Link>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
