import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'

export default function App() {

  return (
    <div className="w-full  font-Orbitron">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        
      </Routes>
    </div>
  )
}