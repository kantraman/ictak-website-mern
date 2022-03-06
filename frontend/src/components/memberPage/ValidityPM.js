import React from 'react';
import { Gem } from '../../assets'

const ValidityPM = () => {
    return (
        <div className="validityPM d-flex flex-column align-items-center">
            <Gem className="benefitsIcon"/>
            <h2 className="fs-2 pt-3">Commercial and validity period</h2>
            <p className = "fs-5 mx-auto col-md-8">
                ICT Academy of Kerala is forming a Premium membership programme with selected
                Engineering/ Science/ Management institutions in the state. The institutions will be selected
                based on a set of criteria, through an online application form from the interested colleges.
                The submission will be scrutinized by the ICTAK administration office and if required, will
                interact with the applying institutions for obtaining clarifications. Selected institutions
                will be provided with one year membership and will be provided with one year membership and
                will be supported by the ICTAK on a set of activities that will help the students, teachers
                and institutions at large.
                The membership will be free for selected institutions.
            </p>
        </div>
    );
};

export default ValidityPM;