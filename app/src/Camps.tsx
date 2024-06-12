import React, { useState, useEffect } from 'react';
import "./Camps.css";
import "./Modal.css";
import { Link } from 'react-router-dom';
import Navbar from './LandingPage/Navbar';

/**
 * Camp component for displaying and managing camp information.
 */
const Camp: React.FC = () => {
    // State variables for camps data, modal state, and event name
    const [camp, setCamp] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventName, setEventName] = useState('');
    const [reg,setReg] = useState({
        name:'',
        email:'',
        phone:''
    })
    // Fetch camps data on component mount
    useEffect(() => {
        fetchCamp();
    }, []);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setReg(prev => ({ ...prev, [name]: value }));
    };
    // Function to fetch camps data from the server
    const fetchCamp = async () => {
        try {
            const response = await fetch('http://localhost:3000/campmodels'); 
            const data = await response.json();
            console.log(data)
            setCamp(data.data);
        } catch (error) {
            console.error('Error fetching camps:', error);
        }
    };

    // State variable for storing camp title when modal opens
    const [abhi, setAbhi] = useState({title:"",id:-1});
    const [arr,setArray]=useState([]);
    // Function to handle opening the modal
    const handleModalOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => {
        event.preventDefault();
        setIsModalOpen(true);
        setEventName(name);
    };

    // Function to handle closing the modal
    const handleModalClose = () => {
        setIsModalOpen(false);
        setEventName('');
    };

    // Function to handle form submission
    const handleFormSubmit = (abhi) => {
        console.log(abhi)
        arr.push(abhi.id)
        setArray(arr)
        console.log(arr)
        handleModalClose();
    };

    return (
        <div>
        <Navbar />
        <section className="events">
            
            {/* Header section */}
            <div className="header">
                <div className="main-title">
                    Let's Explore Our Camps
                </div>
                <div className="subtitle">
                    Be the part of all our Camps
                </div>
            </div>

            <div className='full-page'>
                {/* Action container for creating a new camp */}
                <div className="action-container">
                    <div className="btn btn-action">
                        <Link className="action-link" to="/CreateCamp">
                            Create Camp
                        </Link>
                    </div>
                </div>

                {/* Cards container for displaying camp cards */}
                <div className="cards-container">
                    {camp.map((camp, i) => (
                        <div className="activity-card" onClickCapture={()=>{setAbhi({title:camp.title,id:i})}} id={camp.id} key={camp.id} onClick={(e) => handleModalOpen(e, camp.name)}>
                            <div className="card-image">
                                <img src={ "https://source.unsplash.com/random/200x200?sig=" + i} alt="" />
                            </div>
                            <div className="card-content">
                                <h5 className="card-title">{camp.title}</h5>
                                <p className="card-description">{camp.description}</p>
                                
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
                                <input type="text" id="name" name="name" placeholder="Enter your name" onChange={handleChange} required /><br /><br />
                                <label htmlFor="email">Email:</label> <br />
                                <input type="email" id="email" name="email" placeholder="Enter your Email Id" onChange={handleChange} required /><br /><br />
                                <label htmlFor="number">Phone Number:</label> <br />
                                <input type="tel" id="number" name="phone" placeholder="Enter your Phone Number" onChange={handleChange} required /><br /><br />
                                {!arr.includes(abhi.id)?(<button id="submit-btn-activity" type="submit">Register</button>):<div><p>Already registered! Thank you for registering</p></div>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
        </div>
    );
};

export default Camp;
