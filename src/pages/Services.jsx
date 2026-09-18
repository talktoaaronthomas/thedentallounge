const servicesList = [
  { name: 'Bleeding Gums Treatment', image: '/services/Bleeding Gums Treatment.png', desc: 'Expert care for periodontal health and healthy gums.' },
  { name: 'Braces', image: '/services/Braces.png', desc: 'Traditional and modern orthodontic solutions for perfect alignment.' },
  { name: 'Clear Aligners', image: '/services/Clear Aligners.png', desc: 'Invisible, comfortable, and removable teeth straightening.' },
  { name: 'Dental Examination', image: '/services/Dental Examination.png', desc: 'Comprehensive checkups to maintain your oral health.' },
  { name: 'Dental Implants', image: '/services/Dental Implants.png', desc: 'Permanent and natural-looking tooth replacement. Experience why we are the best dental clinic in Bangalore for dental implants.' },
  { name: 'OPG Scan Facility', image: '/services/OPG Scan Facility.png', desc: 'Advanced panoramic X-rays for accurate diagnosis.' },
  { name: 'Pediatric Dentistry Care', image: '/services/Pediatric Dentistry Care.png', desc: 'Gentle and fun dental care tailored for children.' },
  { name: 'Root Canal Treatment', image: '/services/Root Canal Treatment.png', desc: 'Painless procedures to save and restore damaged teeth.' },
  { name: 'Smile Design', image: '/services/Smile Design.png', desc: 'Customized cosmetic treatments for your dream smile.' },
  { name: 'Teeth Whitening', image: '/services/Teeth Whitening.png', desc: 'Professional whitening for a brighter, more confident smile.' },
];

const Services = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive dental care tailored to your needs</p>
        </div>
      </div>

      <section className="section pt-0">
        <div className="container">
          <div className="grid-3">
            {servicesList.map((service, index) => (
              <div className="card" key={index}>
                <div className="card-img-wrapper">
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
    </div>
  );
};

export default Services;
