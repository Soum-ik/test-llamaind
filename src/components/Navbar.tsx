import { Menu, X } from 'lucide-react';
import brandLogo from '../../public/images/brandLogo.png'
import Layout from "./layout/Layout";
import { useState } from 'react';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=' w-full  h-auto'>
            <Layout>
                <div className=' mx-auto  fixed left-0 top-0 right-0 w-full z-50 backdrop-blur-2xl'>
                    <div className="z-[20000px] max-w-[1720px] mx-auto px-3 py-4 flex items-center justify-between">
                        <a href={'/'}>
                            <img src={brandLogo} alt="brand logo z-[20000px]" />
                        </a>
                        <div className="hidden lg:flex items-center z-[20000px] font-Roboto gap-12 !text-white">
                            <a className="text-gradient" href={'/about'}>About Us</a>
                            <a className='text-gradient' href={'/career'}>Careers</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className=' lg:hidden  text-white'>
                            {isOpen ? <X /> : <Menu />}
                        </div>
                    </div>
                    {
                        isOpen && <div className='lg:hidden z-50 pt-[10px]  top-3 nav-bo min-h-[852px] w-full mt-[50px]   absolute background-color'>
                            <div className='  mt-[10px]'>
                                <h1 className='main-sub-heading'><a href={'/about'}>About Us</a></h1>
                                <h1 className='main-sub-heading'><a href={'/career'}>Careers</a></h1>
                                <h1 className='main-sub-heading'><a href={'/contact'}>Contact</a></h1>
                            </div>
                        </div>
                    }
                </div>
            </Layout>
        </div>
    );
}

export default Navbar;


