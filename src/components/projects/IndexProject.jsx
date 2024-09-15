import { MoveRight } from "lucide-react";
import project1 from "../../../public/images/Group.png";
import icon1 from "../../../public/images/projects/project1.png";
// import projectVideo from "../../../public/video/projects.mp4";
import projectVideo from "../../../public/video/projects.webm";
import Layout from "../layout/Layout";

function IndexProject() {
  const projects = [
    {
      id: "01",
      icon: icon1,
      headings: ["The First Cloud-Based", "Fleet Monetization Platform"],
      status: "(Upcoming Project)",
      des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.",
      video: projectVideo,
    },
  ];

  return (
    <div
      id="project"
      className="relative py-[160px] pb-[260px] md:px-[30px] lg:px-[70px] lg:pb-[330px] xl:py-0"
    >
      <Layout>
        <div className="xl:hidden">
          <div className="flex items-center justify-between overflow-hidden">
            <h1 className="z-50 flex-1 font-Orbitron text-[68px] font-bold text-white opacity-5 xs:text-[80px] sm:text-[95px] md:text-[120px] lg:text-[180px] xl:w-[700px] xl:text-[250px]">
              Projects
            </h1>
          </div>

          <div className="relative mx-auto mt-20 flex flex-col justify-between gap-[40px]">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="z-40 w-auto space-y-[16px] text-white md:space-y-3"
              >
                <div className="space-y-[16px] xl:mb-[400px]">
                  <img src={project.icon} alt="" />
                  <div className="font-Roboto text-[44px] font-bold leading-[54px]">
                    {project?.headings?.map((line, lineIdx) => (
                      <h1
                        key={lineIdx}
                        className="max-w-max text-[32px] leading-[35px] sm:text-[36px] sm:leading-[42px] md:text-[39px] md:leading-[48px] lg:text-[45px]"
                      >
                        {line}
                      </h1>
                    ))}
                  </div>
                  <h1 className="font-Roboto text-[14px] font-normal text-[#D5D5D5] md:text-xl">
                    {project.status}
                  </h1>

                  <div className="z-40 flex items-center justify-center py-[40px]">
                    <img
                      className="z-30 h-[190.981px] w-[335.852px] xxs:h-[190px] xxs:w-[330px] xs:h-[190px] sm:h-[238px] sm:w-[415px] md:h-[260px] md:w-[460px] lg:h-[334px] lg:w-[598px]"
                      src={project1}
                      alt=""
                    />

                    <video
                      playsInline
                      className="absolute left-1/2 z-40 -mt-[10px] ml-[2px] h-[176px] w-[271px] -translate-x-1/2 px-1.5 transition-transform sm:h-[213px] sm:w-[405px] md:h-[236px] lg:h-[305px] lg:w-[487px] lg:pb-[2px]"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      preload="auto"
                    />

                    <div className="blue__gradient absolute z-0 size-[350px] rounded-full opacity-80 xs:size-[400px] md:size-[530px] lg:size-[600px] lg:opacity-60 xl:size-[800px]"></div>
                  </div>

                  <div className="body-mobile z-[30] space-y-[30px] pb-[20px] sm:text-[24px] lg:text-[30px] lg:leading-[40px]">
                    {project.des}
                  </div>
                  <a href="/">
                    {" "}
                    <button className="absolute left-1/2 mx-auto mt-2 w-full -translate-x-1/2 rounded-lg bg-gradient-to-r from-[#5D5CE8] to-[#6CB1FF] px-[32px] py-[18px] font-Roboto text-[20px] hover:from-[#3534C0] hover:to-[#06FFDF] md:left-auto md:max-w-max md:translate-x-0 13inch:hidden">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 hidden items-center gap-2 font-Roboto text-white">
            Scroll down <MoveRight />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default IndexProject;
