import React, { useState } from 'react';
import { Form, Row, Button, Modal } from 'react-bootstrap';
import './Partnership.css';
import { validateRegistration } from './partnershipFormValidation';

const PartnerApply = () => {
    const initValues = {
        fullname: "",
        email: "",
        phone: "",
        firm: "",
        address: "",
        district: "",
        officeSpace: "",
        noOfEmployees: "",
        briefReport: "",
        expects: "",
        promoters: ""
    };
    //Manage Form Field Values
    const [postValues, setPostValues] = useState(initValues);

    //Manage Error Values
    const [errorValues, setErrorValues] = useState({});

    //Modal properties
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState({ header: "", body: "" });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Input values to postValues
    function handleChange(event) {
        const { name, value } = event.target;
        setPostValues({ ...postValues, [name]: value });
    }

    //Manage form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateRegistration(postValues);
        setErrorValues(validationErrors);
        if (Object.keys(validationErrors).length === 0)
            partnershipApplication();
    }

    //Posting form data to API
    const partnershipApplication = async () => {
        const fullname = postValues.fullname;
        const email = postValues.email;
        const phone = postValues.phone;
        const firm = postValues.firm;
        const address = postValues.address;
        const district = postValues.district;
        const officeSpace = postValues.officeSpace;
        const noOfEmployees = postValues.noOfEmployees;
        const briefReport = postValues.briefReport;
        const expects = postValues.expects;
        const promoters = postValues.promoters;

        const response = await fetch("/api/partnership/partnerinfo", {
            method: 'post',
            body: JSON.stringify({
                fullname, email, phone, firm, address, district,
                officeSpace, noOfEmployees, briefReport, expects, promoters
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
            
        if (body.status === "Success") {
            setModalText({
                header: "Partnership Registration Application",
                body: "Application for partnership successfully submitted."
            });
            setPostValues(initValues);
        } else {
            setModalText({
                header: "Error",
                body: "An error occured while submitting the application. Please try again!"
            });
        }
        handleShow();
    }

    return (
        <Form className="mx-auto col-lg-6 col-md-8 col-sm-10 p-3 text-light regFormPart" onSubmit={handleSubmit}>
            <div className="text-center fs-1 mb-1 titleTop">PARTNERSHIP REGISTRATION</div>
            <div className="text-center mb-1 pb-3">
                For further questions, including partnership opportunities,
                please email For support / clarification feel free to call: 811-184-0022 or
                write to us: sreekumar.kv@ictkerala.org
            </div>
            <Row>
                <Form.Group className="col-md-6 mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullname" value={postValues.fullname} onChange={handleChange} placeholder="Full Name" />
                    <Form.Text className="text-danger">{errorValues.fullname}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={postValues.email} onChange={handleChange} placeholder="example@example.com" />
                    <Form.Text className="text-danger">{errorValues.email}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formPhone">
                    <Form.Label>Phone No.</Form.Label>
                    <Form.Control type="number" name="phone" value={postValues.phone} onChange={handleChange} placeholder="Phone" />
                    <Form.Text className="text-danger">{errorValues.phone}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formFirm">
                    <Form.Label>Firm Establishment Date</Form.Label>
                    <Form.Control type="date" name="firm" value={postValues.firm} onChange={handleChange} placeholder="Establishment Date" />
                    <Form.Text className="text-danger">{errorValues.firm}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={postValues.address} onChange={handleChange} placeholder="Address" />
                    <Form.Text className="text-danger">{errorValues.address}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control type="text" name="district" value={postValues.district} onChange={handleChange} placeholder="District" />
                    <Form.Text className="text-danger">{errorValues.district}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formOfficeSpace">
                    <Form.Label>Office Space</Form.Label>
                    <Form.Control type="number" name="officeSpace" value={postValues.officeSpace} onChange={handleChange} placeholder="Office Space in Square Feet" />
                    <Form.Text className="text-danger">{errorValues.officeSpace}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formNoOfEmployees">
                    <Form.Label>Number of employees</Form.Label>
                    <Form.Control type="number" name="noOfEmployees" value={postValues.noOfEmployees} onChange={handleChange} placeholder="Number of Employees" />
                    <Form.Text className="text-danger">{errorValues.noOfEmployees}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formBriefReport">
                    <Form.Label>Brief Report</Form.Label>
                    <Form.Control as="textarea" rows={3} name="briefReport" value={postValues.briefReport} onChange={handleChange} placeholder="Briefly explain your contributions and its outcomes in training industry?" />
                    <Form.Text className="text-danger">{errorValues.briefReport}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formExpects">
                    <Form.Label>Expectations</Form.Label>
                    <Form.Control as="textarea" rows={3} name="expects" value={postValues.expects} onChange={handleChange} placeholder="Expectation for partnering with ICTAK?" />
                    <Form.Text className="text-danger">{errorValues.expects}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6  mb-3" controlId="formPromoters">
                    <Form.Label>Promoters</Form.Label>
                    <Form.Control as="textarea" rows={3} name="promoters" value={postValues.promoters} onChange={handleChange} placeholder="Brief profile about your promoters" />
                    <Form.Text className="text-danger">{errorValues.promoters}</Form.Text>
                </Form.Group>
            </Row>
            <div className="d-grid mb-4">
                <Button variant="primary" type="submit" >Submit</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ modalText.header }</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ modalText.body }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Form>
    );
};

export default PartnerApply;