import { CssBaseline } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

// import theme from './theme';

export default function Header() {
    const [currenttime, setCurrenttime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrenttime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    const formatDate = currenttime.toLocaleDateString();
    const formatTime = currenttime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <>  
        <Box 
        sx={{ 
            flexGrow: 1,
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            padding: '20px 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
            }}>  
            <CssBaseline />
            <div className="header_1" >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', textAlign: 'center', paddingTop: '5px' }}>
                       <span> Welcome to <b>web<Box sx={{color: 'red', fontSize: '30px', padding: '0 5px', display:'inline-block' }}> X </Box></b></span>
                    </Typography>
                    <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ flexGrow: 1, color: 'gray', textAlign: 'center', paddingTop: '5px' }}>
                        <span> {formatDate} {formatTime} </span>
                    </Typography>    
                </Box>
            </div>
        </Box>    
        </>
    )
}
