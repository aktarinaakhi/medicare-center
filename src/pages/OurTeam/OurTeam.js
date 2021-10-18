import React from 'react';
import template from '../../images/template.png'
import signature from '../../images/signature.png'
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className="our-team py-5 container my-5">
            <div>
                <img className="template" src={template} alt="" />
            </div>
            <div>
                <h3>Dr. Stephanie Wosniack</h3>
                <hr className="w-25" />
                <h1 className="team-title">OUR <span>TEAM</span> </h1>
                <h6>Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.</h6>
                <div><img className="signature" src={signature} alt="" /></div>
            </div>

        </div>
    );
};

export default OurTeam;