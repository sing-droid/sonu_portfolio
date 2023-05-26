import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import img1 from "../Assets/img-4.avif";
import img2 from "../Assets/new-img3.avif"


const AboutContent = () => {
    return (
<div className="about">
    <div className="left">
        <h1>Who am I</h1>
        <p>I am a front-end developer. 
            i can create responsive website for any client's.
            </p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={img1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={img2} className="img" alt="true"/>
            </div>
        </div>
    </div>

</div>
    );
}

export default AboutContent;