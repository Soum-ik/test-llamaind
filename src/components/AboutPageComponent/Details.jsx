import React, { useRef } from "react";
import Layout from "../layout/Layout";
import waveVideo from "../../../public/video/hero.mp4";
import headerImage from "../../../public/images/aboutLogo.png";
import { Minus } from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import Button from "../ui/Button";


// Register GSAP's ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Details() {
    const videoRef = useRef();
    const textRef = useRef();

    useGSAP(() => {
        // Pin the video at its current position
        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: "center center", // Start when the top of the element reaches the center of the viewport
                end: "+=185%", // Pin until 100% of the viewport height has been scrolled
                pin: true,
                scrub: true,
            }
        });

        gsap.from(textRef.current.children, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top top", // Start animation when text hits the center of the viewport
                end: "bottom bottom",
                scrub: true,
            },
            opacity: 3,
            y: 50,
            stagger: .4,
            duration: 20,
            delay: 2
        });

    }, { scope: [textRef, videoRef] });


    const contents = [
        {
            title: "LlamaMind - Grow with Smart Solutions",
            description: "We innovate at the cutting edge, creating advanced applications that elevate user experiences. Our mission is to transform the app industry through intelligent insights and automation, setting new standards for digital excellence.",
            button: "View Project"
        },
        {
            top: true,
            title: "Empowering Tomorrow's Technology",
            description: "We envision a future where technology seamlessly integrates into everyday life, turning challenges into opportunities and driving progress across all sectors. Our unwavering commitment to excellence and innovation drives us to continuously push the boundaries of what's possible with tech-enhanced applications.",

        },

        {
            top: true,
            title: "Providing Futuristic Solutions",
            description: "Our primary goal is to empower businesses and individuals with intelligent, reliable, and scalable applications that harness the latest technological advancements to fuel growth, enhance decision-making, and create a smarter, more connected world. We are dedicated to making advanced technologies accessible and beneficial to all.",
        },
    ];

    const item = contents[0];
    const item1 = contents[1];
    const item2 = contents[2];


    return (
        <Layout>
            <div className=" !pt-[200px] slider2 !flex relative !justify-between  mb-[400px] ">
                <div ref={videoRef} id="slider2-video" className="  absolute padding-right">
                    <div className=" relative flex items-center justify-center">
                        <div className="!overflow-hidden flex items-center justify-center !mx-auto ">
                            <video className=" iamge-fixer  !mx-auto  !max-w-[1750px]" src={waveVideo} loop autoPlay muted />
                        </div>
                        <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                        <img className=" z-20 absolute inset-0 mx-auto -top-16 size-[660px]" src={headerImage} alt="" />
                    </div>
                </div>

                <div ref={textRef} id="rightSide" className="  space-y-[500px] z-40">
                    <div id="slider1-text" className=" space-y-3  z-30 text-white   text-5xl max-w-[1000px] " >
                        {item.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                        <h1 className="  font-Orbitron text-[68px] font-extrabold leading-[85.27px]">{item.title}</h1>
                        <p className=" text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto">{item.description}</p>
                        {item.button && <Button text="View Projects" />}
                    </div>
                    <div id="slider2-text" className=" space-y-3  z-30 text-white   text-5xl max-w-[1000px] " >
                        {item1.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                        <h1 className="  font-Orbitron text-[68px] font-extrabold leading-[85.27px]">{item1.title}</h1>
                        <p className=" text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto">{item1.description}</p>
                        {item1.button && <Button text="View Projects" />}
                    </div>
                    <div id="slider3-text" className=" space-y-3  z-30 text-white   text-5xl max-w-[1000px] " >
                        {item2.top && <h5 className=" gap-3 flex items-center  bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] bg-clip-text text-transparent font-normal text-[20px]">Our Vision <Minus className="bg-gradient-to-r from-[#5D5CE8] font-Roboto to-[#06FFDF] w-16 h-[3px]" /> </h5>}
                        <h1 className="  font-Orbitron text-[68px] font-extrabold leading-[85.27px]">{item2.title}</h1>
                        <p className=" text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto">{item2.description}</p>
                        {item2.button && <Button text="View Projects" />}
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Details;