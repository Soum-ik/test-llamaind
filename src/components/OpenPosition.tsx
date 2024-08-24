import Layout from "./layout/Layout";
import Button from "./ui/Button";

function OpenPosition() {
    return (
        <div className=" mb-[150px] mx-auto relative z-40 py-[200px]">
            <Layout>
                <div id="Position" className=" max-w-[355px] absolute  left-1/2 transform -translate-y-1/2 -translate-x-1/2  z-40  pt-[140px]  w-full text-white ">
                    <div className=" ">
                        <h1 className="z-40 font-extrabold leading-10 text-[34px] md:text-7xl ">Join Our Journey </h1>
                        <p className="z-40 max-w-5xl text-textColor text-center font-Roboto my-4 leading-[36px] text-[22px] md:text-2xl font-light">Be part of an innovative journey where your ideas matter, and your growth is our priority. Together, let's pioneer the future.</p>
                    </div>
                </div>
                <button className="project-btn max-w-[350px] w-full absolute -bottom-10">View Open Positions</button>
            </Layout>
        </div>
    );
}

export default OpenPosition;
