import "./HeroimgStyle.css";
import React from "react";
import IntroImg from "../Assets/new-img2.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
    return (
        
        <div className="hero">
        <div className="mask">
        <img  className="into-img" src= {IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p> Hi, I'M SONU</p>
            <h1>FRONTEND DEVELOPER</h1>
        <div>
            <Link to= "/Project" className="btn">Projects</Link>
            <Link to= "/Contact" className ="btn-light">Contact</Link>
        </div>
        </div>
        </div>
        
    );
}

export default Heroimg;