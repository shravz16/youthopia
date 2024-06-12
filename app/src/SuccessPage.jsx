import React from "react";
import FollowSocials from './FollowSocials';
import "../styles/SuccessPage.css";

function SuccessPage () {
    return <div>
        <div className="main-content">
            <img src="../Images/BlueTick.png" alt="Image of a tick"></img>
            <h2>Thank you for your Offering!</h2>
            <p>We've received your donation request! We will verify the request from our end and your offering will be collected at your doorstep very soon!</p>
            <button type="submit" onClick={()=>{window.location.href='/'}}>Back to Home</button>
        </div>
        <FollowSocials />
    </div> 
}

export default SuccessPage;