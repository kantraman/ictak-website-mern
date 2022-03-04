import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TechTheme = () => {
    return (
        <>
            <h1 className="fs-1 text-center">Industry Revolution 4.0 in Action</h1>
            <Row className="mx-auto row-cols-1 row-cols-lg-2 col-md-10">
            
                <Col className="mb-3">
                    <h3 className="fs-3 text-center">Theme</h3>
                    <img src="https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/11/ir4.0.jpg?ssl=1" alt="theme" className="img-fluid" />
                </Col>
                <Col className="mb-3">
                    <h3 className="fs-3 text-center">Steps</h3>
                    <img src="https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/11/s.jpg?ssl=1" alt="steps" className="img-fluid" />
                </Col>
            </Row>
        </>
    );
};

export default TechTheme;