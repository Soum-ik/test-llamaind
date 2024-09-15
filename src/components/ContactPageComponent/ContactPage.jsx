import React from "react";
import Layout from "../layout/Layout";
import { PhoneCall, Mail } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import Button from "../ui/Button";

function ContactPage() {
    return <Layout>
        <div className=" 2xl:min-h-[1000px] ">
            <div className="mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] relative padding  xs:mb-0  xl:-mb-[300px] space-y-[60px]">
                {/* heading part */}
                <div>
                    <h1 className="heading-text text-[34px] md:text-[45px] xl:text-[54px] 2xl:tex-[64px]">Drop Us a Line, We’re Here</h1>
                    <h1 className="sub-heading-text text-[22px] pt-[20px]">Reach out for more details on our projects and how we can support you</h1>
                </div>


                <div className=" flex md:flex-row items-center md:items-start relative flex-col-reverse justify-between  md:gap-[40px]">


                    <div className=" hidden absolute md:static -left-[0px] md:flex flex-col gap-[60px]">
                        <div className="flex flex-col gap-[20px]">
                            <h1 className=" contact-text text-[18px] md:text-[20px]">Contact</h1>
                            <div className=" space-y-[16px]">
                                <div className=" flex items-center gap-[16px] text-[18px] md:text-[20px] input-label"><BiSolidPhoneCall />+1 (647) 877-6445</div>
                                <div className=" flex items-center gap-[16px] text-[18px] md:text-[20px] input-label"><MdEmail />info@llamamind.io</div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-[20px]">
                            <h1 className="z-40 contact-text text-[18px] md:text-[20px]">Follow Us</h1>
                            <div className=" z-40 space-y-[16px]">
                                <div className=" z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><FaFacebook /> facebook.com/llamamind</div>
                                <div className=" z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><RiInstagramFill /> instagram.com/llamamind</div>
                                <div className=" z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><IoLogoLinkedin /> linkdin.com/llamamind</div>
                                <div className=" z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><FaSquareXTwitter /> x.com/llamamind</div>
                            </div>
                        </div>

                    </div>
                    <div className=" relative z-40 w-[330px] xxs:w-[375px] xs:w-[430px] sm:w-[490px] mb-[350px] md:mb-0  2xl:w-[586px]  font-Roboto  text-white grid grid-rows-6 gap-[20px] grid-flow-col">
                        <div className=" flex  flex-col gap-[10px]">
                            <h1 className=" input-label text-[18px] xl:text-[20px]">Full Name</h1>
                            <input type="text" className=" text-[20px] input px-[20px] py-[12px] xl:py-[17px]" name="" id="" />
                        </div>
                        <div className=" flex flex-col gap-[10px]">
                            <h1 className="input-label text-[18px] xl:text-[20px]">Email</h1>
                            <input type="text" className=" text-[20px] input px-[20px] py-[12px] xl:py-[17px]" name="" id="" />
                        </div>
                        <div className=" h-[200px] row-span-3 flex flex-col gap-[10px]">
                            <h1 className=" input-label text-[18px] xl:text-[20px]">Your Message</h1>
                            <textarea className=" text-[20px] input h-full px-[20px] py-[8px]" name="" id="" />
                        </div>
                        <div className=" -mt-[120px]">
                            <button className="z-40 w-full md:max-w-max transform rounded-lg px-[32px] py-[18px] text-[22px] text-nowrap transition-transform font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] ">Send Message</button>
                        </div>
                        {/* <button className=" z-40 transform rounded-lg font-bold px-[32px] py-[18px] max-w-max text-[22px]  transition-transform font-Roboto duration-500  bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF]">Send Message</button> */}
                        {/* <button className=" bg-gradient-to-r to-[#6CB1FF] from-[#5D5CE8] hover:from-[#3534C0] hover:to-[#06FFDF] h-[60px] px-[32px]  py-[18px]  rounded-lg w-full md:max-w-max font-Roboto text -mt-[80px] 2xl:-mt-[130px] font-bold">Send Message</button> */}
                        <div className=" md:hidden absolute md:static  bottom-0 top-[600px] -left-[0px] flex flex-col gap-[60px]">
                            <div className="flex flex-col gap-[20px]">
                                <h1 className=" contact-text text-[18px] md:text-[20px]">Contact</h1>
                                <div className=" space-y-[16px]">
                                    <div className=" flex items-center gap-[16px] text-[18px] md:text-[20px] input-label"><BiSolidPhoneCall />+1 (647) 877-6445</div>
                                    <div className=" flex items-center gap-[16px] text-[18px] md:text-[20px] input-label"><MdEmail />info@llamamind.io</div>
                                </div>
                            </div>
                            <div className=" z-40 flex flex-col gap-[20px]">
                                <h1 className=" z-40 contact-text text-[18px] md:text-[20px]">Follow Us</h1>
                                <div className=" z-40 space-y-[16px]">
                                    <div className="z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><FaFacebook /> facebook.com/llamamind</div>
                                    <div className="z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><RiInstagramFill /> instagram.com/llamamind</div>
                                    <div className="z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><IoLogoLinkedin /> linkdin.com/llamamind</div>
                                    <div className="z-40 flex items-center gap-[16px] input-label text-[18px] md:text-[20px]"><FaSquareXTwitter /> x.com/llamamind</div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>



                <div className=" top-[100px]   absolute z-[30]  xs:size-[450px] rounded-[450px] size-[360px] xxs:size-[380px]  flex-shrink-0 mobile-blur-shadow-gradient -translate-x-1/2  left-1/2 " />
                {/* <div className=" absolute z-[30] top-1/2 -translate-y-1/2 left-1/2 hidden md:block -translate-x-1/2  mix-blend-plus-darker  about-blur-shadow size-[350px] xs:size-[400px] md:size-[800px] lg:size-[500px] "></div> */}
            </div>
        </div>
    </Layout>;
}

export default ContactPage;
