import React from 'react';
import '../styles/FollowSocials.css';

const FollowSocials = () => {
  return <div className="social-handles">

    <div id='content'>
      <h4>Youthopia</h4>
      <p>Youthopia allows youngsters to grow technically</p>
    </div>
    

    <div id="links">
        <a href="https://linkedin.com" class="social-handles" id="linkedin-logo"><img src="../Images/linkedin-logo.png" width="25 px"></img></a>
        <a href="https://x.com" class="social-handles" id="twitter-logo"><img src="../Images/twitter-logo.png" width="25 px"></img></a>
        <a href="https://facebook.com" class="social-handles" id="meta-logo"><img src="../Images/meta-logo.jpeg" width="25 px"></img></a>
    </div>

    <p>Copyright @ 2024</p>
  </div>
  
};

export default FollowSocials;
