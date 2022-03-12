import React from 'react';
import './sidebar.css';
import {Dashboard, Message, InsertEmoticon, AssignmentInd, HorizontalSplit, Done,FiberManualRecordOutlined, MenuBookRounded , InsertDriveFile} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logout from '../../Admin/logout.js'
function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className='sidebarList'>
                    <Link to="/dashboard" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <Dashboard />
                            Dashboard
                        </li></Link>
                    <Link to="/dashboard" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <HorizontalSplit />
                            Courses
                        </li></Link>
                    <Link to="/testimonials" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <InsertDriveFile />
                            Testimonials
                        </li></Link>
                    <Link to="/export-applications" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <Done />
                            Course Registration
                        </li></Link>
                    <Link to="/export-academic" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <AssignmentInd />
                            Academic Membership
                        </li></Link>
                    <Link to="/export-corporate" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <Dashboard />
                            Corporate Membership
                        </li></Link>
                    <Link to="/export-partnership" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <InsertEmoticon />
                            Partnership
                        </li></Link>
                    <Link to="/industrial-partner" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <FiberManualRecordOutlined />
                            Industries
                        </li></Link>
                    <Link to="/knowledge-partner" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <MenuBookRounded />
                            Knowledge
                        </li></Link>
                    <Link to="/export-messages" className="Sidebarlink">
                        <li className='sidebarListItem'>
                            <Message />
                            Contact us
                        </li></Link>

                </ul>
                <Button variant="contained" className="sidebarMenu" onClick={() => Logout()}><h3 className='sidebarTitle'>LOGOUT</h3></Button>
                
            </div>
        </div>
    );
}

export default Sidebar;