import Layout from "./layout/Layout";
import Button from "./ui/Button";

function OpenPosition() {
    return (
        <div className=" mt-[150px] mx-auto relative z-40  pt-[60px] pb-[220px] xl:py-[200px]">
            <Layout>
                <div id="Position" className=" hidden xl:flex  absolute  left-1/2 transform -translate-y-1/2 -translate-x-1/2  z-40  pt-[140px]  text-white flex-col  items-center justify-center">
                    <h1 className="z-40 font-bold text-[68px]">Join Our Journey </h1>
                    <p className="z-40  wat text-textColor text-center font-Roboto my-4 text-2xl">Be part of an innovative journey where your ideas matter, and your growth is our priority. Together, let's pioneer the future.</p>
                    <Button text={"View Open positions"} />
                </div>


                <div id="Position" className=" xl:hidden max-w-[355px] sm:max-w-[500px] md:min-w-[800px] absolute  left-1/2 transform -translate-y-1/2 -translate-x-1/2  z-40  pt-[140px]  w-full text-white ">
                    <div className=" ">
                        <h1 className="z-40 font-extrabold leading-10 text-[34px] sm:text-[46px]  lg:text-[50px] text-center">Join Our Journey </h1>
                        <p className="z-40 max-w-5xl md:max-w-3xl mx-auto text-textColor text-center font-Roboto my-4 leading-[36px] text-[22px] md:text-2xl font-light">Be part of an innovative journey where your ideas matter, and your growth is our priority. Together, let's pioneer the future.</p>
                        <button className="project-btn xl:hidden max-w-[350px] mt-2 md:w-full left-1/2 -translate-x-1/2 w-full mx-auto absolute -bottom-10">View Open Positions</button>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default OpenPosition;
