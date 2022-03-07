import React from 'react';
import './dashboard.css';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import Dashhome from '../dashhome/Dashhome';

function Dashboard(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <Dashhome/>
                
            </div>
        </div>
    );
}

export default Dashboard;