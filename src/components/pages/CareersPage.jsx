import Navbar from "../Navbar";
import Foooter from "../Foooter";
import ApplyForm from '../CarresPageComponent/ApplyForm';
import Positions from "../CarresPageComponent/Positions";
import Header from "../CarresPageComponent/Header";

export default function CareerPage() {
    return (
        <div className="  bg-black w-full  min-h-screen  font-Orbitron">
            <Navbar />
            <Header />
            <Positions />
            <ApplyForm />
            <Foooter />
        </div>
    );
}