import React from 'react';
import IcsetMain from './IcsetMain';
import './Icset.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Icset = () => {
    return (
        <div className="icsetBg">
            <Navbar />
            <IcsetMain />
            <Footer />
        </div>
    );
};

export default Icset;