import { Grid, Typography, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import './privacy.css';

export default function Privacy() {
  return (
    <Grid container spacing={2} 
      sx={{ 
        padding: '20px', 
        backgroundColor: '#f9f9f9', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        flexDirection: 'column',
      }}>
      
      <Grid item xs={12}>
        <nav className='navbar_setup'>
          <Link component={RouterLink} to="#pri" sx={{ marginLeft: '20px' }}>
            WebX Privacy Policy
          </Link>
          <Link component={RouterLink} to="#ndc" sx={{ marginLeft: '20px' }}>
            Introduction
          </Link>
          <Link component={RouterLink} to="#sac" sx={{ marginLeft: '20px' }}>
            Scope and Consent
          </Link>
          <Link component={RouterLink} to="#dsa" sx={{ marginLeft: '20px' }}>
            Data Security and Access
          </Link>
          <Link component={RouterLink} to="#ads" sx={{ marginLeft: '20px' }}>
            Ads and Cookies
          </Link>
        </nav>
      </Grid>
      
      <Grid item xs={12}>
        <Box 
          sx={{ 
            padding: '20px', 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            boxShadow: 3, 
            marginTop: '20px' 
          }}
        >
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="pri">
            Effective Date: April 29, 2025 <br />
            Last Updated: April 29, 2025 <br />
            Welcome to WebX. Your privacy is very important to us. This Privacy Policy is intended to 
            help you understand how we use information on our website. WebX does not collect any personal 
            information from visitors. However, we do display advertisements through Google AdSense, which may 
            use cookies and similar technologies to serve relevant ads. <br />
            Please take a moment to read through this policy to understand how it applies to your visit to our website.
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="ndc">
            1. **No Personal Data Collection** <br />
            At WebX, we do not ask for, store, or collect any personal data such as: <br />
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>IP address (not stored by us)</li>
              <li>Geolocation data</li>
            </ul>
            We do not use contact forms, login systems, or any methods that would require you to enter your personal details. 
            Your browsing on WebX is entirely anonymous from our side. 
            We are committed to keeping things simple, fast, and privacy-friendly. Our primary focus is on sharing content related 
            to web development, technologies, companies, and tools—not tracking users. <br />
            By using WebX, you agree to use our services without the need to share personal data.
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="sac">
            2. **Scope and Consent** <br />
            By accessing WebX, you consent to this Privacy Policy. WebX may change, update, or modify this policy as necessary. 
            Whenever we update this Privacy Policy, we will update the “Last Updated” date at the top of the page. We encourage 
            users to regularly review this page to stay informed about how we are protecting your privacy. <br />
            We do not share your personal information with third parties unless required by law. We respect your rights to privacy 
            and are committed to protecting your data.
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="dsa">
            3. **Data Security and Access** <br />
            WebX ensures that all necessary measures are in place to protect your information. Since we do not collect personal 
            data, the only information that may be accessed are cookies and anonymized data that are used for advertising purposes. 
            Google AdSense’s cookies are used to show relevant ads based on your browsing history, but we do not store or track 
            personal information. <br />
            We encourage users to be mindful of their own privacy settings and the information they share while browsing the web.
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="ads">
            4. **Ads and Cookies** <br />
            Although WebX does not collect data directly, we display ads via Google AdSense, which may use cookies and automated 
            data collection to deliver personalized or non-personalized advertisements. <br />
            Google, as a third-party vendor, uses cookies to: <br />
            <ul>
              <li>Show ads based on a user’s prior visits to this website or other websites.</li>
              <li>Understand general user behavior to improve ad relevance.</li>
              <li>Limit the number of times you see the same ad.</li>
              <li>Combat fraud and abuse.</li>
            </ul>
            This data is managed by Google and its advertising partners, not WebX. <br />
            You can opt-out of personalized ads at any time by visiting: <br />
            👉 <a href="https://www.google.com/settings/ads">Google Ads</a>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="pa">
            5. **Personalized Ads** <br />
            If you are in a region where Google shows personalized ads, they may use your online activity (browsing history, 
            interactions, etc.) to serve you more relevant ads. You can control or opt-out of personalized ads at any time by visiting: <br />
            👉 <a href="https://www.google.com/settings/ads">Google Ads</a> <br />
            6. **Non-Personalized Ads** <br />
            In regions where user consent is required (e.g., the EU), Google may serve non-personalized ads based on general 
            data like your country and device type, but not your personal browsing behavior.
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }}>
            7. **Updates and Changes** <br />
            WebX reserves the right to update or modify this Privacy Policy at any time. Any changes to this policy will be reflected 
            on this page, and the updated policy will be effective immediately upon posting. We recommend reviewing this page periodically 
            to stay informed about our privacy practices. <br />
            By continuing to use WebX after any changes to this policy, you accept those changes and agree to the updated terms.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
