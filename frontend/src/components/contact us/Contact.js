import React from 'react';
import ContactBanner from './ContactBanner';
import ContactSection from './ContactSection';
import Map from './Map';
import './Contact.css';

function Contact() {
    return(
        <div className='contact'>
            <ContactBanner />
            <ContactSection />
            <Map />
        </div>
    );
}
export default Contact;