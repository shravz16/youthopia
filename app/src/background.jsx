import React from 'react';
import { Box } from '@mui/material';

function ImageDisplay() {
    return (
        <Box sx={{ width: '45%', margin: 'auto', paddingTop: 4 }}>
            <img src="https://princensammyfoundation.com/wp-content/uploads/2021/12/the-many-faces-of-poverty.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
    );
}

export default ImageDisplay;