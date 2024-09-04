import { Dot } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Layout from "../layout/Layout";
function JobList({ positions }) {
    function pathFixer(name) {
        return name.split(' ').join('-');
    }

    return (
        <div className='   flex flex-col mb-20'>
            {
                positions.map((position) => (
                    <a key={position.id} href={`/career/job-details/${pathFixer(position.positionName)}`}>
                        <div className="flex text-white group  transition-all duration-700 cursor-pointer py-[40px] items-center justify-between border-spacing-5 border-b-2 border-[#5D5CE8] border-opacity-[20%] ">
                            <div className="flex z-40 flex-col flex-grow ">
                                <h1 className="text-[34px] leading-[40px] sm:text-[43px] md:text-[50] xl:leading-[85.27px] xl:text-[68px] group-hover:text-carries duration-700 font-Orbitron font-extrabold">{position.positionName}</h1>
                                <p className="font-Roboto  group-hover:text-carries duration-500 text-[16px] leading-[20px] md:text-[22px] md:leading-[33px] xl:text-[26px] xl:leading-[40px] flex items-center font-light gap-2">{position.type}<Dot size={40} className=' text-white  group-hover:text-[#5D5CE8]' />{position.location}</p>
                            </div>
                            <ArrowUpRight className='size-[32px] group-hover:size-[80px] duration-700 group-hover:text-[#5D5CE8]' />
                        </div>
                    </a>
                ))
            }
        </div>
    );

}

export default JobList;