import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import Layout from "./layout/Layout";

import brandLogo from '../../public/images/brandLogo.png'

function Navbar() {
    return <Layout>
        <div className=" p-3 flex items-center justify-between">
            <div>
                <img src={brandLogo} alt="brand logo" />
            </div>
            <div className="hidden md:flex items-center font-Roboto gap-5 !text-white">
                <Link className=' ' to={'/about-us'}>About Us</Link>
                <Link className=' ' to={'/career'}>Careers</Link>

            </div>
            <div className=' md:hidden  text-white'>
                <Menu />
            </div>
        </div>
    </Layout>;
}

export default Navbar;


