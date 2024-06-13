import React, { useState, useEffect } from 'react';
import "./Activity.css";
import "./Modal.css";
import { Link } from 'react-router-dom';
import Navbar from './LandingPage/Navbar';

/**
 * Activity component displaying a list of activities and a modal for registration.
 */
const Activity: React.FC = () => {
    const [activities, setActivities] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventName, setEventName] = useState('');

    /**
     * Fetches activities from the server when the component mounts.
     */
    useEffect(() => {
        fetchActivities();
    }, []);

    /**
     * Fetch activities data from the server.
     */
    const fetchActivities = async () => {
        try {
            const response = await fetch('http://3.22.180.190:3000/activitymodels'); 
            const data = await response.json();
            
            setActivities(data.data);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };

    const [abhi, setAbhi] = useState({title:"",id:-1});
    const [arr,setArray]=useState([]);

    /**
     * Handles opening the modal and sets the event name for registration.
     * @param event - The click event.
     * @param name - The name of the event.
     */
    const handleModalOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => {
        event.preventDefault();
        setIsModalOpen(true);
        setEventName(name);
    };

    /**
     * Handles closing the modal.
     */
    const handleModalClose = () => {
        setIsModalOpen(false);
        setEventName('');
    };

    /**
     * Handles form submission for event registration.
     * @param event - The form submission event.
     */
    const handleFormSubmit = (abhi) => {
        console.log(abhi)
        arr.push(abhi.id)
        setArray(arr)
        console.log(arr.includes(abhi.id))
    
        
        handleModalClose();
    };

    return (
        <div><Navbar />
        <section className="events">
           
            <div className="header">
                <div className="main-title">
                    Let's Explore Our Activities
                </div>
                <div className="subtitle">
                    Be the part of all our Activities
                </div>
            </div>

            {/* Create Activity Button */}
            <div className='full-page'>
                <div className="action-container">
                    <div className="btn btn-action">
                        <Link className="action-link" to="/CreateActivity">
                            Create Activity
                        </Link>
                    </div>
                </div>

                {/* Activity Cards */}
                <div className="cards-container">
                    {activities.map((activity, i) => (
                        <div className="activity-card" onClickCapture={()=>{setAbhi({title:activity.title,id:i})}} id={activity.id} key={activity.id} onClick={(e) => handleModalOpen(e, activity.name)}>
                            <div className="card-image">
                                <img src={ "https://source.unsplash.com/random/200x200?sig=" + i} alt="" />
                            </div>
                            <div className="card-content">
                                <h5 className="card-title">{activity.title}</h5>
                                <p className="card-description">{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div>
                    <div className="blur-background"></div>
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleModalClose}>&times;</span>
                            <h2>Register for {abhi.title}</h2>
                            <form onSubmit={()=>handleFormSubmit(abhi)}>
                                <label htmlFor="name">Name:</label> <br />
                                <input type="text" id="name" name="name" placeholder="Enter your name" required /><br /><br />
                                <label htmlFor="email">Email:</label> <br />
                                <input type="email" id="email" name="email" placeholder="Enter your Email Id" required /><br /><br />
                                <label htmlFor="number">Phone Number:</label> <br />
                                <input type="tel" id="number" name="number" placeholder="Enter your Phone Number" required /><br /><br />
                                {!arr.includes(abhi.id)?(<button id="submit-btn-activity" type="submit">Register</button>):(<div><p>Already registered! Thank you for registering</p></div>)}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
        </div>
    );
};

export default Activity;
