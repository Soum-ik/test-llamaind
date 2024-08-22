import React from "react";
import Layout from "../layout/Layout";
import { PhoneCall, Mail } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

function ContactPage() {
    return <Layout>
        <div className="mx-auto max-w-[1200px] relative padding space-y-[60px]">
            <div>
                <h1 className="heading-style">Drop Us a Line, We’re Here</h1>
                <h1 className="sub-text pt-[20px]">Reach out for more details on our projects and how we can support you</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[100px] md:gap-[30px]">
                <div className=" flex flex-col gap-[60px]">
                    <div className="flex flex-col gap-[20px]">
                        <h1 className=" contact-text">Contact</h1>
                        <div className=" space-y-[16px]">
                            <div className=" flex items-center gap-[16px] text-[16px] input-label"><PhoneCall />+1 (647) 877-6445</div>
                            <div className=" flex items-center gap-[16px] text-[16px] input-label"><Mail />info@llamamind.io</div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-[20px]">
                        <h1 className=" contact-text">Follow Us</h1>
                        <div className=" space-y-[16px]">
                            <div className=" flex items-center gap-[16px] input-label"><FaFacebook /> facebook.com/llamamind</div>
                            <div className=" flex items-center gap-[16px] input-label"><RiInstagramFill /> instagram.com/llamamind</div>
                            <div className=" flex items-center gap-[16px] input-label"><IoLogoLinkedin /> linkdin.com/llamamind</div>
                            <div className=" flex items-center gap-[16px] input-label"><FaSquareXTwitter /> x.com/llamamind</div>
                        </div>
                    </div>

                </div>
                <div className=" z-40 w-[586px]  font-Roboto text-white grid grid-rows-6 gap-[20px] grid-flow-col ">
                    <div className=" flex flex-col gap-[10px]">
                        <h1 className=" input-label ">Full Name</h1>
                        <input type="text" className=" input" name="" id="" />
                    </div>
                    <div className=" flex flex-col gap-[10px]">
                        <h1 className="input-label ">Email</h1>
                        <input type="text" className=" input" name="" id="" />
                    </div>
                    <div className=" h-[200px] row-span-3 flex flex-col gap-[10px]">
                        <h1 className=" input-label ">Your Message</h1>
                        <textarea className=" input h-full" name="" id="" />
                    </div>
                    <button className="btn-gradient max-w-max -mt-[120px] font-bold">Send Message</button>
                </div>
            </div>
            <div className=" absolute top-0 left-1/2  opacity-40 -translate-x-1/2 z-20  about-blur-shadow"></div>
        </div>
    </Layout>;
}

export default ContactPage;
