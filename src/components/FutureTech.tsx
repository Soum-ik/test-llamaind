
import FutureIcon from '../../public/images/futureIcon.png'
import FutureTechLooping from "./FutureTechLooping";
import Layout from "./layout/Layout";
import features from '../../public/video/s.mp4'
function FutureTech() {
    const leftSideTechs =
        ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'];

    const rightSideTechs = ['Blockhain', 'Internet of Things', 'Cloud Solutions', 'Augmented & Virtual Reality']


    return <Layout>
        <div className=" relative mb-[100px] md:!mb-[400px]">
            <div className=" md:pb-[120px] max-w-4xl mx-auto text-white flex  justify-center flex-col">
                <h1 className="z-30 font-bold text-[34px] md:text-7xl text-center md:text-left">Our Future Driven</h1>
                <h1 className="z-30 ml-2 font-bold text-[34px] md:text-7xl text-center md:text-right"><span className="text-[#6CB1FF]">Tech</span> Arsenal</h1>
            </div>

            {/* options are will be avaiable */}
            <div className="relative  pt-10">
                <div className=" px-24 flex flex-col md:flex-row items-center justify-between">
                    <FutureTechLooping style=' space-y-[5px]' array={leftSideTechs} />
                    {/* <div className=" !overflow-hidden   flex items-center justify-center !mx-auto"> */}
                    <div className="   w-[1200px] md:!w-[1792px] ">
                        <video src={features} loop autoPlay muted className="-my-[180px]  mix-blend-plus-lighter z-30 md:absolute md:absolute-center " />
                        {/* <img src={FutureIcon} className='  z-40 absolute  absolute-center' alt="" /> */}
                    </div>
                    <div className="blur-shadow absolute left-1/2 transform -translate-x-1/2" />
                    <FutureTechLooping style=' space-y-[5px]' array={rightSideTechs} />
                </div>
            </div>
        </div>

    </Layout>;
}

export default FutureTech;
