import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import img1 from "../Assets/project-img.jpeg";
import img2 from "../Assets/new-img3.avif"


const AboutContent = () => {
    return (
<div className="about">
    <div className="left">
        <h1>Who am I ?.</h1>
        <p>Hello there! I'm Sonu Singh, a passionate frontend developer ready to make a mark in the world of web development. With a solid foundation in HTML, CSS, JavaScript and ReactJS, I have a strong desire to create captivating and user-friendly web experiences. My journey as a frontend developer is driven by my curiosity and eagerness to explore the latest technologies and industry best practices. I am constantly expanding my skills and staying up-to-date to ensure I can deliver the most cutting-edge solutions.
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