import React from 'react';
import './dashboard.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import Dashhome from '../dashhome/Dashhome';
import Courses from '../courses/Courses'
function Dashboard(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <Courses/>
                
            </div>
        </div>
    );
}

export default Dashboard;

// <Dashhome/>    {first Page}
//<Courses/>      {Second Page}