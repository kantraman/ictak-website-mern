import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import MemList from './premierMembers.json';

const PremiumMemList = () => {
    return (
        <Accordion className="col-lg-10 mx-auto d-none d-md-block">
            <Accordion.Item eventKey="0">
                <Accordion.Header>ICTAK Premium Member Colleges (2021 - 2022)</Accordion.Header>
                <Accordion.Body className="premiumMemList">
                    <Table variant="dark" responsive hover>
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>Membership ID</th>
                                <th>Name of Institution</th>
                                <th>Website Address</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            MemList.map((item) => {
                                return (
                                    <tr key={item.slNo}>
                                        <td>{item.slNo}</td>
                                        <td>{item.memID}</td>
                                        <td>{item.institution}</td>
                                        <td><a href={item.website}>{item.website}</a></td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default PremiumMemList;