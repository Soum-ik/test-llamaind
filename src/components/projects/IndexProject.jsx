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
      className="relative py-[160px] pb-[260px] md:px-[30px] lg:px-[70px] lg:pb-[330px] xl:py-0"
    >
      <Layout>
        <div className="xl:hidden">
          <div className=" flex items-center justify-between overflow-hidden">
            <h1 className="text-[68px] xs:text-[80px] flex-1 sm:text-[95px] md:text-[120px] lg:text-[180px] xl:text-[250px] xl:w-[700px] text-white font-Orbitron font-bold opacity-5 z-50">Projects</h1>
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
                    <img className="w-[335.852px] z-30 xxs:w-[330px] sm:w-[415px] md:w-[460px] lg:w-[598px]  lg:h-[334px]  md:h-[260px] sm:h-[238px] xs:h-[190px] xxs:h-[190px] h-[184.981px]" src={project1} alt="" />

                    <video

                      className=" absolute z-40 transition-transform -translate-x-1/2 left-1/2  lg:pb-[2px]   w-[262px] h-[165px]     xxs:w-[271px] lg:h-[305px] lg:w-[487px] ml-[2px] px-1.5 sm:w-[405px]  md:h-[236px]  sm:h-[213px] xxs:h-[176px] -mt-[10px] "
                      src={project.video}
                      autoPlay
                      loop
                      playsInline
                      muted
                      preload="auto"
                    />

                    <div className=" absolute z-0 rounded-full opacity-80 lg:opacity-60 blue__gradient size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  "></div>
                  </div>

                  <div className=" body-mobile space-y-[30px] sm:text-[24px] lg:text-[30px] lg:leading-[40px] z-[30]  pb-[20px]">
                    {project.des}
                  </div>
                  <a href="/"> <button className="md:max-w-max px-[32px] py-[18px] text-[20px]   bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF]  xl:hidden w-full mt-2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0  mx-auto absolute font-Roboto   rounded-lg">View Project</button></a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Layout>
    </div>
  );
}

export default IndexProject;
