import "./PricingCardStyles.css";
import { Link } from "react-router-dom";

const PricingCard = () => {
    return (
<div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3> - basic -</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p> - 3 days -</p>
            <p> - 3 pages -</p>
            <p> - featured -</p>
            <p> - responsive design -</p>
            <Link to ="/Contact" className="btn">
                Purchase Now
            </Link>
        </div>
        <div className="card">
            <h3> - Premium -</h3>
            <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p> - 2 days -</p>
            <p> - 4 pages -</p>
            <p> - featured -</p>
            <p> - responsive design -</p>
            <Link to ="/Contact" className="btn">
                Purchase Now
            </Link>
        </div>
        <div className="card">
            <h3> - Business -</h3>
            <span className="bar"></span>
            <p className="btc">$ 400</p>
            <p> - 5 days -</p>
            <p> - 5 pages -</p>
            <p> - featured -</p>
            <p> - responsive design -</p>
            <Link to ="/Contact" className="btn">
                Purchase Now
            </Link>
        </div>
    </div>
    
</div>
    );
}

export default PricingCard;
