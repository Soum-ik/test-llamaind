import Layout from "./layout/Layout";
import headerImage from '../../public/images/header.png';
import waveVideo from '../../public/video/hero.mp4';
import { MoveRight, Turtle } from 'lucide-react';
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

    useGSAP(() => {
        // for the first animation
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#instructor",
                start: "0% center",
                end: "bottom center",
                scrub: true,
            }
        });
        tl.to('#slider1-text', {
            opacity: 0,
            y: -40,
            x: 30,
            duration: 5,
        });
        tl.to('#instructor', {
            opacity: 0,
            duration: 5,
            x: 100
        });
        tl.to('#projectMoveing', {
            opacity: 0,
            x: 100,
            rotate: "130deg",
        });
        tl.to('#slider1-video', {
            duration: 20,
            delay: 1,
            x: -520,
            y: 104
        });
        // for the last animation
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#slider2",
                start: "80% 70%",
                end: "50% 50%",
                scrub: true,

            },
        });
        tl2.to('#slider2-text', {
            delay: 5,
            duration: 1,
            x: -1300,
            y: -30
        });

    }, { scope: header.current });

    return (
        <div ref={header} className=" mb-[500px]">
            <Layout>
                <div id="slider1" className="padding">
                    <h1 id="slider1-text" className="slider1-text leading-[120px] font-bold text-white header z-20 text-[100px] font-Orbitron text-center"   >
                        Pioneering the Future with
                        <br /> Digital Excellence
                    </h1>
                    <div id="slider1-video" className="slider1-video  relative flex items-center justify-center">
                        <div className="  !overflow-hidden flex items-center   justify-center !mx-auto ">
                            <video className=" iamge-fixer  !mx-auto  !max-w-[2000px]" src={waveVideo} loop autoPlay muted />
                        </div>
                        <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                        <img className=" z-20 absolute inset-0 mx-auto -top-[90px] size-[770px]" src={headerImage} alt="" />
                    </div>
                </div>

                <div id="instructor" className='!text-white flex items-center instructor-fixer justify-between'>
                    <div className=' z-10 font-Roboto rotate-90 flex items-center gap-5'>
                        Scroll down <MoveRight />
                    </div>
                    <div id="projectMoveing" className='z-10 group m-2 p-4 rounded-full relative transition-colors  duration-500 bg-gradient-to-b from-[#5D5CE8] to-[#6CB1FF]  hover:to-[#06FFDF] hover:from-[#3534C0] backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                        <img className=' group-hover:animate-none animate-spin-slow transition-colors duration-500' src={arrow} alt="" />
                        <MoveDownRight className='  absolute left-1/2 top-1/2 size-10 group-hover:rotate-45 duration-500   -translate-x-1/2 -translate-y-1/2 transform' />
                    </div>
                </div>

                <div id="slider2" className=" text-right !flex relative   !justify-end ">
                    <div id="slider2-text" className="slider2-text  -right-[1300px] text-left z-40  -top-36  text-ellipsis absolute font-light text-[37px] leading-[64px] font-Roboto text-white max-w-[1050px]" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
                </div>
            </Layout>
        </div>
    );
}

export default Header;

