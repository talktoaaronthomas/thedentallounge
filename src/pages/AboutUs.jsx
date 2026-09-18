import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover the passion and expertise behind The Dental Lounge</p>
        </div>
      </div>

      {/* Section 1 */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <img src="/about-clinic.webp" alt="About Clinic" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Over 10 Years of <span style={{ color: 'var(--primary)' }}>Exceptional Care</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                The Dental Lounge is a modern dental practice that caters to patients of all ages by providing comprehensive dental services.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Founded over a decade ago, The Dental Lounge began with a mission to provide high-quality dental care in a comfortable environment, utilizing the latest technology and techniques for the best patient experience.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                The practice has proudly served thousands of clients, including families, children, and individuals seeking specialized dental treatments across Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Our Commitment</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                At The Dental Lounge, we are committed to providing exceptional dental care with a focus on patient comfort, advanced technology, and personalized treatments. Our team of skilled professionals, led by Danish, ensures that every patient receives comprehensive and high-quality dental solutions tailored to their needs.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                As the best dental clinic in Kalyan Nagar, we are proud to serve a wider community, making top-tier dental care easily accessible. Whether it’s routine checkups, cosmetic dentistry, or advanced treatments, The Dental Lounge is dedicated to helping you achieve a healthy, confident smile in a warm and welcoming environment.
              </p>
            </div>
            <div>
              <img src="/about-logo.webp" alt="The Dental Lounge Logo" style={{ maxWidth: '300px', margin: '0 auto', display: 'block', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <img src="/inhouse-manufacturing.webp" alt="In-House Manufacturing Unit" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Our In-House <span style={{ color: 'var(--primary)' }}>Manufacturing Unit</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                At The Dental Lounge, we are committed to delivering the highest standard of dental care using the latest advancements in digital dentistry. Our clinic offers same-day dental restorations with cutting-edge technology, including the award-winning 3Shape TRIOS 4 intraoral scanner, TRIOS Design Studio, and the ultra-precise 5-axis PrograMill One milling machine. This seamless, in-house digital workflow ensures fast, accurate, and high-quality restorations—from scanning to milling—in a single visit.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We specialize in the manufacturing of top-quality ceramic and zirconia crowns, crafted with precision to provide natural aesthetics, durability, and a perfect fit. Our advanced chairside CAD/CAM technology allows us to design, customize, and mill restorations in-house, ensuring a comfortable, efficient, and hassle-free experience for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Danish Dhar<br/><span style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '500' }}>Managing Director</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                Danish Dhar, the Managing Director of The Dental Lounge, is the visionary leader behind its success. With a strong commitment to excellence, he has played a pivotal role in transforming the dental experience. Driven by a passion for patient-centered care, Danish established The Dental Lounge to create a warm and inviting atmosphere where patients feel comfortable and well cared for, ensuring quality dental services are accessible to everyone.
              </p>
              <h2 style={{ marginBottom: '1.5rem' }}>National Achiever’s Award 2025</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We are thrilled to announce that The Dental Lounge has been honored with the prestigious National Achiever’s Award 2025! This incredible achievement was proudly accepted by Dhanish Dhar, recognizing our commitment to excellence in dental care and patient satisfaction.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                This award fuels our passion to continue delivering top-notch dental services with innovation and care. Thank you for your trust and support!
              </p>
            </div>
            <div>
              <img src="/national-achievers.webp" alt="National Achievers Award" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <img src="/best-clinic.webp" alt="Leading Oral Healthcare" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Leading Oral Healthcare Service Provider</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Recognized as the best dental clinic in Bangalore for dental implants and a leading oral healthcare service provider in India, delivering exceptional care to patients from across the globe.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Danish Dhar, Managing Director of The Dental Lounge, proudly receives the award for being one of the leading oral healthcare service providers in India, delivering exceptional care to patients from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA Banner */}
      <section style={{ maxWidth: '900px', margin: '2rem auto 4rem', padding: '0 1.5rem' }}>
        <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '2rem 3rem', borderRadius: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ color: 'white', margin: 0, fontSize: '1.5rem', flex: '1 1 300px', textAlign: 'left' }}>
            Ready to experience exceptional dental care?
          </h2>
          <Link to="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', whiteSpace: 'nowrap' }}>
            Book an Appointment
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
