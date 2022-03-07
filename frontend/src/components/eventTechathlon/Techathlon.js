import React from 'react';
import TechMain from './TechMain';
import TechTheme from './TechTheme';
import './Techathlon.css'
import TechSteps from './TechSteps';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Techathlon = () => {
    return (
        <div className="techBg">
            <Navbar />
            <TechMain />
            <TechTheme />
            <TechSteps />
            <Footer />
        </div>
    );
};

export default Techathlon;