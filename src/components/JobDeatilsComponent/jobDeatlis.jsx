import React, { useState } from "react";
import Layout from "../layout/Layout";
import MarkDown from '../../components/shared/TextEditorDataReader';
import { Dot } from "lucide-react";
import JSONPlaceHolder from '../libs/jobDes.json';
import DownloadIcon from '../../../public/images/dowload.png';
import { FaLessThanEqual } from "react-icons/fa6";

function JobDeatlis({ jobName }) {
    const [currentSelected, setCurrentSelected] = useState(1);
    let currenData;

    const menuItems = [
        { id: 1, href: '#job-description', label: 'Job Description' },
        { id: 2, href: '#Working-details', label: 'Working details' },
        { id: 3, href: '#Key Responsibilities', label: 'Key Responsibilities' },
        { id: 4, href: '#Technical Proficiency', label: 'Technical Proficiency' },
        { id: 5, href: '#Requirements', label: 'Requirements' },
        { id: 6, href: '#Benefits', label: 'Benefits' },
        { id: 7, href: '#Apply', label: 'Apply' },
    ];





    return <Layout>
        <div className="  text-white padding ]">
            <div className="relative flex items-center pb-[140px]  flex-col">
                <h1 className="heading-style">{jobName}</h1>
                <p className="font-Roboto pt-[10px] group-hover:textColor duration-500 text-[26px] flex items-center font-light gap-2">{`Full time`}<Dot size={40} />{`Remote`}</p>
                <button className=" mt-[40px] btn-gradient font-Roboto">Apply Now</button>
                <div className="about-blur-shadow absolute top-0 z-40  mix-blend-plus-lighter"></div>
            </div>
            <div className="  font-Roboto min-h-[90vh] flex justify-between gap-[100px] pt-20">
                <div className=" min-w-[340px] flex-col">
                    <aside className=" sticky top-28  h-fit">
                        {menuItems.map((item) => (
                            <a
                                onClick={() => setCurrentSelected(item.id)}
                                href={item.href}
                                key={item.id}
                                className={currentSelected === item.id ? 'box box-font box-active' : 'box box-font'}
                            >
                                {item.label}
                            </a>
                        ))}

                    </aside>
                </div>
                <div className="z-40 flex flex-1 flex-col gap-[60px]">
                    <div className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Job Description</h1>
                        <p id="job-description" className="details-text-dec">We are a start up Canadian company seeking a highly skilled Backend Developer to join our team, capable of understanding and contributing to the overall application architecture. You will play a crucial role in developing robust and scalable backend systems using modern technologies. As a key member of our team, you will lead backend development efforts, ensuring adherence to best practices and promoting efficiency, reliability, and maintainability.</p>
                    </div>
                    <div id="Working-details" className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Working details</h1>
                        <p className="details-text-dec">
                            <MarkDown>
                                {
                                    `- 09:00 AM - 06:00 PM.
- Sunday to Thursday (5 days a week)
- Friday, Saturday off`
                                }
                            </MarkDown>
                        </p>
                    </div>
                    <div id="Key Responsibilities" className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Key Responsibilities</h1>
                        <p className="details-text-dec">
                            <MarkDown>

                                {`
- Develop and maintain CI/CD pipelines for automated build, test, and deployment processes.
- Manage and monitor cloud infrastructure and on-premise servers.
- Implement and enforce security best practices and policies.
- Collaborate with development teams to optimize application performance and scalability.
- Troubleshoot and resolve infrastructure and deployment issues.
                            `}

                            </MarkDown>

                        </p>
                    </div>
                    <div id="Technical Proficiency" className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Technical Proficiency</h1>
                        <p className="details-text-dec">
                            <MarkDown>

                                {`
- Strong knowledge of cloud platforms (AWS, Azure, Google Cloud).
- Experience with containerization and orchestration tools (Docker, Kubernetes).
- Familiarity with configuration management tools (Ansible, Terraform).
    - Understanding of networking, security, and system administration.
                            `}

                            </MarkDown>

                        </p>
                    </div>
                    <div id="Requirements" className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Requirements</h1>
                        <p className="details-text-dec">
                            <MarkDown>


                                {`- Proven experience as a DevOps Engineer or similar role.
    - Strong knowledge of cloud platforms (AWS, Azure, Google Cloud).
    - Experience with containerization and orchestration tools (Docker, Kubernetes).
    - Familiarity with configuration management tools (Ansible, Terraform).
    - Understanding of networking, security, and system administration.`}

                            </MarkDown>
                        </p>
                    </div>
                    <div id="Benefits" className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Benefits</h1>
                        <p className="details-text-dec">
                            <MarkDown>
                                {`- Competitive salary
- Health insurance
- Paid time off
- Professional development opportunities`}
                            </MarkDown>
                        </p>

                    </div>

                    {/* apply form */}
                    <div id="Apply" className=" flex flex-col gap-[20px]">
                        <h1 className="details-text-heading">Apply</h1>
                        <form className="w-full max-w-[1020px]  font-Roboto  mt-[30px] text-white rounded-lg" >
                            <div className="grid grid-cols-2  grid-rows-5 grid-flow-col gap-[20px]">
                                <div>
                                    <label className="block font-normal text-[20px]">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block font-normal text-[20px]"> Email</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block font-normal text-[20px]"> Phone </label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block font-normal text-[20px]"> LinkedIn Profile  </label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block font-normal text-[20px]"> Website / Portfolio / GitHub </label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block font-normal text-[20px]"> Expected Salary</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>


                                <div className="  row-span-2">
                                    <label className="block mb-1">Resume</label>
                                    <div className="w-full h-[75%]  border-dashed border-[2px] border-[#ffffff] border-opacity-[20%] flex items-center bg-[#0A0A24] bg-opacity-[20%] justify-center rounded-lg text-center">
                                        <input type="file" className="hidden" id="resume" />
                                        <label htmlFor="resume" className="text-blue-500 cursor-pointer flex flex-col items-center">
                                            <img src={DownloadIcon} alt="" className=" size-[24px]" />
                                            {'Select File'}<br />
                                            <span className="text-[16px] text-white">JPEG, PDF. Max size limit 3 MB</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="row-span-2 -mt-5">
                                    <label className="block font-normal  text-[20px]"> Cover Letter</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] h-[85%] font-normal px-[20px] py-2 text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>

                            </div>
                            <div className=" py-[20px]  flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 "
                                    id="consent"
                                />
                                <label htmlFor="consent" className="text-gray-400">
                                    By submitting my application, I consent to the storage and processing of my personal data.
                                </label>
                            </div>
                            <div className="">

                                <button onClick={() => alert('d')} type="submit" className="z-40   transition-all rounded-lg px-[32px] py-[15px] text-[22px]  font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">{"Submit application"}</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </Layout >;
}

export default JobDeatlis;
