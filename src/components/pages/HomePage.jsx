import Foooter from "../Foooter";
import FutureTech from "../HomePageComponent/FutureTech";
import Header from "../HomePageComponent/Header";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";

export default function HomePage() {
  return (
    <div className="h-auto bg-black font-Orbitron">
      <Navbar />
       <Header />  

      <FutureTech />
      <IndexProject />

      <OpenPosition />
      <Foooter />
    </div>
  );
}
