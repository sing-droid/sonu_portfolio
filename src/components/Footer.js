import "./FooterStyle.css"
import React from "react"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";


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
                        9773608495
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
                <div className="right-footer">
                    <h4>About me</h4>
                    <p>
                    An enthusiastic fresher who is capable to use technical skills for the betterment of the organization. 
                    Objective to work with an organization where i can learn new skills and increase my abilities for the organizational goals as well as my own.
                    </p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color:"#fff", marginRight:"1rem"
                        }} />
                         <FaTwitter size={30} style={{ color:"#fff", marginRight:"1rem"
                        }} />
                         <FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem"
                        }} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;