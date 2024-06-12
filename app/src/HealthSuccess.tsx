
import React from "react";

import "./HealthSuccessPage.css";
 
function SuccessPage () {
    return <div>
        <div className="main-content">
            <img src="../Images/BlueTick.png" alt="Image of a tick"></img>
            <h2>Thank you for Letting us know!</h2>
            <p>We've received your request! We will send you the help right away!</p>
            <button type="submit" onClick={()=>{window.location.href='/'}}>Back to Home</button>
        </div>
        
    </div>
}
 
export default SuccessPage;