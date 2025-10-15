import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import AboutUs from './pages/AboutUs';
import OurVentures from './pages/OurVentures';
import CreareConsulting from './pages/CreareConsulting';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ventures" element={<OurVentures />} />
        <Route path="/consulting" element={<CreareConsulting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
              <ScrollToTopButton />
      <Footer />
    </Router>
  );
}
