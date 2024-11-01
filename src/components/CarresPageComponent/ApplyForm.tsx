// import { SetStateAction, useState } from "react";
import Layout from "../layout/Layout";
import DownloadIcon from '../../../public/images/dowload.png'


function ApplyForm() {


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Form submission logic here
    };

    return <Layout>
        <div className=" mb-10 lg:-mb-[150px] z-50 md:px-[30px] lg:px-[70px] 2xl:px-0 ">
            <div className=" flex flex-col gap-[17px]">
                <h1 className=" text-white font-extrabold text-center font-Orbitron text-[34px] md:text-[68px]">Can’t see your position?</h1>
                <p className=" text-[#D5D5D5] text-center font-light text-[22px] md:text-[26px] font-Roboto">Send your resume and the position you're interested in. We’ll be in touch if there's a fit.</p>
            </div>
            <form className="w-full max-w-[1020px] mx-auto font-Roboto  z-50 mt-[30px] text-white rounded-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-5 md:grid-flow-col gap-[20px]">
                    <div className=" space-y-[10px]">
                        <label className="block font-normal text-[20px]">Full Name</label>
                        <input
                            type="text"
                            className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>
                    <div className=" space-y-[10px]">
                        <label className="block font-normal text-[20px]"> Email</label>
                        <input
                            type="text"
                            className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>

                    <div className=" space-y-[10px]">
                        <label className="block font-normal text-[20px]"> Phone </label>
                        <input
                            type="text"
                            className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>
                    <div className=" space-y-[10px]">
                        <label className="block font-normal text-[20px]"> LinkedIn Profile  </label>
                        <input
                            type="text"
                            className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>
                    <div className="z-40 space-y-[10px]">
                        <label className="z-40 block font-normal text-[20px]"> Website / Portfolio / GitHub </label>
                        <input
                            type="text"
                            className="w-full z-40 text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>
                    <div className="  space-y-[10px]">
                        <label className="block font-normal text-[20px]"> Job Position</label>
                        <input
                            type="text"
                            className="w-full text-[20px] font-normal px-[20px] py-[12px] xl:py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>


                    <div className=" space-y-[10px] row-span-2">
                        <label className="block mb-1 font-normal text-[20px]">Resume</label>
                        <div className="w-full md:h-[75%] h-[144px] border-dashed border-[2px] border-[#ffffff] border-opacity-[20%] flex items-center bg-[#0A0A24] bg-opacity-[20%] justify-center rounded-lg text-center">
                            <input type="file" className="hidden" id="resume" />
                            <label htmlFor="resume" className="text-blue-500 cursor-pointer flex flex-col items-center">
                                <img src={DownloadIcon} alt="" className=" size-[24px]" />
                                {'Select File'}<br />
                                <span className="text-[16px] text-white z-40">JPEG, PDF. Max size limit 3 MB</span>
                            </label>
                        </div>
                    </div>

                    <div className="z-40 row-span-2 md:-mt-5 space-y-[10px]">
                        <label className=" z-40 block font-normal  text-[20px]"> Cover Letter</label>
                        <input
                            type="text"
                            className=" z-40 w-full text-[20px] h-[174px] md:h-[85%] font-normal px-[20px] py-[17px] text-white rounded-lg bg-[#0A0A24] bg-opacity-[20%] border-[2px] border-[#ffffff] border-opacity-[8%]  focus:outline-none"
                        />
                    </div>

                </div>
                <div className=" z-40 pt-10 flex items-start md:items-center">
                    <input
                        type="checkbox"
                        className="z-40 mr-2 mt-[6px] md:mt-0"
                        id="consent"
                    />
                    <label htmlFor="consent" className="z-40 text-gray-400">
                        By submitting my application, I consent to the storage and processing of my personal data.
                    </label>
                </div>
                <div className=" flex items-center justify-center">

                    <button type="submit" className="z-40  mt-4 transition-all md:max-w-max rounded-lg w-full px-[32px] py-[15px] text-[20px] md:text-[22px]  font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">{"Send Resume"}</button>

                </div>
            </form>
        </div>
    </Layout>;
}

export default ApplyForm;
