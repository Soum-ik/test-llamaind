import Layout from '../layout/Layout';
import JobList from './JobList';
import { useState } from 'react';
// import animation from '../../../public/video/no-job-open.mp4';
import animation from '../../../public/video/no-job-open.mp4';
// import animation from '../../../public/video/gif.gif';
import { openPositios } from '../libs/staticData';
// import { Turtle } from 'lucide-react';

function Positions() {
    const [availableVacancies, setAvailableVacancies] = useState(true);

    return <Layout>
        <div id='position' className='relative mt-[19px]  md:mt-[80px] lg:mt-[100px] xl:mt-[270px] -z-0 pb-[160px] md:pb-[300px] xl:pb-[160px] md:px-[30px] lg:px-[70px] xl:px-[0px]'>

            {availableVacancies ?
                <>
                    <h1 className=" z-[2000] text-[68px] xs:text-[80px] sm:text-[95px] md:text-[120px] lg:text-[180px] xl:text-[200px] 13inch:text-[250px] xl:w-[700px] text-white font-Orbitron font-bold opacity-5 ">Positions</h1>
                    <JobList positions={openPositios} />
                </> : <>


                    <div className=" mb-[130px] laptop:mb-[150px] z-[1] flex-col  h-[280px] md:h-[506px]   flex lg:h-[600px] xs:h-[300px]    w-full items-center justify-center overflow-hidden ">
                        <video
                            src={animation}
                            className="h-full w-auto object-cover mix-blend-lighten z-[1]"
                            loop
                            autoPlay
                            muted
                        />
                        <div className="top-[100px] absolute z-10 mobile-blur-shadow-gradient xs:size-[500px] size-[310px] rounded-full xl:hidden mix-blend-plus-lighter" />
                        <p className='  mix-blend-lighten -z-30 text-[26px] sm:text-[36px] -mt-[60px] xl:text-[46px]  font-bold text-center  font-Roboto text-[#D5D5D5]'>No Vacancies Available at this Moment</p>

                    </div>



                </>
            }
            <div className=" top-[100px] left-1/2 -translate-x-1/2 absolute z-10 blue__gradient size-[350px] sm:size-[500px] md:size-[700px] xl:size-[1000px] rounded-full opacity-[0.2] md:opacity-[.3] xl:opacity-[.2]" />
            {/* <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 hidden md:block  opacity-40 -translate-x-1/2 z-0  about-blur-shadow size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  2xl:size-[1000px]"></div> */}
        </div>
    </Layout>;
}

export default Positions;

