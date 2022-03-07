import React from 'react';
import TechPartners from './TechPartners';
import AcademicBenefits from './AcademicBenefits';
import CourseStats from './CourseStats';
import courses from './AcademicCourseStats';
import PremiumMemList from './PremiumMemList';
import ValidityPM from './ValidityPM';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './memberPage.css';

const AcademicMemberPage = () => {
    return (
        <div className="memberMain">
            <Navbar />
            <div className="memberHeading">
                <div className="blackCoverWP">
                    <h1 className="fs-1">Premium Membership</h1>
                    <p className="fs-4 mx-auto col-md-8">
                        ICT Academy of Kerala (ICTAK) is pleased to offer its Premium Memberships to selected
                        Engineering , Science &amp; Management Institutions and Polytechnics in the state.
                        Through the programme, ICTAK will support its members institution’s Faculty members,
                        Students and Staffs with quality training resources, certifications and Industry
                        immersions on IR4.0 Technologies, and thereby enabling them to reach their Academic
                        and Career potential.
                    </p>
                    <a href="/academic-member-apply" className="btn btn-primary btn-lg">Register</a>
                </div>
            </div>
            <PremiumMemList />
            <div className="academicBenefits">
                <AcademicBenefits />
            </div>
            <div className="academicCourse">
                <CourseStats courseStats={courses} />
            </div>
            <ValidityPM />
            <TechPartners />
            <Footer />
        </div>
    );
};

export default AcademicMemberPage;