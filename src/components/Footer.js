import "./FooterStyle.css"
import React from "react"
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left-Footer">
                    <div className="location">
                        <FaHome size={20} style={{ color:"#fff", marginRight:"2rem"
                        }} />
                        <div>
                            <p>209/1, New Ashok Nagar Delhi</p>
                            <p>State : New Delhi, 110096</p>
                        </div>
                    </div>
                    <div className="phone">
                   <h4>
                   <FaPhone size={20} style={{ color:"#fff", marginRight:"2rem"
                        }} />
                        9773-6084-95
                   </h4>
                    </div>
                    <div className="email">
                   <h4>
                   <FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem"
                        }} />
                        sonusingh82342@gmail.com
                   </h4>
                    </div>
                </div>
                <div className="right-footer"></div>

            </div>
        </div>
    );
}

export default Footer;