
import Layout from "../layout/Layout";
import icon1 from '../../../public/images/projects/project1.png'
import project1 from '../../../public/images/Group.png'
import { MoveRight } from "lucide-react";
import projectVideo from '../../../public/video/projects.mp4'
import { useState } from "react";


import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Project {
    icon: string;
    headings: string[];
    status: string;
}



function IndexProject() {


    // const [currentProjectNumber, setCurrentProjectNumber] = useState<string>('01');



    const projects: Project[] = [
        // { icon: icon1, description: ["The First Cloud-Based", " Fleet Monetization Platform"], status: "(Upcomming Project)" },
        { icon: icon1, headings: ["The First Cloud-Based", " Fleet Monetization Platform"], status: "(Upcomming Project)" }
    ]


    return <Layout>
        <div className=" xl:hidden ">
            <div className=" flex items-center justify-between ">
                <h1 className="text-[68px] xs:text-[80px] sm:text-[95px] md:text-[120px] lg:text-[180px] xl:text-[250px] xl:w-[700px] text-white font-Orbitron font-bold opacity-5 z-50">Projects</h1>
                {/* <h1 className=" text-[42px] md:text-[100px] w-[100px] mt-[100px] -mr-5 text-white font-Orbitron font-bold opacity-20 rotate-90">{currentProjectNumber}</h1> */}
            </div>
            <div className=" relative flex mt-20 gap-[40px] flex-col  mx-auto  justify-between">
                {
                    projects.map((project, idx) => (
                        <div key={idx} className=" z-40 w-auto text-white space-y-[16px] md:space-y-3">
                            <img src={project.icon} alt="" />
                            <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                                {project?.headings?.map((line, lineIdx) => (
                                    <h1 key={lineIdx} className=" text-[32px] sm:text-[36px] md:text-[39px] max-w-max leading-[35px] sm:leading-[42px] md:leading-[48px]">{line}</h1>
                                ))}
                            </div>
                            <h1 className=" font-normal text-[14px] text-[#D5D5D5] md:text-xl font-Roboto">{project.status}</h1>
                        </div>
                    ))
                }
                {/* <div className="absolute pb-[100px] z-40 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full w-[450px] h-[450px] md:w-[900px] md:h-[800px] opacity-40 bg-[#3534C0]" /> */}

                <div className="z-40 flex items-center justify-center">
                    <img className="w-[350.852px] z-30 xxs:w-[340px] sm:w-[415px] md:w-[460px] lg:w-[550px] lg:h-[312px]    md:h-[265px] sm:h-[240px] xs:h-[200px] xxs:h-[200px] h-[200.981px]" src={project1} alt="" />
                    <video className=" absolute z-40 transition-transform -translate-x-1/2 left-1/2 rounded-2xl w-[271px] lg:h-[350px] lg:w-[440px] ml-[2px] px-1.5 sm:w-[405px]  md:h-[230px] sm:h-[205px] h-[176px] -mt-[10px] " src={projectVideo} autoPlay loop muted />
                    <div className=" absolute z-0 rounded-full opacity-80 blue__gradient size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  "></div>
                </div>
                <div className=" body-mobile sm:text-[24px]">
                    Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.
                    <button className="project-btn mt-3 w-full md:max-w-max">View Project</button>
                </div>
            </div>
            <div className=' mt-10 text-white font-Roboto hidden  md:flex items-center gap-2'>
                Scroll down <MoveRight />
            </div>
        </div>



        <div className="  hidden xl:block">
            <div className=" flex items-center justify-between ">
                <h1 className="text-[250px] w-[700px] text-white font-Orbitron font-bold opacity-5">Projects</h1>
                {/* <h1 className="text-[100px] w-[10px]  text-white font-Orbitron font-bold opacity-50  rotate-90">{currentProjectNumber}</h1> */}
            </div>
            <div className="-mt-[160px] relative flex  mx-auto items-center justify-between">
                {
                    projects.map((project, idx) => (
                        <div key={idx} className=" z-40 w-[600px] text-white space-y-3">
                            <img src={project.icon} alt="" />
                            <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                                {project?.headings?.map((line, lineIdx) => (
                                    <h1 key={lineIdx}>{line}</h1>
                                ))}
                            </div>
                            <h1 className=" font-normal text-xl font-Roboto">{project.status}</h1>
                        </div>
                    ))
                }
                <div className="absolute pb-[100px] z-40 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full w-[900px] h-[800px] opacity-40 bg-[#3534C0]" />

                <div className="z-40 relative">
                    <img className=" w-[920px] h-[522px]" src={project1} alt="" />
                    <video className=" absolute top-[15px]   transition-transform -translate-x-1/2 left-1/2  ml-1 rounded-xl xl:w-[720px] xl:h-[468px]" src={projectVideo} autoPlay loop muted />
                </div>
            </div>
            <div className=' mt-10 text-white font-Roboto  flex items-center gap-2'>
                Scroll down <MoveRight />
            </div>
        </div>
    </Layout>
}

export default IndexProject;
