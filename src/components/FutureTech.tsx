
import FutureIcon from '../../public/images/futureIcon.png'
import FutureTechLooping from "./FutureTechLooping";
import FutureTechLoopingBig from "./FutureTechLooping";
import Layout from "./layout/Layout";
import features from '../../public/video/s.mp4'


import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import IndexProject from './projects/IndexProject';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function FutureTech() {
    const tech = useRef<HTMLDivElement | null>(null);
    const project = useRef<HTMLDivElement | null>(null);
    // const projectContainer = useRef<HTMLDivElement | null>(null); // New ref to hold project container


    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: tech.current,
                start: '40% 40%',
                end: '40% 26%',
                scrub: true,
                pin: true,
            },
        });


        if (tech.current && project.current) {
            // Animate tech section fade-out and project section slide-in
            timeline
                .to(tech.current, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 7,
                    ease: 'power3.out',
                    force3D: true,
                })

        }

    }, [tech, project]);

    const leftSideTechs =
        ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'];

    const rightSideTechs = ['Blockhain', 'Internet of Things', 'Cloud Solutions', 'Augmented & Virtual Reality']


    return (
        <>
            {/* for small device start */}
            <div className='xl:hidden relative mt-[150px] xl:mt-[400px]'>
                <div className=' '>
                    <Layout>
                        <div className=" xl:hidden mb-[100px]">
                            <div className="  w-[354px] xxs:w-[370px] sm:w-[500px] md:w-[750px] mx-auto  text-white flex items-center justify-center flex-col">
                                <h1 className="z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px] text-center">Our Future Driven</h1>
                                <h1 className="z-40 font-Orbitron text-[34px] md:text-[43px] lg:text-[50px] xl:text-[68px] font-extrabold leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[85.27px] text-center"><span className="text-[#6CB1FF]">Tech</span> Arsenal</h1>
                            </div>

                            {/* options are will be avaiable */}
                            <div className="pt-10">
                                <div className=" px-24 gap-[265px] flex flex-col items-center justify-between">
                                    <FutureTechLooping style=' space-y-[5px] sm:space-y-[6px]' array={leftSideTechs} />
                                    <div className=" absolute z-0 bottom-[260px] rounded-full opacity-80 blue__gradient size-[380px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  "></div>
                                    <FutureTechLooping style=' space-y-[5px] sm:space-y-[6px]' array={rightSideTechs} />
                                </div>
                            </div>
                        </div>
                    </Layout>
                </div>
                <div className=" py-[100px] absolute xl:hidden w-full items-center h-[94vh]  top-[158px] sm:top-[170px] md:top-[292px] lg:top-[294px] justify-center overflow-hidden ">
                    <video src={features} loop autoPlay muted className="h-full  w-auto object-cover mix-blend-plus-lighter z-30" />
                    <img src={FutureIcon} className=' w-[140px]  z-40 absolute  absolute-center' alt="" />
                </div>
            </div>
            {/* for small device emd */}

            {/* current content start */}
            <Layout>
                <div data-scroll data-scroll-speed="0.06" ref={tech} className=" hidden xl:block relative !mb-[110px]">
                    <div className="  pb-[120px] max-w-[850px] mx-auto text-white flex justify-center gap-0 flex-col">
                        <h1 className="z-30 font-extrabold text-[68px] text-left">Our Future Driven</h1>
                        <h1 className="z-30  font-extrabold text-[68px] text-right -mt-[16px]"><span className="text-[#6CB1FF]">Tech</span> Arsenal</h1>
                    </div>

                    {/* options are will be avaiable */}
                    <div className="relative pt-10">
                        <div className="px-24 flex items-center justify-between">
                            <FutureTechLoopingBig array={leftSideTechs} />
                            {/* <div className=" !overflow-hidden   flex items-center justify-center !mx-auto"> */}
                            <div className="!w-[1792px] iamge1-fixer flex items-center justify-center !mx-auto">
                                <video src={features} loop autoPlay muted className="iamge1-fixer mix-blend-plus-lighter z-30 absolute absolute-center " />
                                <img src={FutureIcon} className='  z-40 absolute  absolute-center' alt="" />
                            </div>
                            <div className="blur-shadow z-40 absolute left-1/2 transform -translate-x-1/2" />
                            <FutureTechLoopingBig array={rightSideTechs} />
                        </div>
                    </div>
                </div>
            </Layout >
            {/* current content end */}

            <div ref={project} id="project" className="hidden xl:block"> {/* Hide project until animation */}
                <div> 
                    <IndexProject />
                </div>
            </div>

        </>
    );
}

export default FutureTech;
