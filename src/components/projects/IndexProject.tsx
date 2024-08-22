
import Layout from "../layout/Layout";
import icon1 from '../../../public/images/projects/project1.png'
import project1 from '../../../public/images/project1.png'
import { MoveRight } from "lucide-react";


// Define the type for project details
interface Project {
    icon: string;
    description: string[];
    status: string;
}

function IndexProject() {
    // const [currentProjectNumber, setCurrentProjectNumber] = useState<string>('01');

    let currentProjectNumber = `01`

    const projects: Project[] = [
        { icon: icon1, description: ["The First Cloud-Based", " Fleet Monetization Platform"], status: "(Upcomming Project)" }
    ]


    return <Layout>
        <div className=" flex items-center justify-between ">
            <h1 className="md:text-[250px] text-[68px] w-[700px] text-white font-Orbitron font-bold opacity-5">Projects</h1>
            <h1 className=" text-[42px] md:text-[100px] w-[100px] mt-[100px] -mr-5 text-white font-Orbitron font-bold opacity-20 rotate-90">{currentProjectNumber}</h1>
        </div>
        <div className=" relative flex gap-[40px] flex-col md:flex-row mx-auto  justify-between">
            {
                projects.map((project, idx) => (
                    <div key={idx} className=" z-40 w-[600px] text-white space-y-[16px] md:space-y-3">
                        <img src={project.icon} alt="" />
                        <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                            {project?.description?.map((line, lineIdx) => (
                                <h1 key={lineIdx} className=" text-[32px] max-w-[400px] leading-[35px] ">{line}</h1>
                            ))}
                        </div>
                        <h1 className=" font-normal text-[14px] text-[#D5D5D5] md:text-xl font-Roboto">{project.status}</h1>
                    </div>
                ))
            }
            <div className="absolute pb-[100px] z-40 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full w-[450px] h-[450px] md:w-[900px] md:h-[800px] opacity-40 bg-[#3534C0]" />

            <div className="z-40 flex items-center justify-center">
                <img className="project-showcase-size" src={project1} alt="" />
            </div>
            <div className=" body-mobile">
                Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.
                <button className="project-btn mt-3 w-full">View Project</button>
            </div>
        </div>
        <div className=' mt-10 text-white font-Roboto hidden  md:flex items-center gap-2'>
            Scroll down <MoveRight />
        </div>
    </Layout>
}

export default IndexProject;
