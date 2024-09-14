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

  const [loading, setLoading] = useState(true);  // Loading state to control page visibility
  useEffect(() => {
    const handlePageLoad = () => {
      console.log('Page fully loaded');
      setLoading(false);  // Hide loader when page is fully loaded
    };

    // Listen for window onload event
    window.addEventListener('load', handlePageLoad);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);



  return (
    <div className="w-full h-screen font-Orbitron">
      {/* Loading Screen with Circular Progress */}

      {loading ? <div className="fixed inset-0 flex justify-center items-center bg-black">
        <CircularProgressBar />
      </div> : <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/career/job-details/:jobName' element={<JobDetailsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      }

    </div>
  );
}
