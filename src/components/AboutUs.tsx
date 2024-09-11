
import Layout from "./layout/Layout";
import waveVideo from '../../public/video/hero.mp4'
import headerImage from '../../public/images/header.png'


const AboutUs = () => {
    return <Layout>
        <div className="!flex relative !justify-between mt-[300px] z-40 mb-[1000px] ">
            <div className=" absolute -left-[520px]">
                <div className=" relative flex items-center justify-center">
                    <div className="  !overflow-hidden flex items-center justify-center !mx-auto ">
                        <video className=" iamge-fixer  !mx-auto  !max-w-[1750px]" src={waveVideo} loop autoPlay muted playsInline />
                    </div>
                    <div className="absolute z-10 blur-[200px] rounded-full  w-[900px] h-[800px] mt- opacity-20   bg-[#5D5CE8]" />
                    <img className=" z-40 absolute inset-0 mx-auto -top-16 size-[660px]" src={headerImage} alt="" />
                </div>
            </div>

            {/* <div className="z-50 text-white"> */}
            <div id="about-llmamind" className="z-40 absolute pl-5 !top-24 text-ellipsis -right-10 font-light text-[37px] leading-[64px] font-Roboto text-white text-left max-w-[1050px]" >At LlamaMind, We Lead in App Development, Using Cutting-Edge Tech to Shape the Digital Future. We Empower Businesses with Intelligent, Scalable Solutions for Growth and Smarter Decision-Making, Building a More Connected World.</div>
            {/* </div> */}

        </div>
    </Layout>;
}

export default AboutUs;
