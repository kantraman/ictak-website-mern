import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Collaborate, Handshake, Trainer, Recruit } from '../../assets/index.js'

const CorporateBenefits = () => {
    return (
        <>
            <Row className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                <h1 className="text-center fs-1">Benefits</h1>
                <Col className="col-lg-6 col-md-8 col-sm-12">
                    <div className="text-center d-flex flex-column align-items-center">
                        <h3 className="fs-3">Collaborate</h3>
                        <Collaborate className="benefitsIcon" />
                    </div>
                    <p>
                        Collaborate with the flagship skills development organization in the state supported
                        Govt. of India and partnered by Govt. of Kerala.
                    </p>
                </Col>
                <Col className="col-lg-6 col-md-8 col-sm-12">
                    <div className="text-center d-flex flex-column align-items-center">
                        <h3 className="fs-3">Interactions</h3>
                        <Handshake className="benefitsIcon" />
                    </div>
                    <p>
                        Access to over hundred Engineering and Non-engineering educational institutions in
                        the state of Kerala for campus recruitment/internships and for collaborative research
                        with Academia.
                    </p>
                </Col>
            </Row>
            <Row className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                <Col className="col-lg-6 col-md-8 col-sm-12">
                    <div className="text-center d-flex flex-column align-items-center">
                        <h3 className="fs-3">Corporate training benifits </h3>
                        <Trainer className="benefitsIcon" />
                    </div>
                    <p>
                        Participate in our corporate trainings and workshops at ‘Member rates’ (up to 20% discount)
                    </p>
                </Col>
                <Col className="col-lg-6 col-md-8 col-sm-12">
                    <div className="text-center d-flex flex-column align-items-center">
                        <h3 className="fs-3">Recruitments</h3>
                        <Recruit className="benefitsIcon" />
                    </div>
                    <p>
                        Access to ICT Academy trained pool of candidates for your manpower requirements.
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default CorporateBenefits;