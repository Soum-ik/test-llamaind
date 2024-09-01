
import { useEffect } from "react";
import Foooter from "../Foooter";
import FutureTech from "../FutureTech";
import Header from "../Header";
import Navbar from "../Navbar";
import OpenPosition from "../OpenPosition";
import IndexProject from "../projects/IndexProject";
import { useSmotherContext } from "../../Hooks/ScrollingContext";
import App from "../HomePageComponent/test";
import { gsap } from "gsap/all";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomePage() {
    const lenis = new Lenis({
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
 
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