import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xk5334j',
      'template_jy5tlwe',
      form.current,
      'dZRMQu3JKyAybIWID'
    ).then((result) => {
      alert("Message sent successfully!");
      console.log(result.text);
      form.current.reset();
    }, (error) => {
      console.error(error);
      alert("Failed to send message.");
    });
  };

  return (
    <Grid container spacing={2} 
    sx={{ 
      marginTop: '20px',
      marginBottom: '20px',
      padding: '20px', 
      backgroundColor: '#f9f9f9',
      width: {
        xs: '98vw', 
        sm: '80vw', 
        md: '70vw', 
        lg: '60vw', 
        xl: '50vw'
      },
      left: {
        xs: '1vw', 
        sm: '10vw', 
        md: '15vw', 
        lg: '20vw', 
        xl: '25vw'
      },
      position: 'relative',
      }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#000' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          We would love to hear from you! Whether you have a question, feedback, or any concerns, feel free to reach out to us. 
          We are here to assist you in any way we can.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <TextField label="Your Name" variant="outlined" name="name" fullWidth required />
          <TextField label="Your Email" variant="outlined" name="email" fullWidth required />
          <TextField
            label="Your Message"
            variant="outlined"
            name="message"
            fullWidth
            multiline
            required
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
            Send Message
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: '#555' }}>
          Alternatively, you can reach us via email at:
          <Typography
            variant="body2"
            sx={{
              color: '#555',
              userSelect: 'text',
              cursor: 'text',
              bgcolor: 'yellow',
              fontWeight: 'bold',
              padding: '2px',
              display: 'inline-block',
              marginLeft: '6px',
            }}
          >
            webxbydibya@gmail.com
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}
