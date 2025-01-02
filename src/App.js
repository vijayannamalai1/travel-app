import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Lazy loading components
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const FleetPage = lazy(() => import('./Pages/Fleet/FleetPage'));
const Fares = lazy(() => import('./Pages/Fares/Fares'));
const Booking = lazy(() => import('./Pages/Booking/Booking'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Header />
        <Suspense fallback={<div className='page'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/fares" element={<Fares />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
