import React, { useState } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import { validatePremiumMember } from './validateMemApplications';
import "../partnership/Partnership.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const PremiumMember = () => {
    const initValues = {
        institution: "",
        category: "",
        dateOfEstablishment: "",
        university: "",
        address: "",
        principalName: "",
        principalEmail: "",
        principalPhone: "",
        pocName: "",
        pocEmail: "",
        pocPhone: "",
        totalEligibleIntake: {
            yr1: "",
            yr2: "",
            yr3: ""
        },
        actualIntake: {
            yr1: "",
            yr2: "",
            yr3: ""
        },
        passPercent: {
            yr1: "",
            yr2: ""
        },
        totalNoOfFaculty: "",
        percentPHD: "",
        percent3YrIE: "",
        internetSpeed: "",
        totalComputers: "",
        accreditation: "",
        prizesAwards: "",
        papersPublished: "",
        uniqueness: "",
        reason: ""
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
        if (name.toString().indexOf(".") !== -1) {
            let key = name.split('.')[0];
            let subKey = name.split('.')[1];
            postValues[key][subKey] = value;
            setPostValues({ ...postValues });
        } else {
            setPostValues({ ...postValues, [name]: value });
        }
    }

    //Manage form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validatePremiumMember(postValues);
        setErrorValues(validationErrors);
        if (Object.keys(validationErrors).length === 0)
            premiumApplication();
    }

    //Posting form data to API
    const premiumApplication = async () => {
        const institution = postValues.institution;
        const category = postValues.category;
        const dateOfEstablishment = postValues.dateOfEstablishment;
        const university = postValues.university;
        const address = postValues.address;
        const principalName = postValues.principalName;
        const principalEmail = postValues.principalEmail;
        const principalPhone = postValues.principalPhone;
        const pocName = postValues.pocName;
        const pocEmail = postValues.pocEmail;
        const pocPhone = postValues.pocPhone;
        const totalEligibleIntake = postValues.totalEligibleIntake;
        const actualIntake = postValues.actualIntake;
        const passPercent = postValues.passPercent;
        const totalNoOfFaculty = postValues.totalNoOfFaculty;
        const percentPHD = postValues.percentPHD;
        const percent3YrIE = postValues.percent3YrIE;
        const internetSpeed = postValues.internetSpeed;
        const totalComputers = postValues.totalComputers;
        const accreditation = postValues.accreditation;
        const prizesAwards = postValues.prizesAwards;
        const papersPublished = postValues.papersPublished;
        const uniqueness = postValues.uniqueness;
        const reason = postValues.reason

        const response = await fetch("/api/membership/academic-member", {
            method: 'post',
            body: JSON.stringify({
                institution, category, dateOfEstablishment, university, address,
                principalName, principalEmail, principalPhone, pocName, pocEmail,
                pocPhone, totalEligibleIntake, actualIntake, passPercent,
                totalNoOfFaculty, percentPHD, percent3YrIE, internetSpeed, totalComputers,
                accreditation, prizesAwards, papersPublished, uniqueness, reason
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
            <Form className="mx-auto mt-5 col-lg-9 col-md-12 col-sm-12 p-3 text-light regFormPart" onSubmit={handleSubmit}>
                <div className="text-center fs-1 mb-1 titleTop">PREMIUM MEMBERSHIP APPLICATION</div>
                <Row>
                    <Form.Group className="col-md-12 mb-3 mt-3" controlId="formInstitution">
                        <Form.Label>Name of the institution</Form.Label>
                        <Form.Control type="text" name="institution" value={postValues.institution} onChange={handleChange} placeholder="Institution Name" />
                        <Form.Text className="text-danger">{errorValues.institution}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select name="category" onChange={handleChange} value={postValues.category}>
                            <option value="">--Select--</option>
                            <option value="Science and Management">Science and Management</option>
                            <option value="Polytechnic">Polytechnic</option>
                            <option value="Engineering">Engineering</option>
                            <option value="University">University</option>
                        </Form.Select>
                        <Form.Text className="text-danger">{errorValues.category}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formDOE">
                        <Form.Label>Date of Establishment</Form.Label>
                        <Form.Control type="date" name="dateOfEstablishment" value={postValues.dateOfEstablishment} onChange={handleChange} placeholder="Date of Establishment" />
                        <Form.Text className="text-danger">{errorValues.dateOfEstablishment}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formUniversity">
                        <Form.Label>University</Form.Label>
                        <Form.Select name="university" onChange={handleChange} value={postValues.university}>
                            <option value="">--Select--</option>
                            <option value="university-of-kerala">University of Kerala.</option>
                            <option value="central-university-of-kerala">Central University of Kerala.</option>
                            <option value="cochin-university-of-science-and-technology">Cochin University of Science and Technology</option>
                            <option value="university-of-calicut">University of Calicut.</option>
                            <option value="mahatma-gandhi-university">Mahatma Gandhi University.</option>
                            <option value="sree-sankaracharya-university-of-sanskrit">Sree Sankaracharya University of Sanskrit</option>
                            <option value="kerala-agricultural-university">Kerala Agricultural University.</option>
                            <option value="kannur-university">Kannur University</option>
                            <option value="fisheries-university">Fisheries University</option>
                            <option value="kerala-veterinary-and-animal-sciences-university">Kerala Veterinary and Animal Sciences University</option>
                            <option value="kerala-university-of-health-sciences">Kerala University of Health Sciences</option>
                            <option value="national-university-of-advanced-legal-studies">National University of Advanced Legal Studies</option>
                            <option value="thunchath-ezhuthachan-malayalam-university">Thunchath Ezhuthachan Malayalam University</option>
                            <option value="apj-abdul-kalam-technological-university">APJ Abdul Kalam Technological University.</option>
                            <option value="state-board-of-technical-education">State Board of Technical Education</option>
                            <option value="Others">Others</option>
                        </Form.Select>
                        <Form.Text className="text-danger">{errorValues.university}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-3" controlId="formAddress">
                        <Form.Label>Institution Address</Form.Label>
                        <Form.Control type="text" name="address" value={postValues.address} onChange={handleChange} placeholder="Institution Address" />
                        <Form.Text className="text-danger">{errorValues.address}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formPrincipal">
                        <Form.Label>Principal's Name</Form.Label>
                        <Form.Control type="text" name="principalName" value={postValues.principalName} onChange={handleChange} placeholder="Principal's Name" />
                        <Form.Text className="text-danger">{errorValues.principalName}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formPrincipalEmail">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" name="principalEmail" value={postValues.principalEmail} onChange={handleChange} placeholder="Principal's Email" />
                        <Form.Text className="text-danger">{errorValues.principalEmail}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formPrincipalPhone">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" name="principalPhone" value={postValues.principalPhone} onChange={handleChange} placeholder="Principal's Phone No." />
                        <Form.Text className="text-danger">{errorValues.principalPhone}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formPOCName">
                        <Form.Label>Point of Contact Name</Form.Label>
                        <Form.Control type="text" name="pocName" value={postValues.pocName} onChange={handleChange} placeholder="Point of Contact's Name" />
                        <Form.Text className="text-danger">{errorValues.pocName}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formPOCEmail">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" name="pocEmail" value={postValues.pocEmail} onChange={handleChange} placeholder="Point of Contact's Email" />
                        <Form.Text className="text-danger">{errorValues.pocEmail}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formPOCPhone">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" name="pocPhone" value={postValues.pocPhone} onChange={handleChange} placeholder="Point of Contact's Phone No." />
                        <Form.Text className="text-danger">{errorValues.pocPhone}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12" controlId="formTEIntake">
                        <Form.Label>Total eligible Intake for last 3 years</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formTEYr1">
                        <Form.Control type="number" name="totalEligibleIntake.yr1" value={postValues.totalEligibleIntake.yr1} onChange={handleChange} placeholder="Year 1" />
                        <Form.Text className="text-danger">{errorValues.totalEligibleIntake}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formTEYr2">
                        <Form.Control type="number" name="totalEligibleIntake.yr2" value={postValues.totalEligibleIntake.yr2} onChange={handleChange} placeholder="Year 2" />
                        <Form.Text className="text-danger">{errorValues.totalEligibleIntake}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formTEYr3">
                        <Form.Control type="number" name="totalEligibleIntake.yr3" value={postValues.totalEligibleIntake.yr3} onChange={handleChange} placeholder="Year 3" />
                        <Form.Text className="text-danger">{errorValues.totalEligibleIntake}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12" controlId="formAIntake">
                        <Form.Label>Actual Intake for last 3 years</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formAIYr1">
                        <Form.Control type="number" name="actualIntake.yr1" value={postValues.actualIntake.yr1} onChange={handleChange} placeholder="Year 1" />
                        <Form.Text className="text-danger">{errorValues.actualIntake}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formAIYr2">
                        <Form.Control type="number" name="actualIntake.yr2" value={postValues.actualIntake.yr2} onChange={handleChange} placeholder="Year 2" />
                        <Form.Text className="text-danger">{errorValues.actualIntake}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formAIYr3">
                        <Form.Control type="number" name="actualIntake.yr3" value={postValues.actualIntake.yr3} onChange={handleChange} placeholder="Year 3" />
                        <Form.Text className="text-danger">{errorValues.actualIntake}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12" controlId="formPass">
                        <Form.Label>Pass percentage for last 2 years</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-md-6 mb-3" controlId="formPassYr1">
                        <Form.Control type="number" name="passPercent.yr1" value={postValues.passPercent.yr1} onChange={handleChange} placeholder="Year 1" />
                        <Form.Text className="text-danger">{errorValues.passPercent}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-6 mb-3" controlId="formPassYr2">
                        <Form.Control type="number" name="passPercent.yr2" value={postValues.passPercent.yr2} onChange={handleChange} placeholder="Year 2" />
                        <Form.Text className="text-danger">{errorValues.passPercent}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formFaculty">
                        <Form.Label>Total number of Faculty Members</Form.Label>
                        <Form.Control type="number" name="totalNoOfFaculty" value={postValues.totalNoOfFaculty} onChange={handleChange} placeholder="Total Faculty Number" />
                        <Form.Text className="text-danger">{errorValues.totalNoOfFaculty}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formFaculty">
                        <Form.Label>% of Faculty with PHD</Form.Label>
                        <Form.Control type="number" name="percentPHD" value={postValues.percentPHD} onChange={handleChange} placeholder="% of Faculty with PHD" />
                        <Form.Text className="text-danger">{errorValues.percentPHD}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formExp3yr">
                        <Form.Label>% Of Faculties with 3 years or more of relevant Industry experience</Form.Label>
                        <Form.Control type="number" name="percent3YrIE" value={postValues.percent3YrIE} onChange={handleChange} placeholder="% of Faculty with Industry Experience" />
                        <Form.Text className="text-danger">{errorValues.percent3YrIE}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formComputers">
                        <Form.Label> Total number of Computers in the biggest Computer lab </Form.Label>
                        <Form.Control type="number" name="totalComputers" value={postValues.totalComputers} onChange={handleChange} placeholder="Total Number of Computers" />
                        <Form.Text className="text-danger">{errorValues.totalComputers}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formInternetSpeed">
                        <Form.Label> What is the dedicated bandwidth of the biggest Computer lab ? </Form.Label>
                        <Form.Control type="text" name="internetSpeed" value={postValues.internetSpeed} onChange={handleChange} placeholder="Dedicated Network Bandwidth" />
                        <Form.Text className="text-danger">{errorValues.internetSpeed}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3" controlId="formAccreditation">
                        <Form.Label>Institution’s Accreditation and its current status </Form.Label>
                        <Form.Control type="text" name="accreditation" value={postValues.accreditation} onChange={handleChange} placeholder="Accreditation and its Current Status" />
                        <Form.Text className="text-danger">{errorValues.accreditation}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-3" controlId="formPrizes">
                        <Form.Label>No of Awards /Prizes obtained for clubs, art festivals, technical events, sports meet and societies -State level and above</Form.Label>
                        <Form.Control as="textarea" rows={5} name="prizesAwards" value={postValues.prizesAwards} onChange={handleChange} placeholder="Prizes and Awards for past 2 years" />
                        <Form.Text className="text-danger">{errorValues.prizesAwards}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-3" controlId="formPapers">
                        <Form.Label>No of Papers published in International Magazines by Students</Form.Label>
                        <Form.Control as="textarea" rows={3} name="papersPublished" value={postValues.papersPublished} onChange={handleChange} placeholder="No of Papers Published in International Magazines by Students" />
                        <Form.Text className="text-danger">{errorValues.papersPublished}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-3" controlId="formUnique">
                        <Form.Label> Uniqueness / Excellency about the institution</Form.Label>
                        <Form.Control as="textarea" rows={3} name="uniqueness" value={postValues.uniqueness} onChange={handleChange} placeholder="Uniqueness / Excellency about the institution." />
                        <Form.Text className="text-danger">{errorValues.uniqueness}</Form.Text>
                    </Form.Group>
                    <Form.Group className="col-md-12 mb-3" controlId="formReason">
                        <Form.Label>The reason / expectation behind applying for ICTAK premium membership</Form.Label>
                        <Form.Control as="textarea" rows={3} name="reason" value={postValues.reason} onChange={handleChange} placeholder="The Reason / Expectation Behind Applying for ICTAK Premium Membership" />
                        <Form.Text className="text-danger">{errorValues.reason}</Form.Text>
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
    )
};

export default PremiumMember;