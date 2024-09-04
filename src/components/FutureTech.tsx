import FutureIcon from '../../public/images/futureIcon.png';
import FutureTechLooping from "./FutureTechLooping";
import Layout from "./layout/Layout";
import features from '../../public/video/s.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import project1 from '../../public/images/Group.png';
import { leftSideTechs, rightSideTechs, projects } from '../components/libs/staticData'



gsap.registerPlugin(ScrollTrigger);

function FutureTech() {
    const tech = useRef<HTMLDivElement | null>(null);
    const project = useRef<HTMLDivElement | null>(null);
    const projectWrapper = useRef<HTMLDivElement | null>(null);
    const projectsHolder = useRef<HTMLDivElement | null>(null);



    function getScrollAmount() {
        const projectsWidth = projectsHolder.current?.offsetWidth;
        if (projectsWidth) {
            return -((projectsWidth * 1.07) - window.innerWidth);
        }
        return 0;
    }

    console.log(getScrollAmount());


    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: tech.current,
                start: '40% 40%',
                end: '40% 26%',
                scrub: true,
            },
        });

        if (tech.current) {
            timeline
                .to(tech.current, {
                    opacity: 0,
                    scale: 0.1,
                    duration: .2,
                    ease: 'power1.inOut',
                    force3D: true,
                });
        }

        if (projectWrapper.current) {
            gsap.fromTo(projectWrapper.current,
                { x: '100%', opacity: 0, scale: .6 },
                {
                    x: '0%',
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: tech.current,
                        start: '40% 30%',
                        end: '40% 20%',
                        scrub: true,
                    },
                }
            )
        }
        const sections = projectsHolder.current?.children;

        if (sections && projectWrapper.current) {
            gsap.set(sections, { opacity: 1 }); // Initially set all sections to be semi-visible

            // Create the horizontal scrolling timeline with pinning
            const horizontalTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: projectWrapper.current,
                    start: "-40% top", // Pin earlier, when the section is 70% down the viewport
                    end: () => `+=${getScrollAmount() * -1} `,
                    pin: true,
                    scrub: true,
                    // markers: true,
                },
            });

            horizontalTimeline.to(projectsHolder.current, {
                x: getScrollAmount,
                duration: 3,
                ease: "0.45, 0, 0.55, 1",
            })



            // Keep the center section visible
            const centerSection = sections[Math.floor(sections.length / 2)];
            gsap.to(centerSection, { opacity: 1, overwrite: 'auto' });
        }

    }, [tech, project, projectWrapper, projectsHolder]);

    return (
        <>

            {/* for small device start */}
            <div className='xl:hidden relative mt-[150px]'>
                <div className=' '>
                    <Layout>
                        <div className=" xl:hidden">
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
            {/* FutureTech section */}
            <Layout>
                <div ref={tech} className="hidden xl:block relative !mb-[170px]">
                    <div className="pb-[120px] max-w-[850px] mx-auto text-white flex justify-center gap-0 flex-col">
                        <h1 className="z-30 font-extrabold text-[68px] text-left">Our Future Driven</h1>
                        <h1 className="z-30 font-extrabold text-[68px] text-right -mt-[16px]">
                            <span className="text-[#6CB1FF]">Tech</span> Arsenal
                        </h1>
                    </div>

                    {/* Tech Looping Section */}
                    <div className="relative pt-10">
                        <div className="px-24 flex items-center justify-between">
                            <FutureTechLooping array={leftSideTechs} />
                            <div className="!w-[1792px] iamge1-fixer flex items-center justify-center !mx-auto">
                                <video src={features} loop autoPlay muted className="iamge1-fixer mix-blend-plus-lighter z-30 absolute absolute-center" />
                                <img src={FutureIcon} className="z-40 absolute absolute-center" alt="" />
                            </div>
                            <div className="blur-shadow z-40 absolute left-1/2 transform -translate-x-1/2" />
                            <FutureTechLooping array={rightSideTechs} />
                        </div>
                    </div>
                </div>
            </Layout>

            {/* IndexProject section */}
            {/* <div ref={project} className="  overflow-hidden"> */}
            <div className="relative xl:pb-[10px]">
                <div ref={projectWrapper} className="hidden -mt-[800px] opacity-0  mx-auto px-5 xl:block">
                    <motion.h1 className="text-[250px] z-50 mx-auto max-w-[1720px] text-white font-Orbitron font-bold opacity-5">
                        Projects
                    </motion.h1>
                    <motion.div ref={projectsHolder} className=" z-10 ml-[300px] flex flex-nowrap  mx-auto w-fit relative gap-[400px] -mt-[150px]">
                        {projects.map((project, idx) => (
                            <div className="flex items-center justify-center" key={idx}>
                                <section>
                                    <div className=" z-40 text-white flex items-center justify-end gap-[50px]">
                                        <div className="space-y-[20px] min-w-[700px]">
                                            <img src={project.icon} alt="" />
                                            <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                                                {project.headings.map((line, lineIdx) => (
                                                    <h1 key={lineIdx}>{line}</h1>
                                                ))}
                                            </div>
                                            <h1 className="font-normal text-[#D5D5D5] text-xl font-Roboto">{project.status}</h1>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="z-40 min-w-max relative">
                                        <img className="w-[920px] h-[522px]" src={project1} alt="" />
                                        <video
                                            className="absolute top-[15px] transition-transform -translate-x-1/2 left-1/2 ml-1 rounded-2xl xl:w-[710px] xl:h-[468px]"
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                        />
                                    </div>
                                </section>
                                <section>
                                    <div className=" z-40 text-white flex items-center justify-center">
                                        <div className="space-y-[20px] mr-[80px]">
                                            <img src={project.icon} alt="" />
                                            <p className="text-[26px] font-Roboto font-light w-[700px]">{project.des}</p>
                                            <button className="project-btn mt-3 w-full md:max-w-max">View Project</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </motion.div>
                    <div className=" top-1/2 left-1/2 transform  mr-[200px] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full h-[650px]  -mt-[250px] w-[650px] opacity-40 bg-[#3534C0]" />
                    <Layout children={undefined}>
                        {/* <div className="absolute top-0 z-[100] bg-red-700 -mt-[340px] text-white font-Roboto flex items-center gap-2">
            Scroll down <MoveRight />
          </div> */}
                    </Layout>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default FutureTech;
