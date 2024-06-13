import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DonationFormModal({ onClose }) {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        donationType: '',
        quantity: '',
        address: '',
        pin: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://3.22.180.190:3000/donations/offerings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result.message);
                navigate('/success');
            } else {
                const errorResult = await response.json();
                console.error('Failed to submit donation:', errorResult.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        outline: 'none'
    };

    return (
        <Modal open={true} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Fill in your details
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        label="Name"
                        value={formValues.name}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={formValues.email}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="donationType"
                        label="What are you donating?"
                        value={formValues.donationType}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="quantity"
                        label="Quantity"
                        type="number"
                        value={formValues.quantity}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="address"
                        label="Address"
                        value={formValues.address}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="pin"
                        label="PIN code"
                        value={formValues.pin}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Button 
                        type="submit" 
                        variant="contained"    
                        fullWidth
                        sx={{ borderRadius: '15px', backgroundColor: '#2f52a1', color: '#fff', width: '75%', m:5 }}>
                        Submit Donation
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}

export default DonationFormModal;
