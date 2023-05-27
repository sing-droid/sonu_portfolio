import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";
import PricingCard from "../components/PricingCard";


const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="About me." text="I am a front-end developer. 
            i can create responsive website for any client's."/>
            <AboutContent />
            <PricingCard />
            <Footer />

        </div>
    );
}
export default About;