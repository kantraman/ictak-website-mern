import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PartnerApply from './PartnerApply';
import './Partnership.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Partnership = () => {
    return (
        <div className="partnerBg">
            <Navbar />
            <Row>
                <img src="https://i.imgur.com/LD37RUf.gif" alt="Partnership" className="img-fluid"></img>
            </Row>
            <Row className="bePartner">
                <Col className="col-8">
                    <img src="https://i.imgur.com/MY6YNM8.png" alt="Be our partner" className="img-fluid"></img>
                </Col>
                <Col className="d-flex align-items-center col-4">
                    <a href="https://ictkerala.org/wp-content/uploads/2020/06/ICTAK-TSP-002-1.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">Download Proposal</a>
                </Col>
            </Row>
            <PartnerApply />
            <Footer />
        </div>
    );
};

export default Partnership;