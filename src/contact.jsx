import { Grid, Typography, TextField, Button, Box } from '@mui/material';

export default function ContactUs() {
  return (
    <Grid container spacing={2} sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
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
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
            Send Message
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body2" sx={{ color: '#555' }}>
          Alternatively, you can reach us via email at: <strong>support@webx.com</strong>
        </Typography>
      </Grid>
    </Grid>
  );
}
