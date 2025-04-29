import { Grid, Typography, Box } from '@mui/material';

import './privacy.css';

export default function Privacy() {
  return (
      
      <Grid item xs={12} 
      sx={{ 
        width: {
          xs: '98vw', 
          sm: '80vw', 
          md: '70vw', 
          lg: '60vw', 
          xl: '50vw'
        }, 
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        margin: '0 auto'}}>
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
            <p className='p_2'>
            Effective Date: April 29, 2025 <br />
            Last Updated: April 29, 2025 <br /></p>
            <p className='p_3'>Welcome to WebX. Your privacy is very important to us. This Privacy Policy is intended to 
            help you understand how we use information on our website. WebX does not collect any personal 
            information from visitors. However, we do display advertisements through Google AdSense, which may 
            use cookies and similar technologies to serve relevant ads. <br />
            Please take a moment to read through this policy to understand how it applies to you.</p>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="ndc">
            <p className='p_1'>1. No Personal Data Collection <br /></p>
            <p className='p_3'>At WebX, we do not ask for, store, or collect any personal data such as: <br />
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
            By using WebX, you agree to use our services without the need to share personal data.</p>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="sac">
            <p className='p_1'>2. Scope and Consent <br /></p><p className='p_3'>
            By accessing WebX, you consent to this Privacy Policy. WebX may change, update, or modify this policy as necessary. 
            Whenever we update this Privacy Policy, we will update the “Last Updated” date at the top of the page. We encourage 
            users to regularly review this page to stay informed about how we are protecting your privacy. <br />
            We do not share your personal information with third parties unless required by law. We respect your rights to privacy 
            and are committed to protecting your data.</p>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="dsa">
            <p className='p_1'>3. Data Security and Access <br /> </p>
            <p className='p_3'>
            WebX ensures that all necessary measures are in place to protect your information. Since we do not collect personal 
            data, the only information that may be accessed are cookies and anonymized data that are used for advertising purposes. 
            Google AdSense’s cookies are used to show relevant ads based on your browsing history, but we do not store or track 
            personal information. <br />
            We encourage users to be mindful of their own privacy settings and the information they share while browsing the web.
            </p>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="ads">
            <p className='p_1'>4. Ads and Cookies </p>
            <p className='p_3'>
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
            👉 <a href="https://www.google.com/settings/ads">Google Ads</a></p>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }} 
            id="pa">
            <p className='p_1'>5. Personalized Ads </p>
            <p className='p_3'>
            If you are in a region where Google shows personalized ads, they may use your online activity (browsing history, 
            interactions, etc.) to serve you more relevant ads. You can control or opt-out of personalized ads at any time by visiting: <br />
            👉 <a href="https://www.google.com/settings/ads">Google Ads</a> <br />
            6. Non-Personalized Ads <br />
            In regions where user consent is required (e.g., the EU), Google may serve non-personalized ads based on general 
            data like your country and device type, but not your personal browsing behavior.</p>
          </Typography>

          <Typography 
            variant="h6" 
            component="h4" 
            gutterBottom 
            sx={{ textAlign: 'left', color: '#000' }}>
            <p className='p_1'>7. Updates and Changes </p>
            <p className='p_3'>
            WebX reserves the right to update or modify this Privacy Policy at any time. Any changes to this policy will be reflected 
            on this page, and the updated policy will be effective immediately upon posting. We recommend reviewing this page periodically 
            to stay informed about our privacy practices. <br />
            By continuing to use WebX after any changes to this policy, you accept those changes and agree to the updated terms.
            </p>
          </Typography>
        </Box>
      </Grid>
  );
}
