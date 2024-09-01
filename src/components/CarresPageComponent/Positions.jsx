import Layout from '../layout/Layout';
import JobList from './JobList';
import { useState } from 'react';
// import animation from '../../../public/video/no-job-open.mp4';
import animation from '../../../public/video/no-job-open.mp4';
// import animation from '../../../public/video/gif.gif';
import { openPositios } from '../libs/staticData';

function Positions() {
    const [availableVacancies, setAvailableVacancies] = useState(true);

    return <Layout>
        <div className='relative  mt-[80px] xl:mt-[400px] -z-0 pb-[180px] xl:pb-[300px]'>

            {availableVacancies ?
                <>
                    <h1 className=" text-[68px] xs:text-[80px] sm:text-[95px] md:text-[120px] lg:text-[180px] xl:text-[250px] xl:w-[700px] text-white font-Orbitron font-bold opacity-5 z-50">Positions</h1>
                    <JobList positions={openPositios} />
                </> : <>
                    <div className=' -z-20'>
                        <video src={animation} className=' mix-blend-overlay rounded-full  -z-10 w-[900px] xl:mt-[140px] h-[280px] md:h-[506px] flex items-center justify-center mx-auto' muted loop autoPlay />
                        {/* <image src={animation} className=' mix-blend-overlay rounded-full  -z-40 w-[900px] mt-[140px] h-[280px] md:h-[506px] flex items-center justify-center mx-auto' muted loop autoPlay /> */}
                        <p className=' mix-blend-lighten -z-30 text-[26px] sm:text-[36px] -mt-[16px] xl:text-[46px]  font-bold text-center  font-Roboto text-[#D5D5D5]'>No Vacancies Available at this Moment</p>
                    </div>
                </>
            }
            <div className=" top-[100px] left-1/2 -translate-x-1/2 absolute z-10 blue__gradient size-[350px] sm:size-[500px] md:size-[700px] xl:size-[1000px] rounded-full opacity-[0.5] md:opacity-[.3] xl:opacity-[.2]" />
            {/* <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 hidden md:block  opacity-40 -translate-x-1/2 z-0  about-blur-shadow size-[350px] xs:size-[400px] md:size-[530px] lg:size-[600px] xl:size-[800px]  2xl:size-[1000px]"></div> */}
        </div>
    </Layout>;
}

export default Positions;

