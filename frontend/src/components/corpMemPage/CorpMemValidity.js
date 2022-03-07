import React from 'react';
import { Gem } from '../../assets'

const CorpMemValidity = () => {
    return (
        <div className="validityPM d-flex flex-column align-items-center">
            <Gem className="benefitsIcon"/>
            <h2 className="fs-2 pt-3">Commercial and validity period</h2>
            <p className = "fs-5 mx-auto col-md-8">
                The industry membership programme will be offered based on an internal accreditation process
                and shall be valid for three years. The membership will be free for selected industry partners.
            </p>
        </div>
    );
};

export default CorpMemValidity;