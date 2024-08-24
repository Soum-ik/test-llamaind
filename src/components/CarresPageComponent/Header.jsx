import Layout from "../layout/Layout";
import { staticData } from "../libs/staticData";
import Button from "../ui/Button";
import animation from '../../../public/video/carries1.mp4';
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
    const videoRef = useRef();
    const contentRef = useRef();


    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    useGSAP(() => {
        // Pin the video at its current position
        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: "center center",// Start when the top of the element reaches the center of the viewport
                end: "+=185%", // Pin until 100% of the viewport height has been scrolled
                pin: true,
                scrub: true,
            }
        });
        const textElements = Array.from(contentRef.current.children);

        textElements.forEach((text, index) => {
            gsap.fromTo(
                text,
                { opacity: 0, y: 100 }, // Initial state
                {
                    scrollTrigger: {
                        trigger: text,
                        start: "top 50%", // Start animation when the top of the text is in view
                        end: "top 25%",   // End when the top reaches near the top of the viewport
                        scrub: true,
                        onEnter: () => {
                            // Apply blur to all text elements except the current one
                            textElements.forEach((el, i) => {
                                if (i !== index) {
                                    gsap.to(el, { filter: "blur(10px)", duration: 0.5 });
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


    }, { scope: [contentRef, videoRef] });

    return <Layout>
        <div className="relative pt-[160px] flex items-start justify-between">
            <div ref={contentRef} className="z-40 max-w-[355px] md:max-w-[1000px]">
                <Innovative staticData={staticData[0]} />
                <CoreValus staticData={staticData[1]} />
                <BecomingOne staticData={staticData[2]} />
            </div>
            <div className="absolute -right-[60px] mt-[100px] z-10 w-[450px]">
                <video className="mix-blend-plus-lighte md:w-[1100px] w-full -mt-[260px]" src={animation} loop muted autoPlay />
                <div className=" -top-[200px] right-[2px]  absolute z-10   mobile-blur-shadow" />
            </div>
        </div>
    </Layout>;
}

export default Header;


const Innovative = ({ staticData }) => {
    return (
        <div className="text-white py-[50px] md:py-[150px] space-y-[20px]">
            <h1 className=" max-w-[800px] font-Orbitron text-[34px] md:text-[68px] leading-[40px] md:leading-[85.27px] font-extrabold">{staticData.title}</h1>
            <p className=" text-[#D5D5D5] text-[22px] md:text-[26px] leading-[36px] font-light font-Roboto">{staticData.description}</p>
            {/* <Button text="View Open positions" /> */}
            <button className=" btn-gradient w-full font-Roboto">View Open positions</button>
            {/* <Button text="View Open positions" /> */}
        </div>
    );
};

const CoreValus = ({ staticData }) => {
    return (
        <div className=" text-white relative py-[50px] md:py-[150px]">
            <h1 className=" max-w-[800px] font-Orbitron text-[34px] md:text-[68px] leading-[85.27px] font-extrabold">{staticData.title}</h1>
            <div className=" md:pt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {
                    staticData.core_values.map((item, idx) => (
                        <div key={idx} className=" border-l-2 border-[#5D5CE8] border-opacity-[20%] px-5 flex font-Roboto gap-[10px] flex-col">
                            <h1 className=" text-[22px] md:text-[26px]  font-semibold">{item.title}</h1>
                            <h1 className=" text-[#D5D5D5] text-[16px] font-Roboto leading-[20px] font-normal">{item.description}</h1>
                        </div>
                    ))
                }
                <div className=" top-[200px] right-[1px]  absolute z-10   mobile-blur-shadow" />
            </div>
        </div>
    );
};

const BecomingOne = ({ staticData }) => {
    return (
        <div className=" text-white py-[50px] md:py-[150px]">
            <h1 className=" max-w-[800px] font-Orbitron text-[34px] md:text-[68px] leading-[40px] md:leading-[85.27px] font-extrabold">{staticData.title}</h1>
            <div className=" pt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {
                    staticData.one_of_us.map((item, idx) => (
                        <div key={idx} className=" border-l-2 border-[#5D5CE8] border-opacity-[20%] px-5 flex font-Roboto gap-[10px] flex-col">
                            <h1 className=" text-[26px]  font-semibold">{item.title}</h1>
                            <h1 className=" text-[#D5D5D5] text-[16px] font-Roboto leading-[20px] font-normal">{item.description}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
