import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import waveVideo from "../../../public/video/about-us-new.mp4";
import waveVideo1 from "../../../public/video/main-animation.mp4";
import headerImage from "../../../public/images/aboutLogo.png";
import { Minus, MoveRight, Turtle } from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import Button from "../ui/Button";
import UseGetScroll from "../../Hooks/UseGetScroll";
import UseWindowSize from "../../Hooks/UseGetScreenSize";
import { contents } from "../libs/staticData";


// Register GSAP's ScrollTrigger
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Details() {
    const videoRef = useRef();
    const textRef = useRef();
    const { height, width } = UseWindowSize();

    useEffect(() => {
        // Debounce function to avoid multiple reloads
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 1280) {
                    window.location.reload();
                }
            }, 500); // 500ms debounce
        };

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [scrollTriggerConfig, setScrollTriggerConfig] = useState({
        start: 0,
        end: 0
    });




    useEffect(() => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            const start = rect.top + window.scrollY; // Top position relative to the document
            const end = rect.bottom + window.scrollY; // Bottom position relative to the document
            setScrollTriggerConfig({ start, end });
        }
    }, [width]);


    useGSAP(() => {
        let endValue;

        const calculateEndValue = (width) => {
            if (width > 2700) {
                return "+=174%";
            } else if (width > 2500) {
                return "+=180%";
            } else if (width >= 2400) {
                return "+=185%";
            } else if (width >= 2300) {
                return "+=176%";
            } else if (width >= 2200) {
                return "+=180%";
            } else if (width > 2100) {
                return "+=196%";
            } else if (width > 2000) {
                return "+=190%";
            } else if (width > 1900) {
                return "+=205%";
            } else if (width > 1800) {
                return "+=200%";
            } else if (width > 1600) {
                return "+=200%";
            } else if (width > 1500) {
                return "+=220%";
            } else if (width > 1400) {
                return "+=230%";
            } else if (width > 1300) {
                return "+=200%";
            } else if (width > 1250) {
                return "+=250%";
            } else {
                return "+=220%";
            }
        };
        endValue = calculateEndValue(width);
        console.log(endValue);

        gsap.to(videoRef.current, {

            scrollTrigger: {
                trigger: videoRef.current,
                start: `${scrollTriggerConfig.start} 210px`, // Start when the top of the element reaches the center of the viewport
                end: endValue,
                pin: true,
                scrub: true,
            },

        });
        const textElements = Array.from(textRef.current.children);

        textElements.forEach((text, index) => {
            gsap.fromTo(
                text,
                { opacity: 0, y: 100 }, // Initial state
                {
                    scrollTrigger: {
                        trigger: text,
                        start: "top 75%", // Start animation when the top of the text is in view
                        end: "top 25%",   // End when the top reaches near the top of the viewport
                        scrub: true,
                        onEnter: () => {
                            // Apply blur to all text elements except the current one
                            textElements.forEach((el, i) => {
                                if (i !== index) {
                                    gsap.to(el, { filter: "blur(0px)", duration: 0.5 });
                                }
                            });

                            // Clear blur on the current text element
                            gsap.to(text, { filter: "blur(0px)", duration: 0.5 });
                        },
                        onLeave: () => {
                            // Reset blur to all text elements when the current one leaves the viewport
                            textElements.forEach((el) => {
                                gsap.to(el, { filter: "blur(0px)", duration: 0.5 });
                            });
                        },
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    filter: "blur(0px)", // Clear blur when entering
                }
            );
        });


    }, [textRef, videoRef, width]);




    const item = contents[0];
    const item1 = contents[1];
    const item2 = contents[2];
    const scrolled = UseGetScroll();


    return (
        <div className="relative xs:pt-[130px] md:pt-[160px] xxs:pt-[100px] pt-[70px]">
            <Layout>

                {/* small screen size start */}
                <div className=" z-40 xs:pt-[250px] sm:pt-[330px] pt-[200px] slider2 flex xl:hidden relative !justify-between pb-[160px] md:px-[30px] lg:px-[70px]">
                    <div id="rightSide" className=" min-w-[355px] pt-[75px] md:space-y-[200px]  space-y-[160px] z-40">
                        <div data-aos="zoom-in-up" id="slider1-text" className=" space-y-3  z-30 text-white  text-5xl max-w-[1000px] " >
                            {item.top && <h5 className=" gap-3 flex items-center z-40 bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                            <h1 className=" z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{item.title}</h1>
                            <p className="z-40 text-[#D5D5D5] font-light text-[22px] md:text-[26px] leading-[36px] md:leading-[40px] font-Roboto pb-[20px]">{item.description}</p>
                            {item.button && <a href="/" className=" mt-[20px]"><button className="btn-gradient text-[20px] z-40 font-Roboto w-full md:max-w-max pt-[20px]">View Projects</button></a>}
                        </div>
                        <div data-aos="zoom-in-up" id="slider1-text" className=" space-y-3  z-30 text-white   text-5xl max-w-[1000px] " >
                            {item1.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                            <h1 className="  font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{item1.title}</h1>
                            <p className=" text-[#D5D5D5] font-light text-[22px] md:text-[26px] leading-[36px] md:leading-[40px] font-Roboto">{item1.description}</p>
                            {item1.button && <a href="/career" className=" mt-[20px]"> <button className="btn-gradient  text-[20px] font-Roboto w-full pt-[20px]">View Open positions</button></a>}
                        </div>
                        <div data-aos="zoom-in-up" id="slider1-text" className=" space-y-3  z-30 text-white   text-5xl max-w-[1000px] " >
                            {item2.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                            <h1 className="  font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{item2.title}</h1>
                            <p className=" text-[#D5D5D5] font-light text-[22px] md:text-[26px] leading-[36px] md:leading-[40px] font-Roboto">{item2.description}</p>
                            {item2.button && <a href="/career" className=" mt-[20px]"> <button className=" btn-gradient  text-[20px] font-Roboto w-full pt-[20px]">View Open positions</button></a>}
                        </div>
                    </div>
                </div>
                {/* small screen size end */}


                {/* big screen start */}
                <div className="hidden  laptop:mt-0 !pt-[50px] 3xl:pt-[200px] 4k:pt-[400px] slider2 xl:flex relative   !justify-between pb-[400px]">
                    <div ref={textRef} id="rightSide" className="pt-[50px] space-y-[500px] z-40">
                        <div className=" 2xl:min-h-[50vh] flex items-center justify-start">
                            <div id="slider1-text" className="  z-30 text-white text-5xl max-w-[700px] 2xl:max-w-[1000px] " >
                                {item.top && <h5 className=" gap-3 flex items-center bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                                <h1 className="  font-Orbitron text-[50px] leading-[75px] 2xl:text-[55px] laptop:text-[68px] 2xl:leading-[85.27px] font-extrabold  ">{item.title}</h1>
                                <p className=" mt-[10px] mb-[20px] text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto ">{item.description}</p>
                                {item.button && <a href="/"><Button style="py-[22px]" text="View Projects" /></a>}
                                {scrolled < 500 && <div id="scroll" className='ease-in-out duration-500 transition-transform absolute mt-[150px] -left-[50px]  text-[18px] bg z-10 font-Roboto rotate-90 flex  gap-4'>
                                    Scroll down <MoveRight />
                                </div>}
                            </div>
                        </div>
                        <div className="  2xl:min-h-[50vh] flex items-center justify-center">
                            <div id="slider2-text" className=" space-y-[20px]  z-30 text-white text-5xl max-w-[700px] 2xl:max-w-[1000px] " >
                                {item1.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                                <h1 className="  font-Orbitron text-[50px] leading-[75px] 2xl:text-[55px] laptop:text-[68px] 2xl:leading-[85.27px] font-extrabold  ">{item1.title}</h1>
                                <p className=" text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto">{item1.description}</p>
                                {item1.button && <a href="/"><Button text="View Project" /></a>}
                            </div>

                        </div>
                        <div className="  2xl:min-h-[50vh] flex items-center justify-start">
                            <div id="slider3-text" className=" space-y-[20px] z-30 text-white text-5xl max-w-[730px] 2xl:max-w-[1000px] " >
                                {item2.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                                <h1 className="  font-Orbitron text-[50px] leading-[75px] 2xl:text-[55px] laptop:text-[68px] 2xl:leading-[85.27px] font-extrabold ">{item2.title}</h1>
                                <p className=" text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto">{item2.description}</p>
                                {item2.button && <a href="/"><Button text="View Projects" /></a>}
                            </div>
                        </div>
                    </div>
                    {/* <div className=' -ml-[50px] z-10 font-Roboto rotate-90  hidden md:flex  gap-5'>
                        Scroll down <MoveRight />
                    </div> */}
                    <div ref={videoRef} id="slider2-video" className=" min-w-[500px] 4xl:pt-[53px] 4k:pt-[70px] 6k:pt-[200px] 7k:pt-[240px] 8k:pt-[500px] 9k:pt-[420px] 10k:pt-[670px] max-w-[1920px] absolute z-20 right-0">
                        <div className=" relative flex items-center z-40 justify-center">
                            <div className="z-[35] 2xl:w-[1020px] 2xl:h-[550px] laptop:w-[1240px] laptop:h-[640px] w-[990px] h-[500px] flex items-center justify-center !mx-auto">
                                <video id="videoMoving" playsInline className="z-[35] w-full h-full absolute left-[10px] " src={waveVideo} loop autoPlay muted />
                            </div>
                            <div className="absolute right-0 pb-10 z-[36] about-blur-shadow size-[1000px]" />
                            <img className="z-[40] absolute -right-0 mx-auto size-[700px] laptop:size-[800px] 17inch:size-[840px]" src={headerImage} alt="" />
                        </div>
                    </div>
                </div>
                {/* big screen end*/}

            </Layout>


            {/* small size device video part start */}
            <div className="absolute sm:-top-[80px] xs:-top-[40px]  -top-[20px] left-0 flex  lg:h-[969px] sm:h-[900px] xs:h-[750px] h-[630px]  w-full items-center justify-center overflow-hidden xl:hidden">
                <video
                    src={waveVideo1}
                    className="h-full w-auto object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                />
                <div className="top-[100px] xs:-top-[200px] sm:top-[10px] absolute z-10 mobile-blur-shadow-gradient md:size-[600px] xs:size-[500px] size-[340px] rounded-full xl:hidden mix-blend-plus-lighter" />
                <img className="absolute xs:w-[620px] w-[600px] z-30" src={headerImage} alt="" />
            </div>
            {/* small size device video part end */}

        </div>
    );
}

export default Details;