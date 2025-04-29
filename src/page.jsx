import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/header"; 
import Footer from "./components/footer";  
import Page1 from "./page1.jsx"
import Page2 from "./page2.jsx";
import Page3 from "./page3.jsx"
import Privacy from './privacy.jsx';
import TermsAndConditions from './terms.jsx';
import ContactUs from './contact.jsx';
import Error from './error.jsx';
import AdBanner from './components/AddBanner.jsx';

export default function Page() {
    return (
        <Router>
            <Header />
                <Routes>
                <Route path="/:id" element={<Page1 />} />
                <Route path="/:id/2" element={<Page2 />} />
                <Route path="/:id/3" element={<Page3 />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <hr />
            <AdBanner />
            <Footer />
        </Router>
    );
}


// import { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./components/header"; 
// import Footer from "./components/footer";  
// import Page1 from "./page1.jsx";
// import Page2 from "./page2.jsx";
// import Page3 from "./page3.jsx";
// import Privacy from './privacy.jsx';
// import TermsAndConditions from './terms.jsx';
// import ContactUs from './contact.jsx';
// import Error from './error.jsx';
// import AdBanner from './components/AddBanner.jsx';

// export default function Page() {
//     useEffect(() => {
//         // Load Google Ads script dynamically
//         const script = document.createElement('script');
//         script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3198354148185299";
//         script.async = true;
//         script.crossOrigin = "anonymous";
//         document.head.appendChild(script);

//         return () => {
//             // Clean up by removing the script when the component is unmounted
//             document.head.removeChild(script);
//         };
//     }, []);

//     useEffect(() => {
//         // Initialize Google ads after the script is loaded
//         const handleAds = () => {
//             (window.adsbygoogle = window.adsbygoogle || []).push({});
//         };

//         // Wait for the script to load and then trigger ads
//         if (window.adsbygoogle) {
//             handleAds();
//         }

//         return () => {
//             // Clean up any global ads on component unmount
//         };
//     }, []);

//     return (
//         <Router>
//             <Header />
//             <ins
//                 className="adsbygoogle"
//                 style={{ display: 'block' }}
//                 data-ad-client="ca-pub-3198354148185299"
//                 data-ad-slot="1511736642"
//                 data-ad-format="auto"
//                 data-full-width-responsive="true"
//             />
//             <Routes>
//                 <Route path="/:id" element={<Page1 />} />
//                 <Route path="/:id/2" element={<Page2 />} />
//                 <Route path="/:id/3" element={<Page3 />} />
//                 <Route path="/privacy" element={<Privacy />} />
//                 <Route path="/terms" element={<TermsAndConditions />} />
//                 <Route path="/contact" element={<ContactUs />} />
//                 <Route path="*" element={<Error />} />
//             </Routes>
//             <hr />
//             <AdBanner />
//             <Footer />
//         </Router>
//     );
// }
