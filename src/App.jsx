import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CareerPage from './components/pages/CareersPage';
import JobDetailsPage from './components/pages/JobDetailsPage';
import ContactPage from './components/pages/ContactPage';
import LocomotiveScroll from 'locomotive-scroll';
import CircularProgressBar from './Animation/progessbar';
import { useEffect, useState } from 'react';

export default function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      duration: 1.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1.5,
      normalizeWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 6),
    }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handlePageLoad);

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);



  return (
    <div className="w-full h-screen font-Orbitron">


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/career/job-details/:jobName' element={<JobDetailsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

    </div>
  );
}
