import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button, Typography, Container, Box, CssBaseline} from '@mui/material';
import DonationFormModal from './DonationFormModal';
import FollowSocials from './FollowSocials';
import Navbar from './LandingPage/Navbar'


function DonationForm() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleStripeRedirect = () => {
        navigate('/stripe'); // Redirects to the Stripe Checkout page
    };

    return (  
        <div>
            <Navbar></Navbar>
        <Container component="main">
            
            <CssBaseline />
        <Container sx={{ padding: 0, marginTop: 20 }}>
        
            <Box sx={{ marginLeft: 0, marginTop: 8, display: 'flex', flexDirection: 'row', gap: 2}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '45%', gap: 2}}>
                    <Typography component="h1" variant="h4" sx={{ fontFamily: 'Playfair Display, sans-serif',fontWeight: '700', color: '#2f52a1' }}>
                        Change a youth's life. Make a donation today.
                    </Typography>
                    <Typography sx={{fontFamily: 'Inter, sans-serif',textAlign: 'justify'}}>
                    Donations are the lifeblood of our mission, fueling opportunities and support systems for youth worldwide. Your generosity enables us to provide essential resources, mentorship programs, and educational initiatives, empowering young people to reach their full potential. With your contributions, we can break barriers, uplift communities, and create a brighter future for generations to come.                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
                        <Button
                            onClick={handleStripeRedirect} // Redirects to Stripe Checkout
                            variant="contained"
                            size="large"
                            sx={{ fontFamily: 'Inter, sans-serif',borderRadius: '15px', backgroundColor: '#2f52a1', color: '#fff', width: '60%' }}
                        >
                            Donate Funds
                        </Button>
                        <Button
                            onClick={handleOpenModal} // Open the modal on button click
                            variant="contained"
                            size="large"
                            sx={{ fontFamily: 'Inter, sans-serif', borderRadius: '15px', backgroundColor: '#2f52a1', color: '#fff', width: '60%' }}
                        >
                            Donate an Offering
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', margin: 'auto', paddingTop: 4 }}>
                    <img src="https://princensammyfoundation.com/wp-content/uploads/2021/12/the-many-faces-of-poverty.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            </Box>

            {showModal && <DonationFormModal onClose={handleCloseModal} />}
            <FollowSocials />
        </Container>
        </Container>
        </div>
    );
}

export default DonationForm;
