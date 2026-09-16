import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import AboutUs from './pages/AboutUs';
import OurVentures from './pages/OurVentures';
import CreareConsulting from './pages/CreareConsulting';
import Contact from './pages/Contact';
import KVCodes from './pages/KVCodes';
import ScrollToTopButton from './components/ScrollToTop';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.35,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ventures" element={<OurVentures />} />
          <Route path="/consulting" element={<CreareConsulting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kvcodes" element={<KVCodes />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
        <Navbar />
        <AnimatedRoutes />
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}
