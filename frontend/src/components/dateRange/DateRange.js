import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DateRange = (props) => {
    const expType = props.type;
    const initValues = {
        fromDate: formatDate(new Date(Date.now()).toLocaleDateString("en-UK")),
        toDate: formatDate(new Date(Date.now()).toLocaleDateString("en-UK"))
    }
    const token = localStorage.getItem("token");
    //Set initial dates
    const [postValues, setPostValues] = useState(initValues);
    const [errorValues, setErrorValues] = useState({});

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

        if (!postValues.fromDate)
            errorValues.fromDate = "From date is required";
        if (!postValues.toDate)
            errorValues.toDate = "To date is required";
        if (isNaN(new Date(fromDate).getTime())) {
            isValid = false;
            errorValues.fromDate = "Invalid from Date";
        }
        if (isNaN(new Date(toDate).getTime())) {
            isValid = false;
            errorValues.toDate = "Invalid to Date";
        }
        if (isValid) {
            if (new Date(fromDate).getMilliseconds() > new Date(toDate).getMilliseconds()) {
                errorValues.fromDate = "From date cannot be greater than to date";
            }
        }
        
        return errorValues;
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
            <Navbar />
            <Form className="mx-auto col-lg-6 col-md-8 col-sm-10 p-3 mt-5 text-light regFormPart" onSubmit={handleSubmit}>
                <div className="text-center fs-3 mb-1 titleTop">Export Date Range</div>
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
                <Button type="submit">Submit</Button>
            </Form>
            <Footer />
        </div>
    );
};

export default DateRange;