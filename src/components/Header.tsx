import Layout from "./layout/Layout";
import headerImage from '../../public/images/header.png'
import waveVideo from '../../public/video/hero.mp4'
function Header() {
    return <Layout>
        <div className=" my-20">
            <h1 className="font-bold text-white z-20 text-7xl font-Orbitron text-center" data-aos="fade-up"  data-aos-duration="1000" >
                Pioneering the Future with
                <br /> Digital Excellence
            </h1>
            <div className=" relative flex items-center justify-center" data-aos="fade-right"  data-aos-duration="2000">
                <div className="  !overflow-hidden flex items-center justify-center !mx-auto ">
                    <video className=" iamge-fixer  !mx-auto  !max-w-[1750px]" src={waveVideo} loop autoPlay muted />
                </div>
                <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                <img className=" z-20 absolute inset-0 mx-auto -top-16 size-[660px]" src={headerImage} alt="" />
            </div>
        </div>
    </Layout>;
}

export default Header;


