import AboutUs from "./components/AboutUs";
import Foooter from "./components/Foooter";
import FutureTech from "./components/FutureTech";
import Header from "./components/Header";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";
import OpenPosition from "./components/OpenPosition";
import IndexProject from "./components/projects/IndexProject";

export default function App() {
  return (
    <div className=" bg-black w-full min-h-max font-Orbitron">
      <Navbar />
      <Header />
      <Instructor />
      <AboutUs />
      <FutureTech />
      <IndexProject />
      <OpenPosition />
      <Foooter />
    </div>
  )
}