import "./WorkCardStyle.css"
import pic from "../Assets/new-img.webp"
import { NavLink } from "react-router-dom";

const  WorkCard = (props) => {
    return (
        <div className="project-card">
    <h1 className="project-heading">
        Projects 
    </h1>
    <div className="project-container">
        <div className="project-card">
            <img src={props.pic} alt="image" />
            <h2 className="project-title">
                {props.title}
            </h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">
                        View
                    </NavLink>
                    <NavLink to={props.source} className="btn">
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    
</div>
    );
}

export default WorkCard;