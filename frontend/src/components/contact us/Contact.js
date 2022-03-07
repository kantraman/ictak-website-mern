import React from 'react';
import ContactBanner from './ContactBanner';
import ContactSection from './ContactSection';
import Map from './Map';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

function Contact() {
    return(
        <div><Navbar/>
        <div className='contact'>
            
            <ContactBanner />
            <ContactSection />
            <Map />
        </div></div>
    );
}
export default Contact;