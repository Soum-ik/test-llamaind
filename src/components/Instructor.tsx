import { MoveRight } from 'lucide-react';
import Layout from "./layout/Layout";
import arrow from '../../public/images/textSpin.png'
import { MoveDownRight } from 'lucide-react';


function Instructor() {
    return <Layout>
        <div className=' !text-white flex items-center instructor-fixer justify-between'>
            <div className=' font-Roboto rotate-90 flex items-center gap-5'>
                Scroll down <MoveRight />
            </div>
            <div className=' group m-2 p-4 rounded-full relative bg-gradient-to-b duration-500 to-[#06FFDF] from-[#3534C0] backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                <img className=' group-hover:animate-none animate-spin-slow duration-500' src={arrow} alt="" />
                <MoveDownRight className='  absolute left-1/2 top-1/2 size-10 group-hover:rotate-45 duration-500  -translate-x-1/2 -translate-y-1/2 transform' />
            </div>
        </div>
    </Layout>
}

export default Instructor;
