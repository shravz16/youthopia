import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
 
function HealthForm({ onClose }) {
    const [formValues, setFormValues] = useState({
        
        health_Issue: '', 
        days: '',
        youth: JSON.parse(sessionStorage.getItem('user'))
       
    });
    const navigate = useNavigate();
 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };
 
    const handleSubmit = async (event) => {
        const req={
            id:"random1",
            action:"health",
            data:{health:formValues}
        }
        event.preventDefault();
        try {
            const response = await fetch('http://3.22.180.190:3000/healthmodel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result.message);
                navigate('/health-success');
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
                    Fill in The details
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
                        name="health_Issue"
                        label="How is your health??"
                        value={formValues.health_Issue}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="days"
                        label="How many months long are your suffering?"
                        type="number"
                        value={formValues.days}
                        onChange={handleChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    
                  
                    <Button
                        type="submit"
                        variant="contained"    
                        fullWidth
                        sx={{ borderRadius: '15px', backgroundColor: '#2f52a1', color: '#fff', width: '75%', m:5 }}>
                        Submit Issue
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}
 
export default HealthForm;