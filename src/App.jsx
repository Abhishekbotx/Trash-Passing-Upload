// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'; // Adjust the path as necessary
// import Product from './pages/Product'; // Import your page components
// import Vision from './pages/Vision'; 
// import Mission from './pages/Mission'; 
// import Contact from './pages/Contact'; 
import LandingPage from './components/LandingPage';
import FaqDashboard from './components/FAQ/FaqDashboard';
import MechanismDashboard from './components/Mechanism/MechanismDashboard';
import ContactUsDashboard from './components/ContactUs/ContactUsDashboard';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/faq" element={<FaqDashboard />} />
                        <Route path="/mechanism" element={<MechanismDashboard />} />
                        <Route path="/contactus" element={<ContactUsDashboard />} />
                        <Route path="/contact" element={<ContactUsDashboard />} />
                        {/* <Route path="/vision" element={<Vision />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/contact" element={<Contact />} /> */}
                        {/* Add other routes as necessary */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
