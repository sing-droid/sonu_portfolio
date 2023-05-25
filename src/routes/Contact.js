import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";

const Contact = ()=> {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="Contact me." text="My contact details."/>
            <Footer />
        </div>
    );
}

export default Contact;