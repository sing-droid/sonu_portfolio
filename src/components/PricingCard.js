import "./PricingCardStyles.css";
// import { Link } from "react-router-dom";
import projectimg from "../Assets/diploma-img.jpeg"
import projectimg1 from "../Assets/10th.jpeg"

const PricingCard = () => {
    return (
<div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3> - Diploma -</h3>
            {/* <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p> - 3 days -</p>
            <p> - 3 pages -</p>
            <p> - featured -</p>
            <p> - responsive design -</p>
            <Link to ="/Contact" className="btn">
                Purchase Now
            </Link> */}
            {/* <img src={projectimg} alt="" /> */}
            <p>JKP Polytechnic, Sonipat.</p>
            <p>72%</p>
        </div>
        <div className="card">
            <h3> - 12th -</h3>
            {/* <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p> - 2 days -</p>
            <p> - 4 pages -</p>
            <p> - featured -</p>
            <p> - responsive design -</p>
            <Link to ="/Contact" className="btn">
                Purchase Now
            </Link> */}
            <p>TPS College, Chapra (SARAN).</p>
            <p>63%</p>
        </div>
        <div className="card">
            <h3> - 10th -</h3>
            {/* <span className="bar"></span>
            <p className="btc">$ 400</p>
            <p> - 5 days -</p>
            <p> - 5 pages -</p>
            <p> - featured -</p>
            <p> - responsive design -</p>
            <Link to ="/Contact" className="btn">
                Purchase Now
            </Link> */}
            {/* <img src={projectimg1} alt="image" /> */}

            <p>High School, Rashulpur SARAN.</p>
            <p>58%</p>
        </div>
    </div>
    
</div>
    );
}

export default PricingCard;
