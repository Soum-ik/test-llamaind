import Layout from "../layout/Layout";
import headerImage from '../../../public/images/header.png';
import waveVideo from '../../../public/video/main-animation.mp4';
import { MoveRight } from 'lucide-react';
import arrow from '../../../public/images/Vector.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UseWindowSize from "../../Hooks/UseGetScreenSize";
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
            <div ref={header} className="min-h-[110vh] hidden 3xl:pt-[60px] 4xl:pt-[80px] 4k:pt-[150px] 5k:pt-[160px] 6k:pt-[220px] 7k:pt-[270px] 8k:pt-[300px] 9k:pt-[750px]  10k:pt-[1000px] xl:block pb-[300px] 13inch:pb-[250px] laptop:pb-[340px]">
                <Layout>

                    <div id="slider1" className="pt-[110px] 3xl:pt-[50px] 4xl:pt-[60px]  5k:pt-[140px]">
                        <h1 id="slider1-text" className="slider1-text leading-[100px] laptop:leading-[120px] font-bold text-white header z-20 text-[75px] laptop:text-[100px] font-Orbitron text-center "   >
                            Pioneering the Future with
                            <br /> Digital Excellence
                        </h1>

                        <div>
                            <motion.div transition={{ ease: 'linear', duration: 5, delay: 1 }} id="slider1-video" className="slider1-video relative  -mt-[70px] laptop:mt-0 5k:mt-[20px]  flex items-center justify-center">
                                <div className="flex items-center justify-center !mx-auto size-[770px]">
                                    <video className=" z-10 -mt-[270px] laptop:-mt-[300px] 17inch:-mt-[250px] 6k:-mt-[108px] mix-blend-plus-lighter !mx-auto max-w-[1280px] 13inch:max-w-[1400px] laptop:max-w-[1600px] 17inch:max-w-[19200px]" playsInline src={waveVideo} loop autoPlay muted />
                                </div>
                                <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                                <img className=" z-20 absolute inset-0 mx-auto laptop:-top-[90px] size-[530px] laptop:size-[640px] 17inch:size-[770px]" src={headerImage} alt="" />
                            </motion.div>
                        </div>
                    </div>

                    {/* <div id="scroll" className='ease-in-out duration-500 transition-transform absolute mt-[150px] -left-[50px]  text-[18px] bg z-10 font-Roboto rotate-90 flex  gap-4'>
                        Scroll down <MoveRight />
                    </div> */}

                    <a href="#project" id="instructor" className='text-white instructor-fixer  px-3 flex justify-between'>
                        {/* <div className='-ml-[130px] z-10 font-Roboto rotate-90 flex gap-5 justify-end text-[18px] bg '>
                            Scroll down <MoveRight />
                        </div> */}
                        <div id="scroll" className='ease-in-out duration-500 transition-transform justify-start  items-end  text-[18px] bg z-10 font-Roboto rotate-90 flex  gap-4'>
                            Scroll down <MoveRight />
                        </div>
                        <div id="projectMoveing" className=' relative size-[160px] laptop:size-[170px]  z-10 group rounded-[154.55px] flex items-center justify-center projectMovieCircel-gradient  hover:projectMovieCircel-gradient-hover backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                            <img className='animate-spin-slow hover:rotate-180 transition-transform hover:animate-none duration-500 ' src={arrow} alt="" />
                            <div className=" absolute top-1/2 left-1/2 transition-transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </a>

                    <div id="slider2" className="  lg:w-[1100px] 13inch:w-auto text-right !flex relative  z-40  mb-20 !justify-end ">
                        <div id="slider2-text" className="slider2-text  hidden -right-[1630px] 13inch:-right-[1520px] 17inch:-right-[1500px] text-left z-40 -top-[220px] laptop:-top-[250px]  text-ellipsis absolute font-light  text-[33px] leading-[50px] xl:text-[30px] xl:leading-[46px] laptop:text-[35px] 17inch:text-[40px] laptop:leading-[64px] font-Roboto text-white max-w-[800px] 13inch:max-w-[900px] laptop:max-w-[1050px]" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
                    </div>
                    <div id="holder" className="hidden 13inch:block min-h-[10vh] mt-[130px]">
                    </div>

                </Layout>
            </div>
            {/* bigger screen end */}



            {/* smalll screen start */}
            <div className="min-h-[80vh]  relative pt-[10px] xl:hidden">
                <>
                    <div className="pt-[200px] sm:pt-[250px] lg:pt-[200px] flex items-center justify-center mx-auto">
                        <h1 className=" absolute z-20 px-[10px] lg:px-[15px] leading-[46px] xs:leading-[55px] sm:leading-[65px] md:leading-[80px] lg:leading-[90px] 2xl:leading-[100px] text-[42px] xs:text-[48px] sm:text-[65px] md:text-[70px] lg:text-[75px] xl:text-[85px]  font-extrabold text-white header  font-Orbitron text-center"   >
                            Pioneering the Future with
                            <br /> Digital Excellence
                        </h1>
                    </div>

                    <div className="absolute sm:top-[160px] md:top-[71px]  lg:-top-[10px]   xl:-top-[32px]  xs:top-[140px] xxs:top-[129px] top-[129px] left-0 flex  xl:h-[1050px] lg:h-[1030px] md:h-[940px] sm:h-[850px]  xs:h-[740px] h-[700px] w-full items-center justify-center overflow-hidden 13inch:hidden">
                        <video
                            src={waveVideo}
                            className="z-10  pt-[10px] md:pt-[100px] sm:mt-[40px]  h-full w-auto object-cover"
                            loop
                            autoPlay
                            muted
                            playsInline
                        />
                        <div className="top-[100px] xs:top-[70px] lg:top-[200px] absolute z-10 mobile-blur-shadow-gradient xs:size-[500px] lg:size-[600px] size-[390px] rounded-full 13inch:hidden " />
                        <img className="absolute min-w-[500px] xs:w-[200px] sm:w-[600px] h-[450px] z-20  xs:h-[500px] sm:h-[560px] md:h-[600px]   xl:h-[620px] lg:max-w-[1400px] md:max-w-[900px] md:bottom-[75px] lg:bottom-[140px] xl:bottom-[120px]  bottom-28" src={headerImage} alt="" />
                    </div>

                    <div className='text-white  mt-[700px] xs:mt-[800px] sm:mt-[1000px] md:mt-[1100px] z-50 '>
                        <div className='  z-10 font-Roboto rotate-90  hidden xl:flex  gap-5'>
                            Scroll down <MoveRight />
                        </div>
                        <a href="#project" className=' flex  size-[150px] md:size-[170px] sm:size-[170px] -mt-[160px] xs:-mt-[200px] sm:-mt-[290px] md:-mt-[360px] lg:-mt-[400px]  items-center justify-center mx-auto z-[50] group m-2 p-4 rounded-full relative transition-colors  duration-500 projectMovieCircel-gradient  hover:projectMovieCircel-gradient-hover backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                            <img className=' group-hover:animate-none animate-spin-slow transition-colors duration-500' src={arrow} alt="" />
                            <div className=" absolute top-1/2 left-1/2 transition-transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-45">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z" fill="white" />
                                </svg>
                            </div>
                        </a>
                    </div>


                    {/* llmamind about section start */}
                    <div className="lg:mt-[60px]  py-[100px] lg:py-[170px] -z-0 text-center  !flex relative  items-center md:z-40  !justify-end ">
                        <div className="mix-blend-plus-lighter overflow-hidden  absolute -left-[600px] xs:-left-[900px] sm:-left-[1050px] lg:-left-[1040px] h-[900px] ">
                            <video className=" z-[10] mix-blend-plus-lighter w-auto h-full " src={waveVideo} loop autoPlay muted playsInline />
                        </div>
                        <div className="-top-[10px] md:-top-[170px] -left-[260px] sm:-left-[300px] absolute z-10 blue__gradient size-[450px] sm:size-[500px] md:size-[700px] xl:size-[1000px] rounded-full opacity-[0.4] md:opacity-[.3] xl:opacity-[.3]" />
                        <div className=" md:px-[30px] lg:px-0  max-w-[400px] sm:max-w-[800px] z-40 text-white text-[22px] text-center mx-auto xs:text-[26px] sm:text-[30px] md:text-[33px]  leading-[36px] xs:leading-[40px] sm:leading-[48px] font-Roboto font-light" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
                    </div>
                    {/* llmamind about section end */}

                </>



            </div>
            {/* smalll screen end */}
        </>
    );
}

export default Header;
