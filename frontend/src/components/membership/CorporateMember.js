import React, { useState } from 'react';
import { Form, Row, Button, Modal } from 'react-bootstrap';
import { validateCorpMemApplication } from './validateMemApplications';
import '../partnership/Partnership.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CorpMemApply = () => {
    const initValues = {
        organisation: "",
        address: "",
        website: "",
        orgHead: "",
        orgNature: "",
        companyType: "",
        corpID: "",
        GSTN: "",
        dateOfIncorp: "",
        pocName: "",
        pocEmail: "",
        pocPhone: "",
        skilset: "",
        noOfEmployees: "",
        avgYrFrHiring: "",
        noOfPatents: "",
        collaborate: {
            experts4SkillSessions: false,
            fresherHiring: false,
            internships: false,
            employeeTraining: false,
            projectAssistance: false
        },
        details: ""
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
        console.log(event.target);
        const { name, value } = event.target;
        
        if (name.toString().indexOf(".") !== -1) {
            let key = name.split('.')[0];
            let subKey = name.split('.')[1];
            postValues[key][subKey] = !postValues[key][subKey];
            setPostValues({ ...postValues });
        } else {
            setPostValues({ ...postValues, [name]: value });
        }
        
    }

    //Manage form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateCorpMemApplication(postValues);
        setErrorValues(validationErrors);
        if (Object.keys(validationErrors).length === 0)
            corporateApplication();
    }

    //Posting form data to API
    const corporateApplication = async () => {
        const organisation = postValues.organisation;
        const address = postValues.address;
        const website = postValues.website;
        const orgHead = postValues.orgHead;
        const orgNature = postValues.orgNature;
        const companyType = postValues.companyType;
        const corpID = postValues.corpID;
        const GSTN = postValues.GSTN;
        const dateOfIncorp = postValues.dateOfIncorp;
        const pocName = postValues.pocName;
        const pocEmail = postValues.pocEmail;
        const pocPhone = postValues.pocPhone;
        const skilset = postValues.skilset;
        const noOfEmployees = postValues.noOfEmployees;
        const avgYrFrHiring = postValues.avgYrFrHiring;
        const noOfPatents = postValues.noOfPatents;
        const collaborate = postValues.collaborate;
        const details = postValues.details

        const response = await fetch("/api/membership/corporate-member", {
            method: 'post',
            body: JSON.stringify({
                organisation, address, website, orgHead, orgNature,
                companyType, corpID, GSTN, dateOfIncorp, pocName, pocEmail,
                pocPhone, skilset, noOfEmployees, avgYrFrHiring, noOfPatents,
                collaborate, details
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
        <>
            <Navbar />
            <Form className="mx-auto col-lg-6 col-md-8 col-sm-10 p-3 mt-5 text-light regFormPart" onSubmit={handleSubmit}>
                <div className="text-center fs-1 mb-3 titleTop">CORPORATE MEMBERSHIP APPLICATION</div>
                <Row>
                    <Form.Group className="col-md-6 mb-3 mt-2" controlId="formOrgName">
                        <Form.Label>Name of organisation</Form.Label>
                        <Form.Control type="text" name="organisation" value={postValues.organisation} onChange={handleChange} placeholder="Organisation Name" />
                        <Form.Text className="text-danger">{errorValues.organisation}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3 mt-2" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={postValues.address} onChange={handleChange} placeholder="Address" />
                        <Form.Text className="text-danger">{errorValues.address}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="url" name="website" value={postValues.website} onChange={handleChange} placeholder="Website" />
                        <Form.Text className="text-danger">{errorValues.website}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formHOD">
                        <Form.Label>Head of organisation</Form.Label>
                        <Form.Control type="text" name="orgHead" value={postValues.orgHead} onChange={handleChange} placeholder="Organisation Head" />
                        <Form.Text className="text-danger">{errorValues.orgHead}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formOrgNature">
                        <Form.Label>Nature of organisation</Form.Label>
                        <Form.Control type="text" name="orgNature" value={postValues.orgNature} onChange={handleChange} placeholder="Products / Services" />
                        <Form.Text className="text-danger">{errorValues.orgNature}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formOrgType">
                        <Form.Label>Type of the company</Form.Label>
                        <Form.Select name="companyType" value={postValues.companyType} onChange={handleChange} >
                            <option value="">--Select--</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="Quasi Govt.">Quasi Govt.</option>
                            <option value="PPP">PPP</option>
                            <option value="Proprietorship"> Proprietorship</option>
                        </Form.Select>
                        <Form.Text className="text-danger">{errorValues.companyType}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formCIN">
                        <Form.Label>Corporate identity number</Form.Label>
                        <Form.Control type="text" name="corpID" value={postValues.corpID} onChange={handleChange} placeholder="Corporate ID" />
                        <Form.Text className="text-danger">{errorValues.corpID}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formGSTN">
                        <Form.Label>GSTN</Form.Label>
                        <Form.Control type="text" name="GSTN" value={postValues.GSTN} onChange={handleChange} placeholder="GSTN" />
                        <Form.Text className="text-danger">{errorValues.GSTN}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formDOI">
                        <Form.Label>Date of Incorporation</Form.Label>
                        <Form.Control type="date" name="dateOfIncorp" value={postValues.dateOfIncorp} onChange={handleChange} placeholder="Date of incorporation" />
                        <Form.Text className="text-danger">{errorValues.dateOfIncorp}</Form.Text>
                    </Form.Group>
                    <h3 className="fs-3 mb-3 col-md-12">Point of contact details</h3>
                    <Form.Group className="col-md-6  mb-3" controlId="formPOCName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="pocName" value={postValues.pocName} onChange={handleChange} placeholder="Name" />
                        <Form.Text className="text-danger">{errorValues.pocName}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formPOCPhone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" name="pocPhone" value={postValues.pocPhone} onChange={handleChange} placeholder="Phone No." />
                        <Form.Text className="text-danger">{errorValues.pocPhone}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formPOCemail">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" name="pocEmail" value={postValues.pocEmail} onChange={handleChange} placeholder="example@example.com" />
                        <Form.Text className="text-danger">{errorValues.pocEmail}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formSkillSet">
                        <Form.Label>Technical skill sets commonly used</Form.Label>
                        <Form.Control type="text" name="skilset" value={postValues.skilset} onChange={handleChange} placeholder="Skill sets used in organisation" />
                        <Form.Text className="text-danger">{errorValues.skilset}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formTotalEmployees">
                        <Form.Label>Total number of employees in your organization</Form.Label>
                        <Form.Control type="number" name="noOfEmployees" value={postValues.noOfEmployees} onChange={handleChange} placeholder="Total number of employees" />
                        <Form.Text className="text-danger">{errorValues.noOfEmployees}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formFresherHiring">
                        <Form.Label>Average yearly fresher hiring in your company</Form.Label>
                        <Form.Select name="avgYrFrHiring" value={postValues.avgYrFrHiring} onChange={handleChange} >
                            <option value="">--Select--</option>
                            <option value="1 - 10">1 - 10</option>
                            <option value="11 - 20">11 - 20</option>
                            <option value="21 - 30">21 - 30</option>
                            <option value="31  40">31 – 40</option>
                            <option value="41 - 50">41 - 50</option>
                            <option value="50">&gt;50</option>
                        </Form.Select>
                        <Form.Text className="text-danger">{errorValues.avgYrFrHiring}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6  mb-3" controlId="formPatents">
                        <Form.Label>Number of patents filed by your organization</Form.Label>
                        <Form.Select name="noOfPatents" value={postValues.noOfPatents} onChange={handleChange} >
                            <option value="">--Select--</option>
                            <option value="1 - 10">1 - 10</option>
                            <option value=">10">&gt;10</option>
                            <option value="NA">NA</option>
                        </Form.Select>
                        <Form.Text className="text-danger">{errorValues.noOfPatents}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12  mb-3" controlId="formCollaborate">
                        <Form.Label>How do you like to collaborate with ICTAK through the corporate membership?</Form.Label>
                        <Form.Check type="checkbox" label="Providing experts for skill sessions"
                            name="collaborate.experts4SkillSessions" checked={postValues.collaborate.experts4SkillSessions}
                            value="Providing experts for skill sessions" onChange={handleChange} />
                        <Form.Check type="checkbox" label="Fresher hiring"
                            name="collaborate.fresherHiring" checked={postValues.collaborate.fresherHiring}
                            value="Fresher hiring" onChange={handleChange} />
                        <Form.Check type="checkbox" label="Internships"
                            name="collaborate.internships" checked={postValues.collaborate.internships}
                            value="Internships" onChange={handleChange} />
                        <Form.Check type="checkbox" label="Employee training in technologysoft skills"
                            name="collaborate.employeeTraining" checked={postValues.collaborate.employeeTraining}
                            value="Employee training in technologysoft skills" onChange={handleChange} />
                        <Form.Check type="checkbox" label="Capstone Projects assistance"
                            name="collaborate.projectAssistance" checked={postValues.collaborate.projectAssistance}
                            value="Capstone Projects assistance" onChange={handleChange} />
                        <Form.Text className="text-danger">{errorValues.collaborate}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12  mb-3" controlId="formAcademic">
                        <Form.Label>Any academic interface program/ activities conducted by your organization? if so please provide the details</Form.Label>
                        <Form.Control as="textarea" rows={5} name="details" value={postValues.details} onChange={handleChange} placeholder="Please provide details about the academic interface programme" />
                        <Form.Text className="text-danger">{errorValues.details}</Form.Text>
                    </Form.Group>
                </Row>
                <div className="d-grid mb-4">
                    <Button variant="primary" type="submit" >Submit</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalText.header}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{modalText.body}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
            <Footer />
        </>
    );
};

export default CorpMemApply;