import { useState, useEffect } from 'react';
import { Grid, Typography, Box, Button, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './privacy.css'; // Ensure you apply the custom styles

export default function VideoDownload() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const [countdown, setCountdown] = useState(5); 
  const VALID_SECRET = '1:Qwes33876'; 
  const location = useLocation();
  const { id } = useParams();
  const secret = location.state?.secretCode;

  
  useEffect(() => {
    if (!secret || secret !== VALID_SECRET) {
      navigate(`/${id}`);
    }
  }, [secret, navigate, id]);

  const handleDownloadClick = () => {
    setLoading(true); // Show loading indicator
    let timer = countdown;

    const interval = setInterval(() => {
      if (timer > 0) {
        setCountdown(timer - 1); // Decrease countdown
        timer--;
      } else {
        clearInterval(interval);
        const link = document.createElement('a');
        link.href = "https://your-storage.com/videos/myvideo.mp4";
        link.download = "myvideo.mp4";
        link.click();  
        setLoading(false); 
        setCountdown(3); 
      }
    }, 1000);  // Update countdown every second
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          backgroundColor: '#1e1e1e',
          borderRadius: '15px',
          boxShadow: 10,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '30px',
          }}
        >
          🎬 Download Your Video
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#ddd',
            marginBottom: '30px',
            fontSize: '18px',
            fontWeight: '500',
          }}
        >
          Click below to start the download. A cool 3-second countdown will begin, and your video will be ready to save.
        </Typography>

        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadClick}
            disabled={loading}
            sx={{
              position: 'relative',
              padding: '20px 40px',
              fontSize: '16px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: '#ff5722',
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)',
              },
              '&:disabled': {
                backgroundColor: '#aaa',
                cursor: 'not-allowed',
              },
            }}
          >
            {loading ? (
              <>
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                    color: '#fff',
                  }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  {countdown}s
                </Typography>
              </>
            ) : (
              'Download Video'
            )}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
