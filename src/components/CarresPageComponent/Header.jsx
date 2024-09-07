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

function Header() {
    const videoRef = useRef();
    const contentRef = useRef();
    const { width } = UseWindowSize();
    let projectsWidth = contentRef.current?.offsetHeigth;

    const [scrollTriggerConfig, setScrollTriggerConfig] = useState({
        start: 0,
        end: 0
    });

    console.log(scrollTriggerConfig, 'get total amount');

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
            if (width > 2700) {
                return "+=145%";
            } else if (width > 2500) {
                return "+=163%";
            } else if (width > 2400) {
                return "+=164%";
            } else if (width > 2100) {
                return "+=195%";
            } else if (width > 1900) {
                return "+=220%";
            } else if (width > 1600) {
                return "+=235%";
            } else if (width > 1400) {
                return "+=250%";
            } else {
                return "+=260%";
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
        console.log(startValue, 'start');


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


    }, { scope: [contentRef, videoRef] });

    return (
        <div className=" relative xs:pt-[200px] md:pt-[160px] xxs:pt-[100px] pt-[70px]">
            <Layout>
                {/* small screen left side start */}
                <div className="xl:hidden pt-[90px] xl:pt-0 pb-[160px] flex items-start justify-between">
                    <div className="z-40 max-w-[355px] xxs:max-w-max pt-[75px] space-y-[230px] md:space-y-[200px]  xl:space-y-[450px]">
                        <Innovative staticData={staticData[0]} />
                        <CoreValus staticData={staticData[1]} />
                        <BecomingOne staticData={staticData[2]} />
                    </div>
                </div>
                {/* small screen left side end */}

                {/* big screen start */}
                <div className=" hidden pt-[100px] 3xl:mt-[120px]  min-h-[100vh] xl:flex items-center justify-between">
                    <div ref={contentRef} className="z-40 max-w-[1000px]  space-y-[500px]  ">
                        <BigInnovative staticData={staticData[0]} />
                        <BigCoreValus staticData={staticData[1]} />
                        <BigBecomingOne staticData={staticData[2]} />
                    </div>
                    <div ref={videoRef} className="absolute top-0 2xl:top-[10px] 3xl:top-[150px] right-[0px] 2xl:right-[5px] 3xl:right-[140px] 4k:right-[300px] z-10">
                        <video className="mix-blend-plus-lighter w-[800px] 2xl:w-[1000px] " src={animation} loop muted autoPlay />
                        <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 hidden md:block  opacity-40 -translate-x-1/2 -z-20  about-blur-shadow size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  2xl:size-[1000px]"></div>
                    </div>
                </div>
                {/* big screen end */}

            </Layout>
            <div className="absolute xs:top-[40px] top-[0px] left-0 flex sm:h-[78vh] xs:h-[64vh] h-[58vh]  w-full items-center justify-center overflow-hidden xl:hidden">
                <video
                    src={animation}
                    className="h-full w-auto object-cover"
                    loop
                    autoPlay
                    muted
                />
                {/* <div className="top-[100px] absolute z-10 mobile-blur-shadow-gradient xs:size-[500px] size-[310px] rounded-full xl:hidden mix-blend-plus-lighter" /> */}
                <div className=" absolute z-[100] mobile-blur-shadow-gradient sm:size-[500px] size-[400px] rounded-full xl:hidden mix-blend-plus-lighter" />
            </div>
        </div>
    );
}

export default Header;


const Innovative = ({ staticData, animation }) => {
    return (
        <div   {...(animation && { 'data-aos': 'zoom-in-up' })} className="text-white space-y-[30px] pt-[100px]">
            {/* <h1 className=" max-w-[800px] md:max-w-[1200px] font-Orbitron text-[34px] md:text-[68px] leading-[40px] md:leading-[85.27px] font-extrabold">{staticData.title}</h1> */}
            <h1 className="z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px]">{staticData.title}</h1>
            <p className=" text-[#D5D5D5] text-[22px] md:text-[26px] leading-[36px] font-light font-Roboto">{staticData.description}</p>
            <button className=" btn-gradient w-full md:max-w-max font-Roboto ">View Open positions</button>
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
        <div className="text-white max-w-[800px]">
            <h1 className="   font-Orbitron text-[68px] leading-[85.27px] font-extrabold">{staticData.title}</h1>
            <p className=" text-[#D5D5D5] text-[26px] mb-[40px] mt-[10px] font-light font-Roboto">{staticData.description}</p>
            <Button text="View Open positions" />
            {scrolled < 500 && <div id="scroll" className='ease-in-out duration-500 transition-transform absolute mt-[150px] text-[18px] -left-[50px]  bg z-10 font-Roboto rotate-90 flex  gap-5'>
                Scroll down <MoveRight />
            </div>}
        </div>
    );
};

const BigCoreValus = ({ staticData }) => {
    return (
        <div className=" text-white ">
            <h1 className=" max-w-[800px] font-Orbitron text-[68px] leading-[85.27px] font-extrabold">{staticData.title}</h1>
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
    );
};

const BigBecomingOne = ({ staticData }) => {
    return (
        <div className=" text-white">
            <h1 className=" max-w-[800px] font-Orbitron text-[68px] leading-[85.27px] font-extrabold">{staticData.title}</h1>
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
    );
};