import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import brandLogo from '../../public/images/brandLogo.png'
import Layout from "./layout/Layout";


function Navbar() {
    return (
        <div className=' w-full h-auto'>
            <Layout>
                <div className=' mx-auto max-w-[1720px] fixed left-0 top-0 right-0 w-full z-50 backdrop-blur-2xl'>
                    <div className="z-[20000px]  p-3 flex items-center justify-between">
                        <div>
                            <img src={brandLogo} alt="brand logo z-[20000px]" />
                        </div>
                        <div className="hidden md:flex items-center z-[20000px] font-Roboto gap-12 !text-white">
                            <Link className="text-gradient" to={'/about'}>About Us</Link>
                            <Link className='text-gradient' to={'/career'}>Careers</Link>
                        </div>
                        <div className=' md:hidden  text-white'>
                            <Menu />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Navbar;


