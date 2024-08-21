import { FastForward, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
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
                        <Link to={'/'}>
                            <img src={brandLogo} alt="brand logo z-[20000px]" />
                        </Link>
                        <div className="hidden md:flex items-center z-[20000px] font-Roboto gap-12 !text-white">
                            <Link className="text-gradient" to={'/about'}>About Us</Link>
                            <Link className='text-gradient' to={'/career'}>Careers</Link>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className=' md:hidden  text-white'>
                            {isOpen ? <X /> : <Menu />}
                        </div>
                    </div>
                    {
                        isOpen && <div className='md:hidden z-50  top-1 nav-bo min-h-[852px] w-full mt-[50px]  absolute background-color'>
                            <h1 className='main-sub-heading'>About Us</h1>
                            <h1 className='main-sub-heading'>Careers</h1>
                            <h1 className='main-sub-heading'>Contact</h1>
                        </div>
                    }
                </div>
            </Layout>
        </div>
    );
}

export default Navbar;


