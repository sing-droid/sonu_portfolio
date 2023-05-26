import "./WorkCardStyle.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";



const  Work = () => {
    return (
<div className="work-container">
    <h1 className="project-heading">
        Projects 
    </h1>
    <div className="project-container">
        {WorkCardData.map((val, indx) =>{
            return(
                <WorkCard 
                key = {indx}
                pic = {val.pic}
                title = {val.title}
                text = {val.text}
                view = {val.view}
                source = {val.source}
                 /> 
            )
        })}
    </div>
</div>
    );
}

export default Work;