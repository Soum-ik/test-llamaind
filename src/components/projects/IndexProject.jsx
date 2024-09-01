import Layout from "../layout/Layout";
import icon1 from '../../../public/images/projects/project1.png';
import project1 from '../../../public/images/Group.png';
import { MoveRight } from "lucide-react";
import projectVideo from '../../../public/video/projects.mp4';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function IndexProject() {
  const projectWrapper = useRef(null);
  const projectsHolder = useRef(null);

  function getScrollAmount() {
    const projectsWidth = projectsHolder.current?.offsetWidth;
    if (projectsWidth) {
      return -((projectsWidth * 1.09 ) - window.innerWidth);
    }
    return 0;
  }

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(projectsHolder.current, {
      x: getScrollAmount,
      duration: 2,
      ease: "power4.in",
      scale: 1,
      opacity: 0.9, // Adds a fade effect
      filter: "blur(0px)", // Initial blur as they move
      stagger: 0.1, // Staggered animation for child elements
    });

    // Animations on projectWrapper itself (optional refinements):
    timeline.from(projectWrapper.current, {
      duration: 0.2, // Adjust duration for desired speed
      scale: 0.99, // Adjust scale for subtle effect
      opacity: 1, // Adjust opacity for visual cue
      ease: "power4.out", // Consider using a smoother easing
    });

    timeline.to(projectWrapper.current, {
      x: 0,
      duration: 0.4,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)", // Initial blur as they move

      // ease: "power2.in", // Consider using a smoother easing
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: projectWrapper.current,
      start: "top 4%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: timeline, // Use the timeline as the animation
      onEnter: () => {
        if (projectsHolder.current.style.textAlign === "center") {
          console.log('enter');
        }
      },
      onLeave: () => {
        // Reverse the blur effect on leave
        gsap.to(projectsHolder.current.children, {
          filter: "blur(0px)",
          duration: 2,
        });
      },
      scrub: true,
      invalidateOnRefresh: true,
    });

  }, { scope: [projectWrapper.current, projectsHolder.current] });

  const projects = [
    { id: '01', icon: icon1, headings: ["The First Cloud-Based", " Fleet Monetization Platform"], status: "(Upcomming Project)", des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.", video: projectVideo },
    // { id: '02', icon: icon1, headings: ["The First Cloud-Based", " Fleet Monetization Platform"], status: "(Upcomming Project)", des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.", video: projectVideo },
  ];

  return (

    <div className="relative xl:pb-[304px]">
      <Layout>
        <div className=" xl:hidden ">
          <div className=" flex items-center justify-between overflow-hidden">
            <h1 className="text-[68px] xs:text-[80px] flex-1 sm:text-[95px] md:text-[120px] lg:text-[180px] xl:text-[250px] xl:w-[700px] text-white font-Orbitron font-bold opacity-5 z-50">Projects</h1>
            {/* <h1 className=" pt-[13px] text-[42px] md:text-[100px] w-[100px] mt-[200px] -mr-5 text-white font-Orbitron font-bold opacity-20 rotate-90">{`0${idx + 1}`}</h1> */}
          </div>

          <div className=" relative flex mt-20 gap-[40px] flex-col  mx-auto  justify-between">
            {
              projects.map((project, idx) => (
                <div key={idx} className=" z-40 w-auto text-white  space-y-[16px] md:space-y-3">
                  <div className=" space-y-[16px]">
                    <img src={project.icon} alt="" />
                    <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                      {project?.headings?.map((line, lineIdx) => (
                        <h1 key={lineIdx} className=" text-[32px] sm:text-[36px] md:text-[39px] max-w-max leading-[35px] sm:leading-[42px] md:leading-[48px]">{line}</h1>
                      ))}
                    </div>
                    <h1 className=" font-normal text-[14px] text-[#D5D5D5] md:text-xl font-Roboto">{project.status}</h1>
                    <div className="z-40 flex items-center justify-center py-[40px]">
                      <img className="w-[350.852px] z-30 xxs:w-[340px] sm:w-[415px] md:w-[460px] lg:w-[550px] lg:h-[312px]    md:h-[265px] sm:h-[240px] xs:h-[200px] xxs:h-[200px] h-[200.981px]" src={project1} alt="" />
                      <video className=" absolute z-40 transition-transform -translate-x-1/2 left-1/2 rounded-2xl w-[271px] lg:h-[350px] lg:w-[440px] ml-[2px] px-1.5 sm:w-[405px]  md:h-[230px] sm:h-[205px] h-[176px] -mt-[10px] " src={project.video} autoPlay loop muted />
                      <div className=" absolute z-0 rounded-full opacity-80 blue__gradient size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  "></div>
                    </div>
                    <div className=" body-mobile space-y-[30px] sm:text-[24px]">
                      {project.des}
                      <button className="project-btn mt-3 w-full md:max-w-max">View Project</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className=' mt-10 text-white font-Roboto hidden  md:flex items-center gap-2'>
            Scroll down <MoveRight />
          </div>
        </div>
      </Layout>


      <div ref={projectWrapper} className="hidden    mx-auto px-5  xl:block overflow-hidden">
        <h1 className="text-[250px] z-50 mx-auto max-w-[1720px]  text-white font-Orbitron font-bold opacity-5">
          Projects
        </h1>
        <div ref={projectsHolder} className=" z-10 flex flex-nowrap   mx-auto w-fit relative gap-[400px]">

          {projects.map((project, idx) => (
            <div className=" flex items-center justify-self-center " key={idx}>
              <section>
                <div className="flex items-center justify-between w-[1800px]">
                </div>
                <div className="-mt-[160px] z-40 text-white flex items-center justify-end gap-[50px]">
                  <div className="space-y-[20px]">
                    <img src={project.icon} alt="" />
                    <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                      {project?.headings?.map((line, lineIdx) => (
                        <h1 key={lineIdx}>{line}</h1>
                      ))}
                    </div>
                    <h1 className="font-normal text-[#D5D5D5] text-xl font-Roboto">{project.status}</h1>
                  </div>
                  <div className="z-40 max-w-max relative">
                    <img className="w-[920px] h-[522px]" src={project1} alt="" />
                    <video
                      className="absolute top-[15px] transition-transform -translate-x-1/2 left-1/2 ml-1 rounded-2xl xl:w-[710px] xl:h-[468px]"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="-mt-[160px] z-40 text-white ml-[100px] flex items-center justify-center">
                  <div className="space-y-[20px] mr-[80px]">
                    <img src={project.icon} alt="" />
                    <p className=" text-[26px] font-Roboto font-light  w-[700px]">{project.des}</p>
                    <button className="project-btn mt-3 w-full md:max-w-max">View Project</button>
                  </div>
                </div>
              </section>

            </div>
          ))}
        </div>
        <div className=" -mt-[230px] sticky top-1/2  left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full h-[800px] w-[800px] opacity-40 bg-[#3534C0]" />
        <Layout>
          <div className=" absolute top-0 bg-red-700 -mt-[340px] text-white font-Roboto flex items-center gap-2">
            Scroll down <MoveRight />
          </div>
        </Layout>

      </div>

    </div>);

}

export default IndexProject;