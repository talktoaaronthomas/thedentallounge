import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Contact the best dental clinic in Kalyan Nagar today to schedule your visit</p>
        </div>
      </div>

      <section className="section pt-0">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h3>
              
              <div className="contact-item">
                <MapPin size={24} style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Our Location</h4>
                  <p>412, 5th Main Rd, HRBR Layout 2nd Block, HRBR Layout,<br />Kalyan Nagar, Bengaluru, Karnataka 560043</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={24} style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
                  <p>+91 9207069900</p>
                </div>
              </div>



              <div className="contact-item">
                <Clock size={24} style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Opening Hours</h4>
                  <p>Mon-Sat: 10:00 AM - 8:00 PM<br />Sun: Holiday</p>
                </div>
              </div>
            </div>

            <div className="contact-form" style={{ padding: '2rem', background: 'var(--white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input type="text" className="form-control" placeholder="First Name" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input type="text" className="form-control" placeholder="Last Name" required />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input type="tel" className="form-control" placeholder="Phone Number" required />
                  </div>
                </div>
                <div className="form-group">
                  <select className="form-control" required defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics (Braces/Aligners)</option>
                    <option value="implants">Dental Implants</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
