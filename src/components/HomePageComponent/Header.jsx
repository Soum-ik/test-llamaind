import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { useRef } from "react";
import headerImage from "../../../public/images/header.png";
import arrow from "../../../public/images/Vector.png";
import waveVideo from "../../../public/video/main-animation.mp4";
import waveVideoWebm from "../../../public/video/main-animation.webm";
import UseWindowSize from "../../Hooks/UseGetScreenSize";
import Layout from "../layout/Layout";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Header() {
  const header = useRef(null);

  const { width } = UseWindowSize();
  useGSAP(() => {
    let leftValue = "";

    const calculateLeftValue = (width) => {
      if (width < 1500) {
        return -400;
      } else {
        return -540;
      }
    };
    leftValue = calculateLeftValue(width);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#holder",
        start: "bottom+20% bottom+=20%",
        // end: "90% 60%",
        end: "200% 82%",
        // end: "60% 50%",
        scrub: true,
      },
    });

    tl.to("#slider1-text", {
      opacity: 0,
      y: -40,
      duration: 5,
    });
    tl.to("#instructor", {
      opacity: 0,
      duration: 5,
      // x: 100,
      // display: 'hidden'
    });
    tl.to("#projectMoveing", {
      opacity: 0,
      // x: 100,
      rotateZ: 900,
    });
    tl.to("#slider1-video", {
      top: 70,
      left: leftValue,
      ease: "0.7, 0, 0.84, 0",
      duration: 20,
    });

    // Second timeline for slider2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#holder",
        start: "bottom+20% bottom+=20%",
        end: "200% 82%",
        scrub: true,
        // markers: true,
      },
    });

    tl2.to("#slider2-text", {
      delay: 18,
      duration: 20,
      x: -1500,
      display: "block",
      ease: "0.45, 0, 0.55, 1",
    });

    // Cleanup function to kill ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [width]);
  return (
    <>
      {/* bigger screen start */}
      <div
        ref={header}
        className="hidden min-h-[110vh] pb-[300px] xl:block 13inch:pb-[250px] laptop:pb-[340px] 3xl:pt-[60px] 4xl:pt-[80px] 4k:pt-[150px]"
      >
        <Layout>
          <div
            id="slider1"
            className="pt-[110px] 3xl:pt-[50px] 4xl:pt-[60px] 5k:pt-[140px]"
          >
            <h1
              id="slider1-text"
              className="slider1-text header z-20 text-center font-Orbitron text-[75px] font-bold leading-[100px] text-white laptop:text-[100px] laptop:leading-[120px]"
            >
              Pioneering the Future with
              <br /> Digital Excellence
            </h1>

            <div>
              <motion.div
                transition={{ ease: "linear", duration: 5, delay: 1 }}
                id="slider1-video"
                className="slider1-video relative -mt-[70px] flex items-center justify-center laptop:mt-0 5k:mt-[20px]"
              >
                <div className="!mx-auto flex size-[770px] items-center justify-center">
                  <video
                    className="z-10 !mx-auto -mt-[270px] max-w-[1280px] mix-blend-plus-lighter 13inch:max-w-[1400px] laptop:-mt-[300px] laptop:max-w-[1600px] 17inch:-mt-[250px] 17inch:max-w-[19200px] 6k:-mt-[108px]"
                    playsInline
                    src={waveVideo}
                    loop
                    autoPlay
                    muted
                  />
                </div>
                <div className="mt- absolute z-10 h-[800px] w-[900px] rounded-full bg-[#5D5CE8] opacity-20 blur-[200px]" />
                <img
                  className="absolute inset-0 z-20 mx-auto size-[530px] laptop:-top-[90px] laptop:size-[640px] 17inch:size-[770px]"
                  src={headerImage}
                  alt=""
                />
              </motion.div>
            </div>
          </div>

          {/* <div id="scroll" className='ease-in-out duration-500 transition-transform absolute mt-[150px] -left-[50px]  text-[18px] bg z-10 font-Roboto rotate-90 flex  gap-4'>
                        Scroll down <MoveRight />
                    </div> */}

          <a
            href="#project"
            id="instructor"
            className="instructor-fixer flex justify-between px-3 text-white"
          >
            {/* <div className='-ml-[130px] z-10 font-Roboto rotate-90 flex gap-5 justify-end text-[18px] bg '>
                            Scroll down <MoveRight />
                        </div> */}
            <div
              id="scroll"
              className="bg z-10 flex rotate-90 items-end justify-start gap-4 font-Roboto text-[18px] transition-transform duration-500 ease-in-out"
            >
              Scroll down <MoveRight />
            </div>
            <div
              id="projectMoveing"
              className="projectMovieCircel-gradient hover:projectMovieCircel-gradient-hover group relative z-10 flex size-[160px] items-center justify-center rounded-[154.55px] shadow-md shadow-[#5c5ca0] backdrop-blur-xl laptop:size-[170px]"
            >
              <img
                className="animate-spin-slow transition-transform duration-500 hover:rotate-180 hover:animate-none"
                src={arrow}
                alt=""
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-45">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </a>

          <div
            id="slider2"
            className="relative z-40 mb-20 !flex !justify-end text-right lg:w-[1100px] 13inch:w-auto"
          >
            <div
              id="slider2-text"
              className="slider2-text absolute -right-[1630px] -top-[220px] z-40 hidden max-w-[800px] text-ellipsis text-left font-Roboto text-[33px] font-light leading-[50px] text-white xl:text-[30px] xl:leading-[46px] 13inch:-right-[1520px] 13inch:max-w-[900px] laptop:-top-[250px] laptop:max-w-[1050px] laptop:text-[35px] laptop:leading-[64px] 17inch:-right-[1500px] 17inch:text-[40px]"
            >
              At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech
              to Shape the Digital Future. We Empower Businesses with
              Intelligent, Scalable Solutions for Growth and Smarter
              Decision-Making, Building a More Connected World.
            </div>
          </div>
          <div
            id="holder"
            className="mt-[130px] hidden min-h-[10vh] 13inch:block"
          ></div>
        </Layout>
      </div>
      {/* bigger screen end */}

      {/* smalll screen start */}
      <div className="relative min-h-[80vh] pt-[10px] xl:hidden">
        <>
          <div className="mx-auto flex items-center justify-center pt-[200px] sm:pt-[250px] lg:pt-[200px]">
            <h1 className="header absolute z-20 px-[10px] text-center font-Orbitron text-[42px] font-extrabold leading-[46px] text-white xs:text-[48px] xs:leading-[55px] sm:text-[65px] sm:leading-[65px] md:text-[70px] md:leading-[80px] lg:px-[15px] lg:text-[75px] lg:leading-[90px] xl:text-[85px] 2xl:leading-[100px]">
              Pioneering the Future with
              <br /> Digital Excellence
            </h1>
          </div>

          <div className="absolute left-0 top-[129px] flex h-[700px] w-full items-center justify-center overflow-hidden xxs:top-[129px] xs:top-[140px] xs:h-[740px] sm:top-[160px] sm:h-[850px] md:top-[71px] md:h-[940px] lg:-top-[10px] lg:h-[1030px] xl:-top-[32px] xl:h-[1050px] 13inch:hidden">
            <video
              //   src={waveVideo}
              className="z-10 h-full w-auto object-cover pt-[10px] sm:mt-[40px] md:pt-[100px]"
              loop
              autoPlay
              muted
              playsInline
              preload="auto"
            >
              {/* <source src={waveVideo} type="video/mp4" /> */}
              <source src={waveVideoWebm} type="video/webm" />
            </video>
            <div className="mobile-blur-shadow-gradient absolute top-[100px] z-10 size-[390px] rounded-full xs:top-[70px] xs:size-[500px] lg:top-[200px] lg:size-[600px] 13inch:hidden" />
            <img
              className="absolute bottom-28 z-20 h-[450px] min-w-[500px] xs:h-[500px] xs:w-[200px] sm:h-[560px] sm:w-[600px] md:bottom-[75px] md:h-[600px] md:max-w-[900px] lg:bottom-[140px] lg:max-w-[1400px] xl:bottom-[120px] xl:h-[620px]"
              src={headerImage}
              alt=""
            />
          </div>

          <div className="z-50 mt-[700px] text-white xs:mt-[800px] sm:mt-[1000px] md:mt-[1100px]">
            <div className="z-10 hidden rotate-90 gap-5 font-Roboto xl:flex">
              Scroll down <MoveRight />
            </div>
            <a
              href="#project"
              className="projectMovieCircel-gradient hover:projectMovieCircel-gradient-hover group relative z-[50] m-2 mx-auto -mt-[160px] flex size-[150px] items-center justify-center rounded-full p-4 shadow-md shadow-[#5c5ca0] backdrop-blur-xl transition-colors duration-500 xs:-mt-[200px] sm:-mt-[290px] sm:size-[170px] md:-mt-[360px] md:size-[170px] lg:-mt-[400px]"
            >
              <img
                className="animate-spin-slow transition-colors duration-500 group-hover:animate-none"
                src={arrow}
                alt=""
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:rotate-45">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.86039 23.9V21.52H19.8425L0.100389 1.77788L1.77829 0.0999756L21.5204 19.8421V4.85998H23.9004V23.9H4.86039Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* llmamind about section start */}
          <div className="relative -z-0 !flex items-center !justify-end py-[100px] text-center md:z-40 lg:mt-[60px] lg:py-[170px]">
            <div className="absolute -left-[600px] h-[900px] overflow-hidden mix-blend-plus-lighter xs:-left-[900px] sm:-left-[1050px] lg:-left-[1040px]">
              <video
                className="z-[10] h-full w-auto mix-blend-plus-lighter"
                src={waveVideo}
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
              />
            </div>
            <div className="blue__gradient absolute -left-[260px] -top-[10px] z-10 size-[450px] rounded-full opacity-[0.4] sm:-left-[300px] sm:size-[500px] md:-top-[170px] md:size-[700px] md:opacity-[.3] xl:size-[1000px] xl:opacity-[.3]" />
            <div className="z-40 mx-auto max-w-[400px] text-center font-Roboto text-[22px] font-light leading-[36px] text-white xs:text-[26px] xs:leading-[40px] sm:max-w-[800px] sm:text-[30px] sm:leading-[48px] md:px-[30px] md:text-[33px] lg:px-0">
              At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech
              to Shape the Digital Future. We Empower Businesses with
              Intelligent, Scalable Solutions for Growth and Smarter
              Decision-Making, Building a More Connected World.
            </div>
          </div>
          {/* llmamind about section end */}
        </>
      </div>
      {/* smalll screen end */}
    </>
  );
}

export default Header;
