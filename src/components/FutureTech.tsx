
import FutureIcon from '../../public/images/futureIcon.png'
import FutureTechLooping from "./FutureTechLooping";
import Layout from "./layout/Layout";
import features from '../../public/video/features.mp4'
function FutureTech() {
    const leftSideTechs =
        ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'];

    const rightSideTechs = ['Blockhain', 'Internet of Things', 'Cloud Solutions', 'Augmented & Virtual Reality']


    return <Layout>
        <div className=" !my-[70px]">
            <div className="  !mt-56 max-w-4xl mx-auto text-white flex  justify-center flex-col">
                <h1 className="z-30 font-bold text-7xl text-left">Our Future Driven</h1>
                <h1 className="z-30 font-bold text-7xl  text-right"><span className="text-[#6CB1FF]">Tech</span> Arsenal</h1>
            </div>

            {/* options are will be avaiable */}
            <div className="relative -mt-[140px]">
                <div className=" px-24 flex items-center   justify-between">
                    <FutureTechLooping array={leftSideTechs} />
                    <div className=" !overflow-hidden relative flex items-center justify-center !mx-auto">
                        <video src={features} loop autoPlay muted className=" iamge1-fixer  !max-w-[1650px]" />
                        <img src={FutureIcon} className='  z-40 absolute' alt="" />
                    </div>
                    <div className="absolute z-10 blur-[200px]  rounded-full !left-[400px] mx-auto  w-[900px] h-[800px] opacity-30 bg-[#5D5CE8]" />
                    <FutureTechLooping array={rightSideTechs} />
                </div>
            </div>
        </div>

    </Layout>;
}

export default FutureTech;
