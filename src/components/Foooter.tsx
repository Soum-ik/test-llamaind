import Layout from "./layout/Layout";
import Logo from '../../public/images/footerLogo.png';
// import Footerbg from '../../public/images/footerBg.png'
import FooterVideo from '../../public/video/footerVideo.mp4';
function Footer() {
    return (
        <div className="relative -pt-[100px] z-10">
            <div className=" absolute z-10 top-0 right-0 left-0 bg-gradient-to-b from-black to-transparent w-full h-4/5"></div>
            <Layout>
                <div className="absolute left-0 right-0 bottom-0 max-w-[1720px] mx-auto mt-16 p-3 flex items-center justify-between">
                    <div>
                        <img src={Logo} className=" bg-transparent z-40" alt="brand logo" />
                    </div>
                    <div className="z-40 text-lg font-Roboto gap-6 text-white">
                        <p>All rights reserved @llamamind 2024</p>
                    </div>
                </div>
            </Layout>
            {/* <video className=" bg-transparent z-10  mx-auto !w-full  absolute left-1/2  -bottom-0 transform -translate-x-1/2" src={FooterVideo} autoPlay muted loop /> */}
            <div className="max-h-[550px]  overflow-hidden">
                <video className="  z-0 opacity-30 !w-full" src={FooterVideo} autoPlay muted loop />
            </div>
        </div>
    );
}

export default Footer;
