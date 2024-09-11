import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import MarkDown from '../shared/TextEditorDataReader';
import { Dot } from "lucide-react";
import JSONPlaceHolder from '../libs/jobDes.json';
import DownloadIcon from '../../../public/images/dowload.png';
import { FaLessThanEqual } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { menuItems, sections } from "../libs/staticData";
import { useInView, InView } from "react-intersection-observer";



function JobDeatlis({ jobName }) {
    const [currentSelected, setCurrentSelected] = useState(1);
    const menuBarRef = useRef(null);

    useEffect(() => {
        const sectionRefs = document.querySelectorAll('.wrapper');
        window.addEventListener('scroll', () => {
            const menuBarTop = menuBarRef.current?.offsetTop || 0;
            sectionRefs.forEach((sectionEl, idx) => {
                if (menuBarTop >= sectionEl.offsetTop) {
                    setCurrentSelected(idx + 1);
                }
            });
        });
    }, []);


    const handleMenuItemClick = (e, item) => {
        e.preventDefault();
        setCurrentSelected(item.id);

        const targetElement = document.querySelector(item.href);
        const offset = menuBarRef.current?.offsetHeight || 0;

        const yOffset = -offset + (400);
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;


        window.scrollTo({ top: y, behavior: 'smooth' });
    };


    return <Layout Layout >
        <div className="  text-white  pt-[100px] xl:-mb-[20px] ">
            <div className="relative flex md:items-center justify-center  flex-col">
                <h1 className=" z-[200] font-Orbitron 13inch:text-[68px] text-[34px] md:text-[45px] font-extrabold leading-[40px] 13inch:leading-normal">{jobName}</h1>
                <p className="  z-[200] font-Roboto text-[16px] md:pt-[10px]  duration-500 md:text-[26px]  font-light flex items-center gap-[0px] md:gap-2">{`Full time`}<Dot size={40} />{`Remote`}</p>
                {/* <p className="font-Roboto text-[16px] pt-[10px]  duration-500 md:text-[26px]  font-light flex items-center gap-1 md:gap-2">{`Full time`}<Dot size={40} />{`Remote`}</p> */}
                <button className=" mt-[28px] lg:mt-[32px]  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] px-[32px] py-[18px] rounded-lg z-[200] text-[20px] w-full md:w-auto font-Roboto">Apply Now</button>
                {/* <button className=" bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] h-[60px] px-[32px]  py-[18px]  rounded-lg w-full md:max-w-max font-Roboto mt-[32px] md:mt-[40px] font-bold">Apply</button> */}
                <div className="right-[1px] absolute z-10 mobile-blur-shadow md:hidden" />
                <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 hidden md:block  opacity-40 -translate-x-1/2 z-10  about-blur-shadow size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  2xl:size-[1000px]"></div>

            </div>
            <div className="  font-Roboto min-h-[90vh] flex justify-between gap-[20px] xl:gap-[100px]  md:pt-20  xl:pt-[200px]  ">
                <div className=" min-w-[340px] hidden lg:flex flex-col">
                    <aside className=" sticky top-28 w-full h-fit z-[200]" ref={menuBarRef}>
                        {menuItems.map((item) => (
                            <a
                                onClick={(e) => handleMenuItemClick(e, item)}
                                href={item.href}
                                key={item.id}
                                className={`${currentSelected === item.id ? 'sidebarEl box box-font box-active' : 'box box-font'} sidebarEl z-[2000]`}
                            >
                                {item.label}
                            </a>
                        ))}

                    </aside>
                </div>
                <div className="z-40 flex flex-1 flex-col mt-[100px] xl:mt-0 gap-[60px]">
                    {sections.map(({ id, title, content }, index) => (

                        <div
                            key={id}
                            id={id}
                            className="wrapper flex flex-col gap-[20px]"
                        >
                            <h1 className="font-Roboto text-[20px] md:text-[26px] font-semibold">{title}</h1>
                            <p className="md:text-[20px] text-[16px] opacity-[.7] font-normal leading-[20px] md:leading-[24px] lg:leading-[26px]">
                                <MarkDown>{content}</MarkDown>
                            </p>
                        </div>

                    ))}
                    <div className=" top-[1900px] right-[1px] bottom-0 absolute z-10 opacity-[0.3]  mobile-blur-shadow md:hidden" />
                    <div className=" absolute  -right-[200px] hidden md:block mt-[1000px] -translate-y-1/2  opacity-[.4] -translate-x-1/2 z-20  about-blur-shadow size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  2xl:size-[900px]"></div>

                    {/* apply form */}
                    <div id="Apply" className="wrapper flex flex-col gap-[20px]">
                        <h1 className=" font-Roboto text-[20px] md:text-[26px] font-semibold">Apply</h1>
                        <form className="w-full max-w-[1020px]  font-Roboto  mt-[30px] text-white rounded-lg" >
                            <div className="grid md:grid-cols-2  md:grid-rows-5 md:grid-flow-col gap-[20px]">
                                <div className="space-y-[10px]">
                                    <label className="block font-normal text-[20px]">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-[10px]">
                                    <label className="block font-normal text-[20px]"> Email</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-[10px]">
                                    <label className="block font-normal text-[20px]"> Phone </label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-[10px]">
                                    <label className="block font-normal text-[20px]"> LinkedIn Profile  </label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-[10px]">
                                    <label className="block font-normal text-[20px]"> Website / Portfolio / GitHub </label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-[10px]">
                                    <label className="block font-normal text-[20px]"> Expected Salary</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>


                                <div className="  row-span-2 space-y-[10px]">
                                    <label className="block mb-1">Resume</label>
                                    <div className="w-full md:h-[75%] h-[140px] border-dashed border-[2px] border-[#ffffff] border-opacity-[20%] flex items-center bg-[#0A0A24] bg-opacity-[20%] justify-center rounded-lg text-center">
                                        <input type="file" className="hidden" id="resume" />
                                        <label htmlFor="resume" className="text-blue-500 cursor-pointer flex flex-col items-center">
                                            <img src={DownloadIcon} alt="" className=" size-[24px]" />
                                            {'Select File'}<br />
                                            <span className="text-[16px] text-white">JPEG, PDF. Max size limit 3 MB</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="row-span-2 md:-mt-5 space-y-[10px] ">
                                    <label className="block font-normal  text-[20px]"> Cover Letter</label>
                                    <input
                                        type="text"
                                        className="w-full text-[20px] h-[170px] md:h-[85%] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                                    />
                                </div>

                            </div>
                            <div className=" py-[20px]  flex md:items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 -mt-4 xl:mt-0"
                                    id="consent"
                                />
                                <label htmlFor="consent" className="text-gray-400">
                                    By submitting my application, I consent to the storage and processing of my personal data.
                                </label>
                            </div>
                            <div className="">
                                <button type="submit" className="z-40   transition-all rounded-lg px-[32px] py-[15px] text-[22px]  font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] w-full md:w-auto">{"Submit application"}</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </Layout >;
}

export default JobDeatlis;
