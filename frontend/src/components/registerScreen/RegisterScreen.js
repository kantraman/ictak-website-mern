import React, { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register  } from "../../actions/userActions";
const RegisterScreen = () => {
  const navigate = useNavigate();
  const [queryCourse] = useSearchParams();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile_number,setMobileNumber] = useState("");
  const [date_of_birth,setDateOfBirth] = useState("");
  const [gender,setGender] = useState("");
  const [course_name,setCourseName] = useState(queryCourse.get("course"));
  const [amount,setAmount] = useState("")
  const [message, setMessage] = useState(null);
  const [courseError, setError] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.courseUserRegisterReducer);
  const {loading, error } = userRegister;
                                                                                                                        
  const submit = async (e) => {
    e.preventDefault();
    dispatch(register(name, email,mobile_number,date_of_birth,gender,course_name,amount)) ;
    if (!name || !email || !mobile_number || !date_of_birth || !gender || !course_name || !amount ) {
      setError(true);
    } else {
      window.alert(`Application for ${course_name} Registration submitted successfully.`);
      navigate("/Cources");
    }
    
  };
  
  return (
    <div
      title="Register"
      style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
      size="lg"
    >
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="mobile_number"
            placeholder="number"
            value={mobile_number}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="Date"
            placeholder="date_of_birth"
            value={date_of_birth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="gender"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="course_name"
            placeholder="course_name"
            value={course_name}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="amount"
            placeholder="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Row className="py-3"></Row>
    </div>
  );
};

export default RegisterScreen;
