import { Menu, X } from 'lucide-react';
import brandLogo from '../../public/images/brandLogo.png';
import Layout from "./layout/Layout";
import { useEffect, useState } from 'react';
import useWindowSize from '../Hooks/UseGetScreenSize';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                <div className=' mx-auto z-[20000] fixed left-0 top-0 right-0 w-full backdrop-blur-2xl'>
                    <div className="z-[20000] max-w-[1720px] mx-auto px-3  py-5 flex items-center justify-between">
                        <a href={'/'}>
                            <img src={brandLogo} alt="brand logo z-[20000]" />
                        </a>

                        {/* <p className=' text-white'>{window.width}</p> */}
                        <div className="hidden lg:flex items-center z-[20000] font-Roboto gap-[20px] !text-white">
                            <a className="text-gradient" href={'/about'}>About Us</a>
                            <a className='text-gradient' href={'/career'}>Careers</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className=' lg:hidden  text-white'>
                            {isOpen ? <X /> : <Menu />}
                        </div>
                    </div>
                    {
                        isOpen && <div className='lg:hidden z-50 pt-[10px]  top-3 nav-bo min-h-[1000px] w-full mt-[50px]   absolute background-color'>
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


