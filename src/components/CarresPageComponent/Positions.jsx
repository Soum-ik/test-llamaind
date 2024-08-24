import Layout from '../layout/Layout';
import JobList from './JobList';
import { useState } from 'react';
// import animation from '../../../public/video/no-job-open.mp4';
import animation from '../../../public/video/no-job-open.mp4';
import { openPositios } from '../libs/staticData';

function Positions() {
    const [availableVacancies, setAvailableVacancies] = useState(true);

    return <Layout>
        <div className='relative md:pt-[100px] pb-[100px] md:pb-[180px]'>

            {availableVacancies ?
                <>
                    <h1 className=" text-[60px] md:text-[250px] w-[700px] text-white font-Orbitron font-bold opacity-5 z-50">Positions</h1>
                    <JobList positions={openPositios} />
                </> : <>
                    <div className=''>
                        <video src={animation} className=' mix-blend-plus-lighter opacity-80  z-30 w-[900px] mt-[140px] h-[280px] md:h-[506px] flex items-center justify-center mx-auto' muted loop autoPlay />
                        <p className=' z-30 text-[26px] md:text-[46px]  font-bold text-center  font-Roboto text-[#D5D5D5]'>No Vacancies Available at this Moment</p>
                    </div>;

                </>
            }
            <div className="absolute  md:-mt-[300px] z-20 bottom-0  left-1/2 transition-transform -translate-x-1/2    blur-[200px] rounded-full size-[450px] md:size-[1000px] opacity-[20%]  bg-[#3534C0]" />
        </div>

    </Layout>;
}

export default Positions;

