import Layout from "./layout/Layout";
import Logo from '../../public/images/footerLogo.png';
import Footerbg from '../../public/images/footerBg.png'

function Footer() {
    return (
        <div className="relative">
            <Layout>
                <div className="mt-16 p-3 flex items-center justify-between">
                    <div>
                        <img src={Logo} alt="brand logo" />
                    </div>
                    <div className="text-lg font-Roboto gap-6 text-white">
                        <p>All rights reserved @llamamind 2024</p>
                    </div>
                </div>
            </Layout>
            <img className="mx-auto w-full absolute left-1/2 bottom-0 transform -translate-x-1/2" src={Footerbg} alt="Footer Background" />
        </div>
    );
}


export default Footer;
