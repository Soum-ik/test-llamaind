 


import Layout from "../layout/Layout";
import icon1 from '../../../public/images/projects/project1.png';
import project1 from '../../../public/images/Group.png';
import { MoveRight } from "lucide-react";
import projectVideo from '../../../public/video/projects.mp4';

import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IndexProject() {
  const projectWrapper = useRef(null);
  const projectsHolder = useRef(null);

  function getScrollAmount() {
    const projectsWidth = projectsHolder.current?.offsetWidth;
    if (projectsWidth) {
      return -((projectsWidth * 1.009) - window.innerWidth);
    }
    return 0;
  }

  useEffect(() => {
    const sections = projectsHolder.current?.children;

    gsap.set(sections, { opacity: 0 }); // Initially set all sections to be invisible

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectWrapper.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;
          const visibleSection = Math.floor(progress * sections.length);

          gsap.to(sections, {
            opacity: (i) => i === visibleSection ? 1 : 0.1,
            duration: 0.5,
            overwrite: 'auto'
          });
        },
      },
    });

    timeline.to(projectsHolder.current, {
      x: getScrollAmount,
      duration: 2,
      ease: "none",
    });

    // Keep the center section visible
    const centerSection = sections[Math.floor(sections.length / 2)];
    gsap.to(centerSection, { opacity: 1, overwrite: 'auto' });

  }, []);

  const projects = [
    {
      id: '01',
      icon: icon1,
      headings: ["The First Cloud-Based", "Fleet Monetization Platform"],
      status: "(Upcoming Project)",
      des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.",
      video: projectVideo
    },
    {
      id: '01',
      icon: icon1,
      headings: ["The First Cloud-Based", "Fleet Monetization Platform"],
      status: "(Upcoming Project)",
      des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.",
      video: projectVideo
    },
    {
      id: '01',
      icon: icon1,
      headings: ["The First Cloud-Based", "Fleet Monetization Platform"],
      status: "(Upcoming Project)",
      des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.",
      video: projectVideo
    },
  ];

  return (
    <div className="relative xl:pb-[10px]">
      <div ref={projectWrapper} className="hidden mx-auto px-5 xl:block overflow-hidden">
        <h1 className="text-[250px] z-50 mx-auto max-w-[1720px] text-white font-Orbitron font-bold opacity-5">
          Projects
        </h1>
        <div ref={projectsHolder} className="z-10 ml-[260px] flex flex-nowrap -mt-[150px] mx-auto w-fit relative gap-[400px]">

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
        </div>
        <div className=" top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full h-[800px] w-[800px] opacity-40 bg-[#3534C0]" />
        <Layout>                           
          <div className="absolute top-0 bg-red-700 -mt-[340px] text-white font-Roboto flex items-center gap-2">
            Scroll down <MoveRight />
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default IndexProject; 