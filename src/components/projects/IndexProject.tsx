import { useState } from "react";
import Layout from "../layout/Layout";
import icon1 from '../../../public/images/projects/project1.png'
import project1 from '../../../public/images/project1.png'
import { MoveRight, PowerOff } from "lucide-react";


// Define the type for project details
interface Project {
    icon: string;
    description: string[];
    status: string;
}

function IndexProject() {
    const [currentProjectNumber, setCurrentProjectNumber] = useState<string>('01');

    const projects: Project[] = [
        { icon: icon1, description: ["The First Cloud-Based", " Fleet Monetization Platform"], status: "(Upcomming Project)" }
    ]


    return <Layout>
        <div className=" flex items-center justify-between">
            <h1 className="text-[250px] w-[700px] text-white font-Orbitron font-bold opacity-5">Projects</h1>
            <h1 className="text-[100px] w-[100px] -mr-9 text-white font-Orbitron font-bold opacity-5 rotate-90">{currentProjectNumber}</h1>
        </div>
        <div className=" relative flex  mx-auto items-center justify-between">
            {
                projects.map((project, idx) => (
                    <div key={idx} className=" z-40 w-[600px] text-white space-y-3">
                        <img src={project.icon} alt="" />
                        <div className="leading-[54px] text-[44px] font-bold font-Roboto">
                            {project?.description?.map((line, lineIdx) => (
                                <h1 key={lineIdx}>{line}</h1>
                            ))}
                        </div>
                        <h1 className=" font-normal text-xl font-Roboto">{project.status}</h1>
                    </div>
                ))
            }
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center mx-auto blur-[200px] rounded-full w-[900px] h-[800px] opacity-40 bg-[#3534C0]" />

            <div className="z-40">
                <img className="" src={project1} alt="" />
            </div>
        </div>
        <div className=' mt-10 text-white font-Roboto  flex items-center gap-2'>
            Scroll down <MoveRight />
        </div>
    </Layout>
}

export default IndexProject;
