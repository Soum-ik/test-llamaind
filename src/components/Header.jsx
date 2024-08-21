import Layout from "./layout/Layout";
import headerImage from '../../public/images/header.png';
import waveVideo from '../../public/video/main-animation.mp4';
import { MoveRight } from 'lucide-react';
import arrow from '../../public/images/textSpin.png';
import { MoveDownRight } from 'lucide-react';
import { useRef } from 'react';



import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Header() {
    const header = useRef(null);

    // useGSAP(() => {
    //     // for the first animation
    //     var tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#instructor",
    //             start: "80% 85%",
    //             end: "70% 70%",
    //             scrub: true,
    //             // markers: true
    //         }
    //     });
    //     tl.to('#slider1-text', {
    //         opacity: 0,
    //         y: -40,
    //         x: -30,
    //         duration: 5,
    //     });
    //     tl.to('#instructor', {
    //         opacity: 0,
    //         duration: 5,
    //         x: 100,
    //         display: 'hidden'
    //     });
    //     tl.to('#projectMoveing', {
    //         opacity: 0,
    //         x: 100,
    //         rotate: "130deg",
    //     });
    //     tl.to('#slider1-video', {
    //         duration: 20,
    //         delay: 1,
    //         x: -540,
    //         y: 100
    //     });
    //     // for the last animation
    //     const tl2 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#slider2",
    //             start: "0% 90%",
    //             end: "80% 75%",
    //             scrub: true,
    //             // markers: true
    //         },
    //     });
    //     tl2.to('#slider2-text', {
    //         delay: 5,
    //         duration: 1,
    //         x: -1300,
    //         display: 'block'
    //     });

    // }, { scope: header.current });

    return (
        <div ref={header} className=" pb-[550px] md:pb-[700px]">
            <Layout>
                <div id="slider1" className="pt-[100px]">
                    <h1 id="slider1-text" className="slider1-text leading-[46px] md:leading-[120px] font-extrabold text-white header z-20 text-[42px] md:text-[100px] font-Orbitron text-center"   >
                        Pioneering the Future with
                        <br /> Digital Excellence
                    </h1>
                    <div id="slider1-video" className="slider1-video  relative flex items-center justify-center">
                        <div className="  !overflow-hidden flex items-center   justify-center !mx-auto ">
                            <video className=" z-10 -mt-[140px] md:-mt-56  mix-blend-plus-lighter !mx-auto   max-w-[950px] md:max-w-[2000px]" src={waveVideo} loop autoPlay muted />
                        </div>
                        <div className="absolute z-10 blur-[200px] rounded-full w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                        <img className=" z-20 absolute inset-0 mx-auto -top-[40px] md:-top-[90px] size-[346px] md:size-[770px]" src={headerImage} alt="" />
                    </div>
                </div>

                <div id="instructor" className='!text-white flex items-center  justify-between'>
                    <div className=' -ml-[50px] z-10 font-Roboto rotate-90  hidden md:flex  gap-5'>
                        Scroll down <MoveRight />
                    </div>
                    <div id="projectMoveing" className=' flex md:mt-0  -mt-[80px] items-center justify-center mx-auto z-10 group m-2 p-4 rounded-full relative transition-colors  duration-500 projectMovieCircel-gradient  hover:projectMovieCircel-gradient-hover backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                        <img className=' group-hover:animate-none animate-spin-slow transition-colors duration-500' src={arrow} alt="" />
                        <div className=" absolute top-1/2 left-1/2 transition-transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div id="slider2" className=" text-center md:text-right !flex relative  z-40  !justify-end ">
                    <div id="slider2-text" className="slider2-text  md:hidden md:-right-[1300px]  md:text-left z-40  top-[100px] md:-top-[280px]  text-ellipsis absolute font-light md:text-[37px] text-[22px] leading-[36px] md:leading-[64px] font-Roboto text-white max-w-[1050px]" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
                </div>
            </Layout>
        </div>
    );
}

export default Header;

