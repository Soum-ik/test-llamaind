import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CareerPage from './components/pages/CareersPage';
import JobDetailsPage from './components/pages/JobDetailsPage';
import ContactPage from './components/pages/ContactPage';
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      wrapper: window,
      content: document.documentElement,
      duration: 1.5, // Increasing duration for a slower, smoother scroll
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true, // Smoothing touch as well
      wheelMultiplier: 0.75, // Reducing wheel multiplier for smoother scroll on wheel events
      touchMultiplier: 1.5, // Reducing touch multiplier for smoother touch scrolling
      normalizeWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 6),
    }
  });
  return (
    <div className="w-full  font-Orbitron">
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