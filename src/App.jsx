import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <WhatsAppIcon />
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
