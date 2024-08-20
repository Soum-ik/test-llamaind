// import { SetStateAction, useState } from "react";
import Layout from "../layout/Layout";
import DownloadIcon from '../../../public/images/dowload.png'


function ApplyForm() {
    // const [resume, setResume] = useState(null);

    // const handleResumeUpload = (e: { target: { files: SetStateAction<null>[]; }; }) => {
    //     setResume(e.target.files[0]);
    // };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Form submission logic here
    };

    return <Layout>
        <div className=" pt-[70px]">
            <div className=" flex flex-col gap-[17px]">
                <h1 className=" text-white font-extrabold text-center font-Orbitron text-[68px]">Can’t see your position?</h1>
                <p className=" text-[#D5D5D5] text-center font-light text-[26px] font-Roboto">Send your resume and the position you're interested in. We’ll be in touch if there's a fit.</p>
            </div>
            <form className="w-full max-w-[1020px] mx-auto font-Roboto  mt-[30px] text-white rounded-lg" onSubmit={handleSubmit}>
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
                        <label className="block font-normal text-[20px]"> Job Position</label>
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
                <div className=" pt-10 flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2 "
                        id="consent"
                    />
                    <label htmlFor="consent" className="text-gray-400">
                        By submitting my application, I consent to the storage and processing of my personal data.
                    </label>
                </div>
                <div className=" flex items-center justify-center">

                    <button onClick={() => alert('d')} type="submit" className="z-40  mt-4 transition-all rounded-lg px-[32px] py-[15px] text-[22px]  font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">{"Send Resume"}</button>

                </div>
            </form>
        </div>
    </Layout>;
}

export default ApplyForm;
