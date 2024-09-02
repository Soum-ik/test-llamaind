
import { useEffect } from "react";
import Foooter from "../Foooter";
import FutureTech from "../FutureTech";
import Header from "../Header";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";
import { useSmotherContext } from "../../Hooks/ScrollingContext";
import App from "../HomePageComponent/test";
import LocomotiveScroll from 'locomotive-scroll';


export default function HomePage() {
    const locomotiveScroll = new LocomotiveScroll();


    return (
        <div className="   bg-black font-Orbitron">
            <Navbar />
            <Header />
            <FutureTech />
            <OpenPosition />
            <Foooter />
        </div>

    );
}
