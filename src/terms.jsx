import { Container, Typography, Paper } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms and Conditions
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to WebX. By accessing and using our website, you agree to the following terms and conditions. 
          The content provided on this site is for informational purposes only. We do not guarantee the accuracy 
          or completeness of the information. You are solely responsible for any actions you take based on the 
          information provided on WebX.
        </Typography>

        <Typography variant="body1" paragraph>
          You may not copy, distribute, or modify any of the content from WebX without our explicit permission. 
          All content is protected by copyright laws. WebX is not liable for any errors, omissions, or damages 
          that result from using this website. By using WebX, you agree to use the website at your own risk.
        </Typography>

        <Typography variant="body1" paragraph>
          This website uses cookies to improve the user experience. We also display Google AdSense ads which 
          may use cookies for personalized ads. You can control your cookie preferences through your browser settings.
        </Typography>

        <Typography variant="body1" paragraph>
          We reserve the right to modify or update these Terms and Conditions at any time without notice. 
          Your continued use of WebX constitutes acceptance of the updated terms.
        </Typography>

        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          If you have any questions, feel free to contact us at support@webx.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;
