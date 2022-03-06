import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Student, Faculty, University } from '../../assets/index.js'

const AcademicBenefits = () => {
    return (
        <Row className="col-lg-10 mx-auto">
            <h1 className="text-center fs-1">Benefits</h1>
            <Col>
                <div className="text-center d-flex flex-column align-items-center">
                    <h3 className="fs-3">For Students</h3>
                    <Student className="benefitsIcon" />
                </div>
                <ul>
                    <li>
                        Free training on industrial skills with global leaders like Microsoft, Oracle Academy,
                        Google, Salesforce, AWS, and AAU in IR 4.0 technology domain.
                    </li>
                    <li>
                        Students from partner institutions benefit from the learning enrichment programs
                        like ICSET, Techathlon, and Student Top 10.
                    </li>
                </ul>
            </Col>
            <Col>
                <div className="text-center d-flex flex-column align-items-center">
                    <h3 className="fs-3">For Faculty</h3>
                    <Faculty className="benefitsIcon" /></div>
                <ul>
                    <li>
                        Faculty Benefits Access to Partner Curriculum.
                    </li>
                    <li>
                        Faculty development program from Salesforce, Oracle Academy, Google, and Microsoft.
                    </li>
                    <li>
                        Industrial visit. Opportunity to see, interact, and experience the industry innovations.
                    </li>
                    <li>
                        Opportunity to publish their works in our international magazine.
                    </li>
                </ul>
            </Col>
            <Col>
                <div className="text-center d-flex flex-column align-items-center">
                    <h3 className="fs-3">For Institutions </h3>
                    <University className="benefitsIcon" /></div>
                <ul >
                    <li>
                        Access to ICTAK corporate partner pre-programs and events.
                    </li>
                    <li>
                        Employability Quotient Test (EQT) to all the students to know their industrial skills.
                    </li>
                    <li>
                        Support for educators on partner program curriculum delivery and integration.
                    </li>
                    <li>
                        Connection and support to virtual and on-campus events.
                    </li>
                    <li>
                        Joint PR opportunities with ICT Academy of Kerala.
                    </li>
                </ul>
            </Col>
        </Row>
    );
};

export default AcademicBenefits;