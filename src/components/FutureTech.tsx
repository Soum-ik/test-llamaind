
import FutureIcon from '../../public/images/futureIcon.png'
import FutureTechLooping from "./FutureTechLooping";
import Layout from "./layout/Layout";
import features from '../../public/video/s.mp4'
function FutureTech() {
    const leftSideTechs =
        ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'];

    const rightSideTechs = ['Blockhain', 'Internet of Things', 'Cloud Solutions', 'Augmented & Virtual Reality']


    return <Layout>
        <div className=" relative !mb-[400px]">
            <div className=" pb-[120px] max-w-4xl mx-auto text-white flex  justify-center flex-col">
                <h1 className="z-30 font-bold text-7xl text-left">Our Future Driven</h1>
                <h1 className="z-30 FutureIcon30 font-bold text-7xl  text-right"><span className="text-[#6CB1FF]">Tech</span> Arsenal</h1>
            </div>

            {/* options are will be avaiable */}
            <div className="relative  pt-10">
                <div className=" px-24 flex items-center   justify-between">
                    <FutureTechLooping array={leftSideTechs} />
                    {/* <div className=" !overflow-hidden   flex items-center justify-center !mx-auto"> */}
                    <div className="  !w-[1792px] iamge1-fixer   flex items-center justify-center !mx-auto">
                        <video src={features} loop autoPlay muted className="iamge1-fixer mix-blend-plus-lighter z-30 absolute absolute-center " />
                        <img src={FutureIcon} className='  z-40 absolute  absolute-center' alt="" />
                    </div>
                    <div className="blur-shadow absolute left-1/2 transform -translate-x-1/2" />
                    <FutureTechLooping array={rightSideTechs} />
                </div>
            </div>
        </div>

    </Layout>;
}

export default FutureTech;
