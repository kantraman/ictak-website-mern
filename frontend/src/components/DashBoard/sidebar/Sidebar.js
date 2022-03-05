import React from 'react';
import './sidebar.css';
import {Dashboard, InsertEmoticon, AssignmentInd, HorizontalSplit, Done,FiberManualRecordOutlined, MenuBookRounded , InsertDriveFile} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
function Sidebar(props) {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
        
        <ul className='sidebarList'>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <Dashboard />
            Dashboard
        </li></Link>
        <Link to="/dashboard/courses" className="link">    
        <li className='sidebarListItem'>
        <HorizontalSplit/>
            Courses
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <InsertDriveFile />
            Testimonials
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <Done />
            Course Registration
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <AssignmentInd />
            Academic Membership
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <Dashboard />
            Corporate Membership
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <InsertEmoticon />
            Partnership
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <FiberManualRecordOutlined />
            Industries
        </li></Link>
        <Link to="/dashboard" className="link">    
        <li className='sidebarListItem'>
        <MenuBookRounded />
            Knowledge
        </li></Link>


        </ul>
        <Link to="/" className="link">
        <Button variant="contained" className="sidebarMenu"><h3 className='sidebarTitle'>LOGOUT</h3></Button>
        </Link>
    </div>
    </div>
    );
}

export default Sidebar;