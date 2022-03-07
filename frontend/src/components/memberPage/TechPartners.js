import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Partners from './techPartnersData'

const TechPartners = () => {
    return (<>
        <h1 className="fs-1 text-center mt-3 p-2">Our Technology Partners</h1>
        <Row className="p-2 mx-auto bg-light col-lg-9 col-md-10">
            {
                Partners.map((item) => {
                    return (
                        <Col key={item.name} className="d-flex align-items-center col-6 col-md-4 col-lg-3">
                            <img src={item.logo} alt={item.name} className="img-fluid" />
                        </Col>
                    )
                })
            }
        </Row>
        </>
    );
};

export default TechPartners;