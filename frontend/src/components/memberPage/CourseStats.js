import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Star } from '../../assets';

const CourseStats = ({ courseStats }) => {
    return (
        <>
            <h1 className="fs-1 text-center p-3">Number of candidates trained on various skills in FY 20-21</h1>
            <Row className="p-2 mx-auto"> 
                {
                    courseStats.map((item) => {
                        return (
                            <Col key={item.name} className="d-flex flex-column justify-content-between mb-2 align-items-center mt-1 text-center">
                                    <div className="text-center"><Star className="benefitsIcon" /></div>
                                    <h4 className="p-2 fs-4">{item.name}</h4>
                                    <div className="bg-secondary text-light p-2 fs-4 w-100">{item.totalStudents}</div>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    );
};

export default CourseStats;