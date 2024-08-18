import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";


import Layout from "./layout/Layout";
import Logo from '../../public/images/footerLogo.png';
import FooterVideo from '../../public/video/footerVideo.mp4';


const Footer = () => {
    return (
        <div className="relative  pt-[250px] z-10">
            <div className=" absolute z-10 top-0 right-0 left-0 bg-gradient-to-b from-black to-transparent w-full h-4/5"></div>
            <Layout>
                <div className="absolute left-0 right-0 bottom-0 max-w-[1720px] mx-auto mt-16 p-3 flex items-center justify-between">
                    <div>
                        <img src={Logo} className=" bg-transparent z-40" alt="brand logo" />
                    </div>
                    <div className="z-40 text-lg font-Roboto gap-6 text-white">
                        <div className=" flex justify-end gap-3">
                            <FaDiscord size={20} />
                            <FaFacebook size={20} />
                            <RiInstagramFill size={20} />
                            <IoLogoLinkedin size={20} />
                            <FaSquareXTwitter size={20} />
                        </div>
                        <p>©2024 All rights reserved</p>
                    </div>
                </div>
            </Layout>
            {/* <video className=" bg-transparent z-10  mx-auto !w-full  absolute left-1/2  -bottom-0 transform -translate-x-1/2" src={FooterVideo} autoPlay muted loop /> */}
            <div className="max-h-[550px]  overflow-hidden">
                <video className="  z-0 opacity-30 !w-full" src={FooterVideo} autoPlay muted loop />
            </div>
        </div>
    );
};

export default Footer;
