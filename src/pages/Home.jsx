import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Microscope, ShieldCheck, ThumbsUp } from 'lucide-react';

const servicesList = [
  { name: 'Dental Implants', image: '/services/Dental Implants.png', desc: 'Permanent and natural-looking tooth replacement. Experience why we are the best dental clinic in Bangalore for dental implants.' },
  { name: 'Clear Aligners', image: '/services/Clear Aligners.png', desc: 'Invisible, comfortable, and removable teeth straightening.' },
  { name: 'Smile Design', image: '/services/Smile Design.png', desc: 'Customized cosmetic treatments for your dream smile.' },
  { name: 'Root Canal Treatment', image: '/services/Root Canal Treatment.png', desc: 'Painless procedures to save and restore damaged teeth.' },
  { name: 'Braces', image: '/services/Braces.png', desc: 'Traditional and modern orthodontic solutions for perfect alignment.' },
  { name: 'Teeth Whitening', image: '/services/Teeth Whitening.png', desc: 'Professional whitening for a brighter, more confident smile.' },
];

const testimonials = [
  { name: 'Rahul Sharma', text: 'The Dental Lounge changed my life! My dental implants look exactly like my natural teeth. Highly recommended for their expertise.' },
  { name: 'Sneha Patel', text: 'I was always terrified of dentists, but Dr. Hajira made my root canal completely painless. A truly wonderful experience!' },
  { name: 'Karthik N.', text: 'Best dental clinic in Kalyan Nagar. The in-house manufacturing means you don\'t have to wait weeks for a crown.' },
  { name: 'Priya M.', text: 'Dr. Anju is brilliant! My clear aligners are so comfortable and I am already seeing amazing results in just a few weeks.' },
  { name: 'Amit Desai', text: 'Very professional and clean clinic. The staff is extremely polite and the technology they use is absolutely top-notch.' },
];

const specialtyBoxes = [
  { icon: Award, title: 'Top-Rated Clinic', desc: 'Recognized as the best dental clinic in Kalyan Nagar.' },
  { icon: Microscope, title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise treatments.' },
  { icon: ShieldCheck, title: 'Expert Specialists', desc: 'Highly qualified doctors across all dental specialties.' },
  { icon: ThumbsUp, title: 'Patient Comfort', desc: 'A relaxing environment for a stress-free experience.' },
];

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Welcome to the Best Dental Clinic in Kalyan Nagar</h1>
            <p>At The Dental Lounge, we combine advanced technology with compassionate care. Recognized as the best dental clinic in Bangalore for dental implants, we are dedicated to giving you the perfect smile you've always dreamed of.</p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact-us" className="btn btn-primary">
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-image.webp" alt="Happy patient with a beautiful smile" />
          </div>
        </div>
      </section>

      {/* Specialty Boxes */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="grid-4">
            {specialtyBoxes.map((box, idx) => {
              const IconComponent = box.icon;
              return (
                <div key={idx} className="card specialty-card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className="specialty-icon-wrapper" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '50%', display: 'inline-flex' }}>
                    <IconComponent size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{box.title}</h3>
                  <p style={{ color: '#4b5563', margin: 0 }}>{box.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="section bg-color">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <img src="/about-clinic.webp" alt="About Clinic" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Over 10 Years of <span>Exceptional Care</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                The Dental Lounge is a modern dental practice that caters to patients of all ages by providing comprehensive dental services.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Founded over a decade ago, The Dental Lounge began with a mission to provide high-quality dental care in a comfortable environment, utilizing the latest technology and techniques for the best patient experience.
              </p>
              <Link to="/about-us" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Read More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section bg-color">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Our <span>Services</span></h2>
            <Link to="/services" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-3">
            {servicesList.map((service, index) => (
              <div className="card" key={index}>
                <div className="card-img-wrapper" style={{ height: '220px' }}>
                  <img src={service.image} alt={service.name} className="card-img" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-text">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">What Our <span>Patients Say</span></h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-author">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Ready for your perfect smile?</h2>
          <p style={{ color: 'white', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Schedule a consultation today and take the first step towards exceptional dental health and a confident smile.
          </p>
          <Link to="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
