import React from 'react';
import { Row } from 'react-bootstrap';
import techSteps from './techStepsObj'

const TechSteps = () => {
    return (
        <Row className="text-secondary mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 col-md-10">
            {
                techSteps.map((item) => {
                    return (
                      
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title">{item.title}</h5>
                                </div>
                                <img src={item.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: item.descr }}>
                                    
                                    </p>
                                </div>
                            </div>
                       
                    )
                })
               
            }
        </Row>
    );
};

export default TechSteps;