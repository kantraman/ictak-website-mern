import React from 'react';
import '../memberPage/memberPage.css'
import courseStats from './CorporateCourseStats'
import TechPartners from '../memberPage/TechPartners';
import CourseStats from '../memberPage/CourseStats'
import CorporateBenefits from './CorpMemBenefits';
import CorpMemValidity from './CorpMemValidity';

const CorporateMemberPage = () => {
    return (
        <div className="memberMain">
            <div className="corpMemberHeading">
            <h1 className="fs-1">Corporate Membership</h1>
                    <p className="fs-4 mx-auto col-md-8">
                        ICT Academy of Kerala is pleased to offer ‘ICTAK Corporate Membership’ to a select
                        set of leading organizations in the country. Through this membership, ICTAK would
                        like to unlock the value of a Corporate – Academia collaboration through its wide
                        network of corporate and academic partners.
                    </p>
                    <a href="#k" className="btn btn-primary btn-lg">Register Now</a>
            </div>
            <div className="academicBenefits">
                <CorporateBenefits />
            </div>
            <div className="academicCourse">
                <CourseStats courseStats={courseStats} />
            </div>
            <CorpMemValidity />
            <TechPartners />
        </div>
    );
};

export default CorporateMemberPage;