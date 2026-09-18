import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <Link to="/" className="footer-logo">
              <img src="/Dental-Lounge-Logo.webp" alt="The Dental Lounge" />
            </Link>
            <p style={{ marginBottom: '1.5rem' }}>A modern dental practice committed to providing exceptional care, advanced technology, and personalized treatments for over a decade.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.instagram.com/bangaloredentist/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', backgroundColor: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="http://facebook.com/bangaloredentistfb/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', backgroundColor: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Information</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={20} className="text-primary" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>412, 5th Main Rd, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043</span>
              </li>
              <li>
                <Phone size={20} className="text-primary" style={{ flexShrink: 0 }} />
                <span>+91 9207069900</span>
              </li>

              <li>
                <Clock size={20} className="text-primary" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Mon-Sat: 10:00 AM - 8:00 PM<br/>Sun: Holiday</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Dental Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
