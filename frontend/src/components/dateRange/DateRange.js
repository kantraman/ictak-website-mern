import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Offcanvas } from 'react-bootstrap';
import useToken from '../Admin/useToken';
import Topbar from '../Dashboard/topbar/Topbar';
import Sidebar from '../Dashboard/sidebar/Sidebar';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logout from '../Admin/logout';

const DateRange = (props) => {
    const expType = props.type;
    const initValues = {
        fromDate: formatDate(new Date(Date.now()).toLocaleDateString("en-UK")),
        toDate: formatDate(new Date(Date.now()).toLocaleDateString("en-UK"))
    }
    const { token } = useToken();
    //Set initial dates
    const [postValues, setPostValues] = useState(initValues);
    const [errorValues, setErrorValues] = useState({});
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState([]);
    
    const [show, setShow] = useState(false);
    //Offcanvas
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Set Title
    useEffect(() => {
        let frmTitle = title;
        switch (expType) {
            case 1: //Premium Membership application
                frmTitle = "Premium Membership Application - ";
                break;
            case 2: //Corporate Membership application
                frmTitle = "Corporate Membership Application - ";
                break;
            case 3: //Partnership application
                frmTitle = "Partnership Application - ";
                break;
            case 4: //Contact us messages
                frmTitle = "Contact us Messages - ";
                break;
            case 5: //Course reg. application
                frmTitle = "Course Registration - ";
                break;
            default:
                frmTitle = "";
                break;
        }
        if (frmTitle !== title) {
            setTitle(frmTitle);
            setDetails([]);
            setErrorValues({});
            setPostValues(initValues);
            handleClose();
        }
    }, [expType])

    //Input values to postValues
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPostValues({ ...postValues, [name]: value });
    }
    //Validate Dates
    const validateDates = () => {
        let fromDate = postValues.fromDate;
        let toDate = postValues.toDate;
        let isValid = true;
        let validationErrors = {};

        if (!postValues.fromDate)
            validationErrors.fromDate = "From date is required";
        if (!postValues.toDate)
            validationErrors.toDate = "To date is required";
        if (isNaN(new Date(fromDate).getTime())) {
            isValid = false;
            validationErrors.fromDate = "Invalid from Date";
        }
        if (isNaN(new Date(toDate).getTime())) {
            isValid = false;
            validationErrors.toDate = "Invalid to Date";
        }
        if (isValid) {
            if (new Date(fromDate) > new Date(toDate)) {
                validationErrors.fromDate = "From date cannot be greater than to date";
            }
        }
        
        return validationErrors;
    }
    //Manage form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateDates();
        setErrorValues(validationErrors);
        if (Object.keys(validationErrors).length === 0)
            getXlData();
    }
    //To get data as xlsx
    const getXlData = async () => {
        let fromDate = postValues.fromDate;
        let toDate = postValues.toDate;
        let getEP = "";
        switch (expType) {
            case 1: //Premium Membership application
                getEP = "api/membership/export-academic";
                break;
            case 2: //Corporate Membership application
                getEP = "api/membership/export-corporate";
                break;
            case 3: //Partnership application
                getEP = "api/partnership/export-partner";
                break;
            case 4: //Contact us messages
                getEP = "api/contact/export-msg";
                break;
            case 5: //Course reg. applications
                getEP = "api/dashboard/export-student-appl";
                break;
            default:
                getEP = "api/membership/export-academic";
                break;
        }
        getEP += "?fromDate=" + fromDate + "&toDate=" + toDate + "&token=" + token;
        try {
            const response = await fetch(getEP, {
                method: "get",
                headers: {
                    'x-access-token': token
                }
            });
            if (response.status === 401) {
                Logout();
                return 0;
            }
            if (response.headers.get('Content-Type') ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                window.open(url, '_blank');
                URL.revokeObjectURL(url);
            } else if (response.headers.get('Content-Type') === "application/json; charset=utf-8") {
                const body = await response.json();
                if (body.status)
                    window.alert(body.message);
            } else {
                window.alert("An error occured while getting data.");
            }
            
        } catch (err) {
            window.alert("An error occured while getting data.");
        }
    }
    //To view details
    const getDetails = async () => {
        let fromDate = postValues.fromDate;
        let toDate = postValues.toDate;
        let validationErrors = validateDates();
        setErrorValues(validationErrors);
        if (Object.keys(validationErrors).length !== 0)
            return 0;
        let getEP = "";
        switch (expType) {
            case 1: //Premium Membership application
                getEP = "api/membership/view-academic";
                break;
            case 2: //Corporate Membership application
                getEP = "api/membership/view-corporate";
                break;
            case 3: //Partnership application
                getEP = "api/partnership/view-partner";
                break;
            case 4: //Contact us messages
                getEP = "api/contact/messages";
                break;
            case 5: //Course reg. applications
                getEP = "api/dashboard/view-student-appl";
                break;
            default:
                getEP = "api/membership/export-academic";
                break;
        }
        getEP += "?fromDate=" + fromDate + "&toDate=" + toDate + "&token=" + token;
        try {
            const response = await fetch(getEP, {
                method: "get",
                headers: {
                    'x-access-token': token
                }
            });
            if (response.status === 401) {
                Logout();
                return 0;
            }
            const body = await response.json();
            if (body.status !== "Error") {
                setDetails(body);
            } else if (body.status === "Error") {
                window.alert(body.message);
            }
            
        } catch (err) {
            window.alert("An error occured while getting data.");
        }
    }


    //Format date yyyy-mm-dd
    function formatDate(date) {
        date = date.toString();
        if (date.length === 10) {
            date = date.substring(6, 10) + "-"
                + date.substring(3, 5) + "-"
                + date.substring(0, 2);
        }
        
        return date;
    }

    return (
        <div>
            <Topbar />
            <div className="d-grid">
                <Button variant="primary" onClick={handleShow} className='d-flex align-items-center ml-4'>
                    <HamburgerIcon /> Navigation
                </Button>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Navigation</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Sidebar />
                </Offcanvas.Body>
            </Offcanvas>
            <Form className="mx-auto col-lg-8 col-md-10 col-sm-12 p-3 mt-5 text-light regFormPart" onSubmit={handleSubmit}>
                <div className="text-center fs-3 mb-1 titleTop">{title}Export Date Range</div>
                <Form.Group className="col-md-6 mb-2" controlId="formFromDate">
                    <Form.Label>From Date</Form.Label>
                    <Form.Control type="date" name="fromDate" value={postValues.fromDate} onChange={handleChange} />
                    <Form.Text className="text-danger">{errorValues.fromDate}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6 mb-2" controlId="formToDate">
                    <Form.Label>To Date</Form.Label>
                    <Form.Control type="date" name="toDate" value={postValues.toDate} onChange={handleChange} />
                    <Form.Text className="text-danger">{errorValues.toDate}</Form.Text>
                </Form.Group>
                   
                <Button type="button" onClick={getDetails}>View</Button> &emsp;
                <Button type="submit">Export</Button><br /><br />
                <div style={{ overflow: "auto", "whiteSpace": 'nowrap' }}>
                    <ShowDetails details={details} expType={expType} />
                </div>
            </Form>
            <div className="p-5"></div>
        </div>
    );
}

const ShowDetails = ({ details, expType }) => {
    try {
        if (!details)
            return ("");
        if (details.length === 0)
            return ("");
        switch (expType) {
            case 1: //Premium Membership application
                return (
                    <>
                        <Table variant="dark" hover>
                            <thead>
                                <tr>
                                    <th>Appl. No.</th>
                                    <th>Inst. Name</th>
                                    <th>Category</th>
                                    <th>Estd. Date</th>
                                    <th>University</th>
                                    <th>Address</th>
                                    <th>Principal Name</th>
                                    <th>Principal Email</th>
                                    <th>Principal Phone</th>
                                    <th>POC Name</th>
                                    <th>POC Email</th>
                                    <th>POC Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map(item => {
                                        return (
                                            <tr key={item["Appl No"]}>
                                                <td>{item["Appl No"]}</td>
                                                <td>{item["Inst Name"]}</td>
                                                <td>{item["Category"]}</td>
                                                <td>{item["Est Date"]}</td>
                                                <td>{item["University"]}</td>
                                                <td>{item["Address"]}</td>
                                                <td>{item["Princ Name"]}</td>
                                                <td>{item["Princ Email"]}</td>
                                                <td>{item["Princ Phone"]}</td>
                                                <td>{item["POC Name"]}</td>
                                                <td>{item["POC Email"]}</td>
                                                <td>{item["POC Phone"]}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </>
                );
            case 2: //Corporate Membership application
                return (
                    <>
                        <Table variant="dark" hover>
                            <thead>
                                <tr>
                                    <th>Name of organisation</th>
                                    <th>Address</th>
                                    <th>Website</th>
                                    <th>Head of Org.</th>
                                    <th>Nature of org.</th>
                                    <th>Type of company</th>
                                    <th>Corporate ID</th>
                                    <th>GSTN</th>
                                    <th>Date of incorp</th>
                                    <th>POC Name</th>
                                    <th>POC Email</th>
                                    <th>POC Phone</th>
                                    <th>Tech skills used</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item["Org Name"]}</td>
                                                <td>{item["Address"]}</td>
                                                <td>{item["Website"]}</td>
                                                <td>{item["Org Head"]}</td>
                                                <td>{item["Nature of org"]}</td>
                                                <td>{item["Type of company"]}</td>
                                                <td>{item["Corporate ID"]}</td>
                                                <td>{item["GSTN"]}</td>
                                                <td>{item["Date of incorp"]}</td>
                                                <td>{item["POC Name"]}</td>
                                                <td>{item["POC Email"]}</td>
                                                <td>{item["POC Phone"]}</td>
                                                <td>{item["Tech skills used"]}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </>
                );
            case 3: //Partnership application
                return (
                    <>
                        <Table variant="dark" hover>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email ID</th>
                                    <th>Phone</th>
                                    <th>Estd Date</th>
                                    <th>Address</th>
                                    <th>District</th>
                                    <th>Office Space</th>
                                    <th>No. of employees</th>
                                    <th>Brief Report</th>
                                    <th>Expectation from partnership</th>
                                    <th>Promoter profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item["Full Name"]}</td>
                                                <td>{item["Email ID"]}</td>
                                                <td>{item["Phone"]}</td>
                                                <td>{item["Est Date"]}</td>
                                                <td>{item["Address"]}</td>
                                                <td>{item["District"]}</td>
                                                <td>{item["Office Space in Sq m"]}</td>
                                                <td>{item["No of employees"]}</td>
                                                <td>{item["Brief Report"]}</td>
                                                <td>{item["Expectation from partnership"]}</td>
                                                <td>{item["Promoter profile"]}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </>
                );
            case 4: //Contact us messages
                return (
                    <>
                        <Table variant="dark" hover>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email ID</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.message}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </>
                );
                case 5: //Course Reg. Apllications
                return (
                    <>
                        <Table variant="dark" hover>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email ID</th>
                                    <th>Mobile No.</th>
                                    <th>Date of Birth</th>
                                    <th>Course Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item["Email ID"]}</td>
                                                <td>{item["Mobile No"]}</td>
                                                <td>{item["Date of Birth"]}</td>
                                                <td>{item["Course Name"]}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </>
                );
            default:
                return ("");
       
        }
    } catch (error) {
        return ("");
    }
}

export default DateRange;