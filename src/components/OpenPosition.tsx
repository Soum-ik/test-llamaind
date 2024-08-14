import Layout from "./layout/Layout";
import Button from "./ui/Button";
function OpenPosition() {
    return <Layout>
        <div className=" z-50 mb-[300px]  !mt-[400px]  text-white flex-col flex items-center justify-center">
            <h1 className="z-50 font-bold text-7xl">Join Our Journey </h1>
            <p className="z-50 max-w-5xl text-textColor text-center font-Roboto my-4 text-2xl">Be part of an innovative journey where your ideas matter, and your growth is our priority. Together, let's pioneer the future.</p>
            <Button text={"View Open positions"} />
        </div>
    </Layout>;
}

export default OpenPosition;
