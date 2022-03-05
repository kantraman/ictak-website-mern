import React from 'react';
import TechMain from './TechMain';
import TechTheme from './TechTheme';
import './Techathlon.css'
import TechSteps from './TechSteps';

const Techathlon = () => {
    return (
        <div className="techBg">
            <TechMain />
            <TechTheme />
            <TechSteps />
        </div>
    );
};

export default Techathlon;