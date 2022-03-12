import React from 'react';
import Knowledge from '../Industrial/Industrial';
import './industrialpage.css';
import Dashsearch from '../dashSearch/Dashsearch';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';

function IndustrialPage(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <div className='industrialpage'>
                    <Dashsearch />
                    <div className='industrialtable'>
                        <Knowledge />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustrialPage;