import Foooter from "../Foooter";
import FutureTech from "../FutureTech";
import Header from "../Header";
import Instructor from "../Instructor";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";

export default function HomePage() {
    return (
        <div className="  bg-black w-full  font-Orbitron">
            <Navbar />
            <Header />
            <FutureTech />
            <IndexProject />
            <OpenPosition />
            <Foooter />
        </div>
    );
}