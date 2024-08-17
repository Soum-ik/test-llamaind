import { MoveRight } from 'lucide-react';
import Layout from "./layout/Layout";
import arrow from '../../public/images/textSpin.png'
import { MoveDownRight } from 'lucide-react';


function Instructor() {
    return <Layout>
        <div className='   !text-white flex items-center instructor-fixer justify-between'>
            <div className=' z-10 font-Roboto rotate-90 flex items-center gap-5'>
                Scroll down <MoveRight />
            </div>
            <div className='z-10 group m-2 p-4 rounded-full relative transition-colors  duration-500 bg-gradient-to-b from-[#5D5CE8] to-[#6CB1FF]  hover:to-[#06FFDF] hover:from-[#3534C0] backdrop-blur-xl shadow-[#5c5ca0] shadow-md'>
                <img className=' group-hover:animate-none animate-spin-slow transition-colors duration-500' src={arrow} alt="" />
                <MoveDownRight className='  absolute left-1/2 top-1/2 size-10 group-hover:rotate-45 duration-500   -translate-x-1/2 -translate-y-1/2 transform' />
            </div>
        </div>
    </Layout>
}

export default Instructor;
