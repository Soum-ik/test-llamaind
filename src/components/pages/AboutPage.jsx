import Navbar from '../Navbar';
import Details from '../AboutPageComponent/Details';
import Footer from '../Foooter';
import Button from '../ui/Button';
import OpenPosition from '../OpenPosition';


export default function AboutPage() {
    return (
        <div className=" bg-black text-white -z-10 min-h-screen">
            <Navbar />
            <Details />
            <OpenPosition />
            <Footer />
        </div>
    );
}