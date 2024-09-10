
import { useEffect } from "react";
import Foooter from "../Foooter";
import FutureTech from "../FutureTech";
import Header from "../Header";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";
import { useSmotherContext } from "../../Hooks/ScrollingContext";
import App from "../HomePageComponent/test";


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
