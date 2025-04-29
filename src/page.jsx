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
export default function Page(){
    return(
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/:id" element={<Page1 />} />
                    <Route path="/:id/2" element={<Page2 />} />
                    <Route path="/:id/3" element={<Page3 />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
           <hr />
           <Footer />
        </>
    )
}