import { Dot } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Layout from "../layout/Layout";
import animation from '../../../public/video/no-job-open.mp4';
import { Link } from 'react-router-dom';
function JobList({ positions }) {
    function pathFixer(name) {
        return name.split(' ').join('-');
    }

    return <Layout>
        <div className=' relative flex flex-col mb-20'>
            {
                positions.map((position) => (
                    <Link key={position.id} to={`/career/job-details/${pathFixer(position.positionName)}`}>
                        <div className="text-white group  transition-all duration-700 cursor-pointer flex pb-[40px] items-center justify-between  border-spacing-5 border-b-2 border-[#5D5CE8] border-opacity-[20%] ">
                            <div className="flex z-40 flex-col flex-grow">
                                <h1 className="text-[68px] group-hover:text-carries duration-700 font-Orbitron font-extrabold">{position.positionName}</h1>
                                <p className="font-Roboto  group-hover:text-carries duration-500 text-[26px] flex items-center font-light gap-2">{position.type}<Dot size={40} />{position.location}</p>
                            </div>
                            <ArrowUpRight className=' size-[40px] group-hover:scale-150 duration-700 group-hover:text-[#5D5CE8]' />
                        </div>
                    </Link>
                ))
            }
        </div>
    </Layout>;
}

export default JobList;
