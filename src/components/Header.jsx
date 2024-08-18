import Layout from "./layout/Layout";
import headerImage from '../../public/images/header.png';
import waveVideo from '../../public/video/hero.mp4';
import { MoveRight } from 'lucide-react'; 
import arrow from '../../public/images/textSpin.png';
import { MoveDownRight } from 'lucide-react';

import { useRef } from 'react';

// animation
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import { SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
// config animation
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Header() {
    const header = useRef(null);

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".slider2",
    //             start: "0% 95%",
    //             end: "70% 50%",
    //             scrub: true,
    //             delay: 0.5,
    //             onEnter: () => {
    //                 console.log('enter');
    //             }
    //         }
    //     });


    //     tl.from('.slider1-text', {
    //         x: "0%",
    //         y: "0%",
    //         duration: 3
    //     });
    //     tl.to('.slider1-text', {
    //         x: "30%",
    //         y: "50%",
    //         duration: 3
    //     });

    // }, { scope: header.current });



    return (
        <div ref={header}>
            <Layout>
                <div id="slider1" className="padding">
                    <h1 id="slider1-text" className="slider1-text font-bold text-white header z-20 text-7xl font-Orbitron text-center"   >
                        Pioneering the Future with
                        <br /> Digital Excellence
                    </h1>
                    <div id="slider1-video" className="slider1-video  relative flex items-center justify-center">
                        <div className="  !overflow-hidden flex items-center justify-center !mx-auto ">
                            <video className=" iamge-fixer  !mx-auto  !max-w-[1750px]" src={waveVideo} loop autoPlay muted />
                        </div>
                        <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                        <img className=" z-20 absolute inset-0 mx-auto -top-16 size-[660px]" src={headerImage} alt="" />
                    </div>
                </div>
                <div className='   !text-white flex items-center instructor-fixer justify-between'>
                    <div className=' z-10 font-Roboto rotate-90 flex items-center gap-5'>
                        Scroll down <MoveRight />
                    </div>
                    <div className='z-10 group m-2 p-4 rounded-full relative transition-colors  duration-500 bg-gradient-to-b from-[#5D5CE8] to-[#6CB1FF]  hover:to-[#06FFDF] hover:from-[#3534C0] backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                        <img className=' group-hover:animate-none animate-spin-slow transition-colors duration-500' src={arrow} alt="" />
                        <MoveDownRight className='  absolute left-1/2 top-1/2 size-10 group-hover:rotate-45 duration-500   -translate-x-1/2 -translate-y-1/2 transform' />
                    </div>
                </div>
                <div className=" slider2 !flex relative !justify-between mt-[300px] mb-[800px] ">
                    <div id="slider2-video" className=" absolute -left-[520px]">
                        <div className=" relative flex items-center justify-center">
                            <div className="  !overflow-hidden flex items-center justify-center !mx-auto ">
                                <video className=" iamge-fixer  !mx-auto  !max-w-[1750px]" src={waveVideo} loop autoPlay muted />
                            </div>
                            <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                            <img className=" z-20 absolute inset-0 mx-auto -top-16 size-[660px]" src={headerImage} alt="" />
                        </div>
                    </div>

                    <div id="slider2-text" className="slider2-text z-40 absolute pl-5 !top-24 text-ellipsis -right-10 font-light text-[37px] leading-[64px] font-Roboto text-white text-left max-w-[1050px]" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>

                </div>
            </Layout>
        </div>
    );
}

export default Header;

