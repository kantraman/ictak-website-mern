import React from 'react';
import './topbar.css';
import admin from './admin.jpg';
import ICT from './cropped-ict-ico.png'
import {NotificationsNone, Settings, Language} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
function Topbar(props) {
    return (
        <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
            <img alt='ictlogo' src={ICT} className="ICT"></img>
            <span className='logo'>ICTAK ADMIN</span>
            </div>
            <div className='topright'>
                <div className='topbarIconsContainer'>
                    <IconButton >
                    <NotificationsNone fontSize='large' className='header__icon' />
                    </IconButton>
                    <span className='topIconbadge'>9</span>
                </div>
                <div className='topbarIconsContainer'>
                <IconButton>
                    <Language fontSize='large' className='header__icon'/>
                    </IconButton>
                    <span className='topIconbadge'>2</span>
                </div>
                <div className='topbarIconsContainer'>
                <IconButton>
                    <Settings fontSize='large' className='header__icon'/>
                    </IconButton>
                </div>
                <div className='topbarIconsContainer'>
                <img src={admin} alt="admin" className='adminavatar'></img>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Topbar;