import Layout from "./layout/Layout";
import headerImage from '../../public/images/header.png';
import waveVideo from '../../public/video/main-animation.mp4';
import { MoveRight } from 'lucide-react';
import arrow from '../../public/images/Vector.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UseWindowSize from "../Hooks/UseGetScreenSize";
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger, useGSAP);


function Header() {
    const header = useRef(null);

    const { width } = UseWindowSize();
    useGSAP(() => {
        let leftValue = '';

        const calculateLeftValue = (width) => {
            if (width < 1500) {
                return -400;
            } else {
                return -540;
            }
        };
        leftValue = calculateLeftValue(width);


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#holder",
                start: "bottom+20% bottom+=20%",
                // end: "90% 60%",
                end: "200% 82%",
                // end: "60% 50%",          
                scrub: true,

            }
        });

        tl.to('#slider1-text', {
            opacity: 0,
            y: -40,
            duration: 5,
        });
        tl.to('#instructor', {
            opacity: 0,
            duration: 5,
            // x: 100,
            // display: 'hidden'
        });
        tl.to('#projectMoveing', {
            opacity: 0,
            // x: 100,
            rotateZ: 900,
        });
        tl.to('#slider1-video', {
            top: 70,
            left: leftValue,
            ease: "0.7, 0, 0.84, 0",
            duration: 20,
        });

        // Second timeline for slider2
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#holder",
                start: "bottom+20% bottom+=20%",
                end: "200% 82%",
                scrub: true,
                // markers: true,
            },
        });

        tl2.to('#slider2-text', {
            delay: 18,
            duration: 20,
            x: -1500,
            display: 'block',
            ease: "0.45, 0, 0.55, 1",
        });

        // Cleanup function to kill ScrollTriggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [width]);
    return (

        <>
            {/* bigger screen start */}
            <div ref={header} className="min-h-[80vh] hidden 3xl:pt-[60px] 13inch:flex items-center justify-center pb-[340px]">
                <Layout>
                    <div id="slider1" className="pt-[110px]">
                        <h1 id="slider1-text" className="slider1-text leading-[100px] laptop:leading-[120px] font-bold text-white header z-20 text-[80px] laptop:text-[100px] font-Orbitron text-center"   >
                            Pioneering the Future with
                            <br /> Digital Excellence
                        </h1>

                        <div>
                            <motion.div transition={{ ease: 'linear', duration: 5, delay: 1 }} id="slider1-video" className="slider1-video relative -mt-[70px] laptop:mt-0  flex items-center justify-center">
                                <div className="flex items-center justify-center !mx-auto size-[770px]">
                                    <video className=" z-10 -mt-[30vh] laptop:-mt-[18vh]  mix-blend-plus-lighter !mx-auto max-w-[1450px] laptop:max-w-[19200px]" src={waveVideo} loop autoPlay muted />
                                </div>
                                <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                                <img className=" z-20 absolute inset-0 mx-auto laptop:-top-[90px] size-[530px] laptop:size-[770px]" src={headerImage} alt="" />
                            </motion.div>
                        </div>
                    </div>

                    <div id="instructor" className='text-white instructor-fixer flex justify-between'>
                        <div className='-ml-[50px] z-10 font-Roboto rotate-90 flex gap-5'>
                            Scroll down <MoveRight />
                        </div>
                        <div id="projectMoveing" className='z-10 group rounded-full relative transition-colors  duration-500 projectMovieCircel-gradient  hover:projectMovieCircel-gradient-hover backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                            <img className=' group-hover:animate-none p-1 animate-spin-slow transition-colors duration-500 m-2' src={arrow} alt="" />
                            <div className="   absolute top-1/2 left-1/2 transition-transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div id="slider2" className=" text-right !flex relative  z-40  mb-20 !justify-end ">
                        <div id="slider2-text" className="slider2-text  hidden -right-[1600px] text-left z-40 -top-[220px]  text-ellipsis absolute font-light  text-[33px] leading-[50px] laptop:text-[37px] laptop:leading-[64px] font-Roboto text-white max-w-[900px] laptop:max-w-[1050px]" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
                    </div>
                    <div id="holder" className="hidden xl:block min-h-[10vh] mt-[130px]">
                    </div>
                </Layout>
            </div>
            {/* bigger screen end */}



            {/* smalll screen start */}
            <div className="relative 13inch:hidden">
                <Layout>
                    {/* <div className="z-40  flex items-center justify-center laptop:pt-[100px]  lg:pt-[200px]">
                        <h1 className=" mx-auto   absolute z-40  text-center leading-[46px] xs:leading-[55px] sm:leading-[65px] md:leading-[80px] lg:leading-[90px] text-[42px] xs:text-[55px] sm:text-[65px] md:text-[70px] font-extrabold text-white header  font-Orbitron">
                            Pioneering the Future with
                            <br /> Digital Excellence
                        </h1>
                    </div> */}

                    <div className="z-40  pt-[100px]">
                        <h1 className=" absolute z-40  leading-[46px] xs:leading-[55px] sm:leading-[65px] md:leading-[80px] lg:leading-[90px] 2xl:leading-[100px] text-[42px] xs:text-[55px] sm:text-[65px] md:text-[70px] lg:text-[90px]  font-extrabold text-white header  font-Orbitron text-center"   >
                            Pioneering the Future with
                            <br /> Digital Excellence
                        </h1>
                    </div>
                    <div className='text-white  mt-[800px] xs:mt-[900px] sm:mt-[1000px] md:mt-[1100px] z-50'>
                        <div className='  z-10 font-Roboto rotate-90  hidden xl:flex  gap-5'>
                            Scroll down <MoveRight />
                        </div>
                        <div className=' flex  size-[150px] sm:size-[170px] -mt-[200px] sm:-mt-[300px] items-center justify-center mx-auto z-[50] group m-2 p-4 rounded-full relative transition-colors  duration-500 projectMovieCircel-gradient  hover:projectMovieCircel-gradient-hover backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                            <img className=' group-hover:animate-none animate-spin-slow transition-colors duration-500' src={arrow} alt="" />
                            <div className=" absolute top-1/2 left-1/2 transition-transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    {/* llmamind about section start */}
                    <div className="  py-[100px] -z-0 text-center  !flex relative  items-center md:z-40  !justify-end ">
                        <div className="mix-blend-plus-lighter overflow-hidden  absolute -left-[600px] xs:-left-[900px] sm:-left-[1050px] lg:-left-[1200px] h-[100vh]">
                            <video className=" mix-blend-plus-lighter w-auto h-full " src={waveVideo} loop autoPlay muted />
                        </div>
                        <div className=" -top-[10px] md:-top-[170px] -left-[260px] sm:-left-[300px] absolute z-10 blue__gradient size-[450px] sm:size-[500px] md:size-[700px] xl:size-[1000px] rounded-full opacity-[0.4] md:opacity-[.3] xl:opacity-[.1]" />

                        {/* <div className="absolute z-40 sm:-z-10 rounded-full md:w-[900px]  w-[743px] h-[300px] md:h-[800px] -left-32 sm:-left-[600px] top-[96px] sm:-top-[70px] blur-[150px]  bottom-10 opacity-20   bg-[#5D5CE8]" /> */}
                        <div className=" sm:max-w-[800px] z-40 text-white text-[22px] text-center mx-auto xs:text-[26px] sm:text-[30px] md:text-[33px] lg:text-[36px] leading-[36px] xs:leading-[40px] sm:leading-[48px] font-Roboto font-light" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
                    </div>
                    {/* llmamind about section end */}

                </Layout>


                <div className="absolute sm:top-[110px] md:top-[10px]  xs:top-[120px] xxs:top-[130px] top-[110px] left-0 flex lg:h-[120vh] md:h-[102vh] sm:h-[90vh] xs:h-[80vh] h-[75vh]  w-full items-center justify-center overflow-hidden 13inch:hidden">
                    <video
                        src={waveVideo}
                        className="z-10 pt-[10px] md:pt-[100px] sm:mt-[40px] h-full w-auto object-cover"
                        loop
                        autoPlay
                        muted
                    />
                    <div className="top-[100px] lg:top-[200px] absolute z-10 mobile-blur-shadow-gradient xs:size-[500px] lg:size-[600px] size-[380px] rounded-full 13inch:hidden " />
                    <img className="absolute min-w-[450px] xs:w-auto h-[48vh] sm:h-[55vh] md:h-[65vh] lg:h-[73vh] xl:h-[80vh] md:max-w-[900px] md:bottom-[80px] lg:bottom-[140px] xl:bottom-[100px]  bottom-28  z-40" src={headerImage} alt="" />
                </div>
            </div>
            {/* smalll screen end */}
        </>
    );
}

export default Header;
