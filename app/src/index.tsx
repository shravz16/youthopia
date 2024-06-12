import React from 'react';
import { Link } from 'react-router-dom';
import FollowSocials from './FollowSocial';
import './activitieslanding.css'
import Navbar from './LandingPage/Navbar';

/**
 * MainPage component for the main landing page.
 */
const MainPage: React.FC = () => {
  return (
    <section>
       <Navbar />
      {/* Main section */}
      <section className="main">
        <div className="content-container">
          {/* Header */}
          <div className="header">
            <div className="title">
              Let's explore our <br /> Camps and Activities
            </div>
          </div>
          {/* Body */}
          <div className="body">
            <div className="desc">
              <ul>
                <li>
                  Explore all the Camps & Activities. Get to know what's happening around you. Register, Involve, Make a change. Be the part of our team.
                </li>
              </ul>
            </div>
            {/* Action buttons */}
            <div className="action">
              <div className="btn">
                <Link to="/camps" className="nav-item" id="camps-link">
                  CAMPS
                </Link>
              </div>
              <div className="btn">
                <Link to="/activity" className="nav-item" id="activity-link">
                  ACTIVITY
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Image container */}
        <div className="image-container">
          <div className="image-stack">
            {/* Camps images */}
            <img src='../Images/hiking.jpeg'></img>
            {/* Activity images */}

          </div>
        </div>
      </section>
      {/* FollowSocials component */}
      <FollowSocials />
    </section>
  );
};

export default MainPage;
