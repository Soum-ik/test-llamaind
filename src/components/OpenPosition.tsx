import Layout from "./layout/Layout";
import Button from "./ui/Button";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function OpenPosition() {

    useGSAP(() => {
        gsap.to('#Position', {
            y: 0,
        })
    });
    return (
        <div className=" z-40">
            <Layout>
                <div id="Position" className=" z-40  mt-[140px]  text-white flex-col flex items-center justify-center">
                    <h1 className="z-40 font-bold text-7xl">Join Our Journey </h1>
                    <p className="z-40 max-w-5xl text-textColor text-center font-Roboto my-4 text-2xl">Be part of an innovative journey where your ideas matter, and your growth is our priority. Together, let's pioneer the future.</p>
                    <Button text={"View Open positions"} />
                </div>
            </Layout>
        </div>
    );
}

export default OpenPosition;
