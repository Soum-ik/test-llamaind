import Navbar from "../Navbar";
import Footer from "../Foooter";
import Contact from "../ContactPageComponent/ContactPage";

function ContactPage() {
    return <div className=" min-h-screen bg-black">
        <Navbar />
        <Contact />
        <Footer />
    </div>;
}

export default ContactPage;
