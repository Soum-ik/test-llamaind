import Foooter from "../Foooter";
import FutureTech from "../FutureTech";
import Header from "../Header";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";

export default function HomePage() {
    return (
        <div className="  bg-black font-Orbitron">
            <Navbar />
            <Header />
            <FutureTech />
            <IndexProject />
            <OpenPosition />
            <Foooter />
        </div>
    );
}