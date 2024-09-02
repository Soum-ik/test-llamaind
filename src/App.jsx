import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CareerPage from './components/pages/CareersPage';
import JobDetailsPage from './components/pages/JobDetailsPage';
import ContactPage from './components/pages/ContactPage';
 
export default function App() {
   
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