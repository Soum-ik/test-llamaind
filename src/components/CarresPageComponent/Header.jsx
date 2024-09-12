import Layout from "../layout/Layout";
import { staticData } from "../libs/staticData";
import Button from "../ui/Button";
import animation from '../../../public/video/carries1.mp4';
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";
import UseGetScroll from "../../Hooks/UseGetScroll";
import UseWindowSize from "../../Hooks/UseGetScreenSize";

// Register GSAP's ScrollTrigger
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Header() {
    const videoRef = useRef();
    const contentRef = useRef();
    const { width } = UseWindowSize();
    let projectsWidth = contentRef.current?.offsetHeight;

    useEffect(() => {
        // Debounce function to avoid multiple reloads
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                window.location.reload();
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
        if (contentRef.current) {
            const rect = contentRef.current.getBoundingClientRect();
            const start = rect.top + window.scrollY; // Top position relative to the document
            const end = rect.bottom + window.scrollY; // Bottom position relative to the document

            setScrollTriggerConfig({ start, end });
        }
    }, []);

    useGSAP(() => {
        let endValue;
        let startValue;
        const calculateEndValue = (width) => {
            if (width > 6000) {
                return "+=150%";
            }
            else if (width > 5000) {
                return "+=160%";
            } else if (width > 3400) {
                return "+=180%";
            } else if (width > 2700) {
                return "+=190%";
            } else if (width > 2500) {
                return "+=190%";
            } else if (width >= 2400) {
                return "+=200%";
            } else if (width > 2100) {
                return "+=220%";
            } else if (width > 1900) {
                return "+=212%";
            } else if (width > 1600) {
                return "+=220%";
            }
            else if (width > 1500) {
                return "+=270%";
            } else if (width > 1450) {
                return "+=230%";
            } else if (width > 1400) {
                return "+=250%";
            } else if (width > 1200) {
                return "+=220%";
            } else {
                return "+=200%";
            }
        };
        endValue = calculateEndValue(width);
        console.log(endValue);

        const calcultaion = (width) => {
            if (width > 2000) {
                return "top+=15%";
            }
            else {
                return "top+=4%";
            }
        };
        startValue = calcultaion(width);


        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: `top ${startValue}`,// Start when the top of the element reaches the center of the viewport
                end: endValue, // Pin until 100% of the viewport height has been scrolled
                pin: true,
                scrub: true,
                // markers: true
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
                            gsap.to('scroll', { opacity: '.2' });
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


    }, [contentRef, videoRef, width]);

    return (
        <div className=" relative xs:pt-[200px] md:pt-[160px] xxs:pt-[100px] pt-[70px]">
            <Layout>
                {/* small screen left side start */}
                <div className="xl:hidden z-[30] pt-[90px] xl:pt-0 pb-[160px] flex items-center justify-between">
                    <div className="z-40 max-w-[355px] xxs:max-w-max pt-[75px] sm:pt-[120px] md:pt-[210px] space-y-[230px] md:space-y-[200px]  xl:space-y-[450px]">
                        <Innovative staticData={staticData[0]} />
                        <CoreValus staticData={staticData[1]} />
                        <BecomingOne staticData={staticData[2]} />
                    </div>
                </div>
                {/* small screen left side end */}

                {/* big screen start */}
                <div className="hidden !pt-[100px] laptop:pt-0  xl:flex items-center justify-between">
                    <div ref={contentRef} className="z-40  space-y-[500px]">
                        <BigInnovative staticData={staticData[0]} />
                        <BigCoreValus staticData={staticData[1]} />
                        <BigBecomingOne staticData={staticData[2]} />
                    </div>
                    <div ref={videoRef} className="absolute top-0 2xl:top-[10px] 3xl:-top-[190px] 4xl:-top-[100px] 6k:pt-[15px] 8k:-top-[185px] 10k:pt-[100px] right-[0px] 2xl:right-[5px] 3xl:right-[140px] 4k:right-[300px] 5k:right-[400px] 6k:right-[900px] 8k:right-[1900px] 10k:right-[2800px] z-10">
                        <video playsInline className="3xl:-mt-[100px] mix-blend-plus-lighter w-[800px] 2xl:w-[850px] laptop:w-[900px]  17inch:w-[1000px] " src={animation} loop muted autoPlay />
                        <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 hidden md:block  opacity-40 -translate-x-1/2 -z-20  about-blur-shadow size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  2xl:size-[1000px]"></div>
                    </div>
                </div>
                {/* big screen end */}

            </Layout>
            <div className="absolute xs:top-[40px] top-[0px] left-0 flex md:h-[800px] sm:h-[700px] xs:h-[600px] h-[500px]  w-full items-center justify-center overflow-hidden xl:hidden">
                <video
                    src={animation}
                    className="h-full w-auto object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                />
                <div className="top-[100px] xs:-top-[1px] absolute z-[2000] mobile-blur-shadow-gradient  xs:size-[450px] size-[350px] rounded-full xl:hidden mix-blend-plus-lighter" />
                {/* <div className=" absolute z-[1000000] mobile-blur-shadow-gradient sm:size-[500px] size-[400px] rounded-full xl:hidden mix-blend-plus-lighter" /> */}
            </div>
        </div>
    );
}

export default Header;


const Innovative = ({ staticData, animation }) => {
    return (
        <div   {...(animation && { 'data-aos': 'zoom-in-up' })} className="text-white space-y-[30px] pt-[100px]">
            <h1 className="z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{staticData.title}</h1>
            <p className=" text-[#D5D5D5] text-[22px] md:text-[26px] leading-[36px] font-light font-Roboto ">{staticData.description}</p>
            <a id="#position" className=" flex items-center justify-center md:justify-start">
                <button type="submit" className="z-40   transition-all md:max-w-max rounded-lg w-full px-[32px] py-[15px] text-[20px] md:text-[22px]  font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">{"View open positions"}</button>
            </a>
        </div>
    );
};

const CoreValus = ({ staticData }) => {
    return (
        <div {...(animation && { 'data-aos': 'zoom-in-up' })} className=" text-white relative ">
            <h1 className="z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{staticData.title}</h1>
            <div className=" pt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[60px]">
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
        <div {...(animation && { 'data-aos': 'zoom-in-up' })} id="lastdiv" className=" text-white pb-20">
            <h1 className="z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{staticData.title}</h1>
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


const BigInnovative = ({ staticData }) => {
    const scrolled = UseGetScroll();


    return (
        <div className="   2xl:min-h-[50vh] flex items-center justify-center">
            <div className="text-white  text-5xl max-w-[700px] 2xl:max-w-[1000px] ">
                <h1 className=" font-Orbitron text-[50px] leading-[75px] laptop:text-[68px] laptop:leading-[85.27px] font-extrabold ">Be Part of <br />
                    Our Innovative Journey</h1>
                <p className="  mt-[10px] mb-[20px] text-[#D5D5D5] font-light text-[26px] leading-[40px] font-Roboto ">{staticData.description}</p>
                <a href="#position"> <Button style="py-[23px]" text="View Open positions" /></a>
                {scrolled < 500 && <div id="scroll" className='ease-in-out duration-500 transition-transform absolute mt-[150px] -left-[50px]  text-[18px] bg z-10 font-Roboto rotate-90 flex  gap-4'>
                    Scroll down <MoveRight />
                </div>}
            </div>
        </div>
    );
};

const BigCoreValus = ({ staticData }) => {
    return (
        <div className="   2xl:min-h-[50vh] flex items-center justify-center">
            <div className=" text-white text-5xl max-w-[700px] 2xl:max-w-[1000px] ">
                <h1 className=" max-w-[800px] font-Orbitron laptop:text-[68px] laptop:leading-[85.27px] font-extrabold">{staticData.title}</h1>
                <div className=" pt-[60px] grid grid-cols-2 gap-[30px] 2xl:gap-[60px]">
                    {
                        staticData.core_values.map((item, idx) => (
                            <div key={idx} className=" border-l-2 border-[#5D5CE8] border-opacity-[20%] px-5 flex font-Roboto gap-[10px] flex-col">
                                <h1 className=" text-[26px]  font-semibold">{item.title}</h1>
                                <h1 className=" text-[#D5D5D5] text-[16px] font-Roboto leading-[20px] font-normal">{item.description}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

const BigBecomingOne = ({ staticData }) => {
    return (
        <div className="  2xl:min-h-[50vh] flex items-center justify-center">
            <div className=" text-white text-5xl max-w-[700px] 2xl:max-w-[1000px]">
                <h1 className="text-[50px] leading-[75px]  max-w-[800px] font-Orbitron laptop:text-[68px] laptop:leading-[85.27px] font-extrabold">{staticData.title}</h1>
                <div className=" pt-[60px] grid grid-cols-2 gap-[30px] 2xl:gap-[60px]">
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
        </div>
    );
};