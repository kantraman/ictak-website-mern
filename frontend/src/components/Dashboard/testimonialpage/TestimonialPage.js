import React from 'react';
import "./testpage.css";
import Dashsearch from "../dashSearch/Dashsearch"
import Testimonial from "../testimonial/Testimonial"
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';

function TestimonialPage(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <div className='testpage'>
                    <Dashsearch />
                    <div className='testtable'>
                        <Testimonial />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialPage;