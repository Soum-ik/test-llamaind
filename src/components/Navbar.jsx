import { Menu, X } from 'lucide-react';
import brandLogo from '../../public/images/brandLogo.png';
import Layout from "./layout/Layout";
import { useEffect, useState } from 'react';
import useWindowSize from '../Hooks/UseGetScreenSize';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;


    const window = useWindowSize();


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset overflow when the component unmounts or when isOpen changes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className='w-full h-auto'>
            <Layout>
                <div className=' mx-auto z-[20000] fixed left-0 top-0 right-0 w-full backdrop-blur-2xl '>
                    <div className="z-[20000000] max-w-[1720px] mx-auto px-3  py-5 flex items-center justify-between">
                        <a href={'/'} className=' z-[2000000]'>
                            <img src={brandLogo} alt="brand logo z-[230000000]" />
                        </a>

                        <p className=' text-white'>{window.width}</p>
                        <div className="hidden lg:flex items-center z-[20000] font-Roboto gap-[20px] !text-white">
                            <a className={`text-gradient leading-[23.44px] ${pathname === '/about' ? 'text-[#6CB1FF]' : 'text-white'}`} href={'/about'}>About Us</a>
                            <a className={`text-gradient leading-[23.44px] ${pathname === '/career' ? 'text-[#6CB1FF]' : 'text-white'}`} href={'/career'}>Careers</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className=' lg:hidden  z-[1000000] text-white'>
                            {isOpen ? <X /> : <Menu />}
                        </div>
                    </div>
                    {
                        isOpen && <div className='lg:hidden z-40 pt-[10px]  top-3 nav-box min-h-[1000px] w-full -mt-[100px] background-color'>
                            <div className=' pt-[100px] flex  flex-col items-start text-left px-[20px] w-full mt-[10px]'>
                                <button className=' text-[22px] w-full py-[20px] text-left flex items-start justify-start border-drop main-sub-heading'><a className={` ${pathname === '/about' ? 'text-[#6CB1FF]' : 'text-white'}`} href={'/about'}>About Us</a></button>
                                <button className=' text-[22px] w-full py-[20px] text-left flex items-start justify-start border-drop main-sub-heading'> <a className={` ${pathname === '/career' ? 'text-[#6CB1FF]' : 'text-white'}`} href={'/career'}>Careers</a></button>
                                <button className=' text-[22px] w-full py-[20px] text-left flex items-start justify-start border-drop main-sub-heading'> <a className={` ${pathname === '/contact' ? 'text-[#6CB1FF]' : 'text-white'}`} href={'/contact'}>Contact</a></button>
                            </div>
                        </div>
                    }
                </div>
            </Layout>
        </div>
    );
}

export default Navbar;


