const doctorsList = [
  { 
    name: 'Dr. Samar Mehtab', 
    image: '/doctors/Dr.-Samar-Mehtab.webp', 
    role: 'MDS, Periodontist & Oral Implantologist',
    experience: '12 Years Experience',
    description: 'Dr. Samar Mehtab is a highly skilled Dentist and Implantologist specializing in bi-cortical and conventional dental implants, offering advanced solutions for tooth replacement and oral rehabilitation.'
  },
  { 
    name: 'Dr. Shahul Kamal Asif', 
    image: '/doctors/Dr. Shahul Kamal Asif.webp', 
    role: 'BDS, Fellowship in Oral Implantology',
    experience: '11 Years Experience',
    description: 'Dr. Asif is dedicated to providing advanced dental care, with a strong focus on oral implantology and aesthetic dentistry, full-mouth rehabilitation, and smile enhancement procedures.'
  },
  { 
    name: 'Dr. Nida Abid', 
    image: '/doctors/Dr Nida Abid.webp', 
    role: 'Specialist in Endodontics',
    experience: '4 Years Experience',
    description: 'With a keen eye for precision, Dr. Nida is dedicated to providing exceptional care. Her expertise in root canals and restorative procedures ensures optimal oral health.'
  },
  { 
    name: 'Dr. Hajira Khanum', 
    image: '/doctors/Dr Hajira Khanum.webp', 
    role: 'Specialist in Endodontics',
    experience: '6 Years Experience',
    description: 'Dr. Hajira ensures a comfortable and stress-free experience, helping patients achieve optimal oral health with precision and care through expert root canal treatments.'
  },
  { 
    name: 'Dr. Riyas PA', 
    image: '/doctors/Dr Riyas PA.webp', 
    role: 'Specialist in Endodontics',
    experience: '10 Years Experience',
    description: 'With a patient-focused approach, Dr. Riyas specializes in root canal treatments and restorative procedures, ensuring a stress-free experience.'
  },
  { 
    name: 'Dr. Sajida Ali Begum', 
    image: '/doctors/Dr. Sajida Ali Begum.webp', 
    role: 'Maxillofacial Surgeon',
    experience: '6 Years Experience',
    description: 'Specializes in maxillofacial and facial plastic surgeries, offering advanced treatments such as Botox, Fillers, and Hair Transplant Surgeries.'
  },
  { 
    name: 'Dr. Anju Sarah Jacob', 
    image: '/doctors/Dr Anju Sarah Jacob.webp', 
    role: 'Consultant Orthodontist & Invisalign Specialist',
    experience: 'Expert',
    description: 'Dedicated to creating beautiful, healthy smiles using the latest techniques in braces and clear aligners with highly personalized patient care.'
  },
  { 
    name: 'Dr. Arbia Sultana', 
    image: '/doctors/Dr Arbia Sultana.webp', 
    role: 'General Dentist',
    experience: '2 Years Experience',
    description: 'Passionate about patient well-being, she focuses on preventive, restorative, and cosmetic dentistry to help patients achieve and maintain healthy smiles.'
  }
];

const Doctors = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Our Experts</h1>
          <p>Meet the team behind the best dental clinic in Kalyan Nagar, specializing in advanced treatments and dental implants</p>
        </div>
      </div>

      <section className="section pt-0">
        <div className="container">
          <div className="grid-3">
            {doctorsList.map((doctor, index) => (
              <div className="card" key={index} style={{ textAlign: 'center' }}>
                <div className="card-img-wrapper" style={{ height: '350px' }}>
                  <img src={doctor.image} alt={doctor.name} className="card-img" style={{ objectPosition: 'top' }} />
                </div>
                <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{doctor.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.25rem' }}>{doctor.role}</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>{doctor.experience}</p>
                  <p className="card-text" style={{ fontSize: '0.95rem', margin: 0, textAlign: 'left', flexGrow: 1 }}>{doctor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
