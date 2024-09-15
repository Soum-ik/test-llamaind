import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";
import FutureIcon from "../../../public/images/futureIcon.png";
import project1 from "../../../public/images/Group.png";
import features from "../../../public/video/s.mp4";
import featuresWebm from "../../../public/video/s.webm";
import {
  leftSideTechs,
  projects,
  rightSideTechs,
} from "../../components/libs/staticData";
import Layout from "../layout/Layout";
import Button from "../ui/Button";
import FutureTechLooping from "./FutureTechLooping";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function FutureTech() {
  const tech = useRef<HTMLDivElement | null>(null);
  const project = useRef<HTMLDivElement | null>(null);
  const projectWrapper = useRef<HTMLDivElement | null>(null);
  const projectsHolder = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Debounce function to avoid multiple reloads
    let resizeTimeout: string | number | NodeJS.Timeout | undefined;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 1280) {
          window.location.reload();
        }
      }, 500); // 500ms debounce
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getScrollAmount() {
    const projectsWidth = projectsHolder.current?.offsetWidth;
    if (projectsWidth) {
      return -(projectsWidth * 1.17 - window.innerWidth);
    }
    return 0;
  }

  console.log(getScrollAmount());

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: tech.current,
        start: "40% 40%",
        end: "40% 26%",
        scrub: true,
      },
    });

    if (tech.current) {
      timeline.to(tech.current, {
        opacity: 0,
        scale: 0.1,
        duration: 0.2,
        ease: "power1.inOut",
        force3D: true,
      });
    }

    if (projectWrapper.current) {
      gsap.fromTo(
        projectWrapper.current,
        { opacity: 0, scale: 0.6, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: tech.current,
            start: "40% 30%",
            end: "40% 20%",
            scrub: 0.3,
            invalidateOnRefresh: true, // Ensures proper resizing
          },
        },
      );
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
      });

      // Keep the center section visible
      const centerSection = sections[Math.floor(sections.length / 2)];
      gsap.to(centerSection, { opacity: 1, overwrite: "auto" });
    }
  }, [tech, project, projectWrapper, projectsHolder]);

  return (
    <>
      {/* for small device start */}
      <div className="relative mt-[150px] xl:mb-[120px] xl:hidden">
        <div className="">
          <>
            <div className="xl:hidden">
              <div className="mx-auto flex w-[354px] flex-col items-center justify-center text-white xxs:w-[370px] sm:w-[500px] md:w-[750px] xl:w-[800px]">
                <h1 className="z-40 text-center font-Orbitron text-[34px] font-extrabold leading-[40px] md:text-[43px] md:leading-[50px] lg:text-[57px] lg:leading-[60px] xl:text-[78px] xl:leading-[85.27px]">
                  Our Future Driven
                </h1>
                <h1 className="z-40 text-center font-Orbitron text-[34px] font-extrabold leading-[40px] md:text-[43px] md:leading-[50px] lg:text-[57px] lg:leading-[60px] xl:text-[78px] xl:leading-[85.27px]">
                  <span className="text-[#6CB1FF]">Tech</span> Arsenal
                </h1>
              </div>

              {/* options are will be avaiable */}
              <div className="pt-10 xl:pt-20">
                <div className="relative flex flex-col items-center justify-between gap-[265px] px-24 sm:gap-[400px]">
                  <FutureTechLooping
                    style=" space-y-[5px] sm:space-y-[6px] md:space-y-[8px] lg:space-y-[11px]"
                    array={leftSideTechs}
                  />
                  <div className="absolute top-1/2 z-[10] -translate-y-1/2 transition-transform">
                    {/* <div className=" py-[100px] absolute 13inch:hidden w-full items-center h-[94vh]   top-[158px] sm:top-[170px] md:top-[292px] lg:top-[294px] xl:top-[340px] justify-center xl:-right-[130px] overflow-hidden "> */}
                    <video
                      playsInline
                      loop
                      autoPlay
                      muted
                      className="z-30 h-[600px] w-auto object-cover mix-blend-plus-lighter xxs:h-[700px] sm:h-[750px] md:h-[800px]"
                    >
                      <source src={features} type="video/mp4" />
                      <source src={featuresWebm} type="video/webm" />
                    </video>
                    <img
                      src={FutureIcon}
                      className="absolute left-1/2 top-1/2 z-[20] size-[130px] w-auto -translate-x-1/2 -translate-y-1/2 sm:size-[160px]"
                      alt=""
                    />
                    {/* <img src={FutureIcon} className=' w-auto z-[20] top-1/2 -translate-y-1/2 absolute  h-[130px] xxs:h-[180vh] sm:h-[84vh] left-1/2 -translate-x-1/2' alt="" /> */}
                    <div className="blue__gradient absolute left-1/2 top-1/2 z-0 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 transition-transform xs:size-[400px] md:size-[600px] lg:-mt-[100px] lg:size-[900px] lg:opacity-40 xl:size-[1000px]"></div>
                  </div>
                  <FutureTechLooping
                    style=" z-[20] space-y-[5px] sm:space-y-[6px] md:space-y-[8px] lg:space-y-[11px]"
                    array={rightSideTechs}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      {/* for small device emd */}

      {/* FutureTech section bigger screen start*/}
      <Layout>
        <div
          ref={tech}
          className="relative !mb-[170px] hidden min-h-[70vh] xl:block 3xl:min-h-screen"
        >
          <div className="mx-auto flex max-w-[600px] flex-col justify-center gap-0 pb-[80px] text-white 13inch:max-w-[850px] 13inch:pb-[120px]">
            <h1 className="z-30 text-left text-[49px] font-extrabold 13inch:text-[58px] laptop:text-[68px]">
              Our Future Driven
            </h1>
            <h1 className="z-30 -mt-[16px] text-right text-[49px] font-extrabold 13inch:text-[58px] laptop:text-[68px]">
              <span className="text-[#6CB1FF]">Tech</span> Arsenal
            </h1>
          </div>

          {/* Tech Looping Section */}
          <div className="relative pt-10">
            <div className="flex items-center justify-between px-24">
              <FutureTechLooping boxStyle=" py-[10px]" array={leftSideTechs} />
              <div className="iamge1-fixer !mx-auto flex !w-[1100px] items-center justify-center 13inch:!w-[1792px]">
                <video
                  playsInline
                  src={features}
                  loop
                  autoPlay
                  muted
                  className="absolute-center absolute z-30 mix-blend-plus-lighter"
                />
                <img
                  src={FutureIcon}
                  className="absolute-center absolute z-40 w-[150px] 13inch:w-auto"
                  alt=""
                />
              </div>
              <div className="blur-shadow absolute left-1/2 z-40 -translate-x-1/2 transform" />
              <FutureTechLooping array={rightSideTechs} />
            </div>
          </div>
        </div>
      </Layout>
      {/* FutureTech section bigger screen end*/}

      {/* IndexProject section  start*/}
      <div id="project" className="relative xl:pb-[10px]">
        <div
          ref={projectWrapper}
          className="mx-auto -mt-[850px] hidden px-5 opacity-0 xl:block laptop:-mt-[800px] 3xl:min-h-screen"
        >
          <motion.h1 className="z-50 mx-auto max-w-[1720px] font-Orbitron text-[140px] font-bold text-white opacity-5 13inch:text-[160px] laptop:text-[250px]">
            Projects
          </motion.h1>
          <motion.div
            ref={projectsHolder}
            className="relative z-10 mx-auto -mt-[90px] ml-[300px] flex w-fit flex-nowrap gap-[400px] 13inch:-mt-[150px]"
          >
            {projects.map((project, idx) => (
              <div
                className="flex snap-center items-center justify-center"
                key={idx}
              >
                <section>
                  <div className="z-40 flex items-center justify-end gap-[50px] text-white">
                    <div className="min-w-[700px] space-y-[20px]">
                      <img src={project.icon} alt="" />
                      <div className="font-Roboto text-[44px] font-bold leading-[54px]">
                        {project.headings.map((line, lineIdx) => (
                          <h1 key={lineIdx}>{line}</h1>
                        ))}
                      </div>
                      <h1 className="font-Roboto text-xl font-normal text-[#D5D5D5]">
                        {project.status}
                      </h1>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="relative min-w-max">
                    <img
                      className="h-[440px] w-[766px] 13inch:h-[522px] 13inch:w-[920px]"
                      src={project1}
                      alt=""
                    />
                    <video
                      className="absolute left-1/2 top-[15px] ml-1 h-[390px] w-[590px] -translate-x-1/2 transition-transform 13inch:h-[468px] 13inch:w-[750px]"
                      // className=" xl:w-[750px] xl:h-[468px]"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                </section>
                <section>
                  <div className="z-40 flex items-center justify-center text-white">
                    <div className="mr-[80px] space-y-[20px]">
                      <img src={project.icon} alt="" />
                      <p className="w-[700px] pb-[20px] font-Roboto text-[26px] font-light">
                        {project.des}
                      </p>
                      {/* <button className=" mt-3 w-full md:max-w-max">View Project</button> */}
                      {/* <a href="/career" className=" mt-[20px]"><button className="z-40 transform rounded-lg px-[32px] py-[16px]   text-[22px]  transition-colors font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">View Project</button></a> */}
                      <a href="/" className="">
                        <Button text="View Project" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </motion.div>
          <Layout>
            <div className="z-[100] flex items-center gap-2 pt-[30px] font-Roboto text-white 17inch:pt-[100px]">
              Scroll down <MoveRight />
            </div>
          </Layout>
          <div className="left-1/2 top-1/2 mx-auto -mt-[250px] mr-[250px] flex h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#3534C0] opacity-40 blur-[200px] 4xl:mr-[370px] 5k:mr-[600px] 7k:mr-[1000px]" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default FutureTech;
