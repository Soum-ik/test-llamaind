
import { useEffect } from "react";
import Foooter from "../Foooter";
import FutureTech from "../HomePageComponent/FutureTech";
import Header from "../HomePageComponent/Header";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";
import { useSmotherContext } from "../../Hooks/ScrollingContext";



export default function HomePage() {
 
    return (
        <div className="bg-black h-auto font-Orbitron">
            <Navbar />
            <Header />

            <FutureTech />
            <IndexProject />

            <OpenPosition />
            <Foooter />
        </div>

    );
}
