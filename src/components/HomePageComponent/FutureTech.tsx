import FutureIcon from '../../../public/images/futureIcon.png';
import Layout from "../layout/Layout";
import features from '../../../public/video/s.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import project1 from '../../../public/images/Group.png';
import { leftSideTechs, rightSideTechs, projects } from '../../components/libs/staticData'
import Button from '../ui/Button';
import { useGSAP } from '@gsap/react';
import { MoveRight } from 'lucide-react';
import FutureTechLooping from './FutureTechLooping';
import UseWindowSize from '../../Hooks/UseGetScreenSize';
import techArsenal from '../../../public/video/Tech arsenal.mp4'



gsap.registerPlugin(ScrollTrigger, useGSAP);

function FutureTech() {
  const { width } = UseWindowSize()
  const tech = useRef<HTMLDivElement | null>(null);
  const project = useRef<HTMLDivElement | null>(null);
  const projectWrapper = useRef<HTMLDivElement | null>(null);
  const projectsHolder = useRef<HTMLDivElement | null>(null);


  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Try to autoplay the video programmatically
      video.play().catch((error) => {
        console.error("Autoplay failed:", error);

        // Retry autoplay if the first attempt fails
        setTimeout(() => {
          video.play();
        }, 1000); // Retry after 1 second
      });

      // Ensure the video loops manually if loop attribute fails
      const handleVideoEnd = () => {
        video.play();
      };

      video.addEventListener('ended', handleVideoEnd);

      // Cleanup event listener on component unmount
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);


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


  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: tech.current,
        start: "40% 40%",
        end: "40% 26%",
        scrub: true,
      },
    });

    if (width >= 1280) {
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
          {
            opacity: 0, scale: .6, autoAlpha: 0,
          },
          {
            onStart: () => projectWrapper?.current?.classList.remove(''),
            scale: 1,
            autoAlpha: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: tech.current,
              start: '40% 30%',
              end: '40% 20%',
              scrub: 0.3,
              invalidateOnRefresh: true, // Ensures proper resizing
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
                      ref={videoRef}
                      playsInline
                      loop
                      autoPlay
                      muted
                      src={techArsenal}
                      className="z-30 h-[600px] w-auto object-cover mix-blend-plus-lighter xxs:h-[700px] sm:h-[750px] md:h-[800px]"
                    />
                    <img
                      src={FutureIcon}
                      className="absolute left-1/2 top-1/2 z-[20] size-[130px] w-auto -translate-x-1/2 -translate-y-1/2 sm:size-[160px]"
                      alt=""
                    />
                    {/* <img src={FutureIcon} className=' w-auto z-[20] top-1/2 -translate-y-1/2 absolute  h-[130px] xxs:h-[180vh] sm:h-[84vh] left-1/2 -translate-x-1/2' alt="" /> */}
                    <div className="blue__gradient absolute left-1/2 top-1/2 z-0 size-[350px] xxs:size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 transition-transform xs:size-[400px] md:size-[600px] lg:-mt-[100px] lg:size-[900px] lg:opacity-40 xl:size-[1000px]"></div>
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
                  ref={videoRef}
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
      <div className="xl:block hidden relative xl:pb-[10px] w-[100vw]">
        <div ref={projectWrapper} className="-mt-[850px] laptop:-mt-[800px] overflow-hidden  opacity-0  mx-auto px-5  3xl:min-h-screen">
          <motion.h1 id='project' className=" text-[140px] 13inch:text-[160px] laptop:text-[250px] z-50 mx-auto max-w-[1720px] text-white font-Orbitron font-bold opacity-5">
            Projects
          </motion.h1>
          <motion.div ref={projectsHolder} className=" z-10 ml-[300px] flex flex-nowrap  mx-auto w-fit relative gap-[400px] -mt-[90px] 13inch:-mt-[110px] 2xl:-mt-[150px] ">
            {projects.map((project, idx) => (
              <div className="flex items-center justify-center snap-center" key={idx}>
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
                <section className=''>
                  <div className="min-w-max relative">
                    <img className="w-[700px] h-[400px] 13inch:w-[920px] 13inch:h-[522px]" src={project1} alt="" />
                    <video
                      className="absolute top-[15px] transition-transform -translate-x-1/2 left-1/2 ml-1 w-[540px] h-[355px]  13inch:w-[750px] 13inch:h-[468px]"
                      // className=" xl:w-[750px] xl:h-[468px]"
                      ref={videoRef}
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </section>
                <section>
                  <div className=" z-40 text-white flex items-center justify-center">
                    <div className="space-y-[20px] mr-[80px]">
                      <img src={project.icon} alt="" />
                      <p className="text-[26px] font-Roboto font-light w-[700px] pb-[20px]">{project.des}</p>
                      {/* <button className=" mt-3 w-full md:max-w-max">View Project</button> */}
                      {/* <a href="/career" className=" mt-[20px]"><button className="z-40 transform rounded-lg px-[32px] py-[16px]   text-[22px]  transition-colors font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">View Project</button></a> */}
                      <a href="/" className=""><Button text="View Project" /></a>

                    </div>
                  </div>
                </section>
              </div>
            ))}
          </motion.div>
          <Layout>
            <div className="  z-[100] pt-[30px] 17inch:pt-[100px]  text-white font-Roboto flex items-center gap-2">
              Scroll down <MoveRight />
            </div>
          </Layout>
          <div className=" top-1/2 left-1/2 transform  mr-[250px] 4xl:mr-[370px] 5k:mr-[600px] 7k:mr-[1000px] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full h-[650px]  -mt-[250px] w-[650px] opacity-40 bg-[#3534C0]" />

        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default FutureTech;
