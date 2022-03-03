import React, { useState } from 'react';
// import styled from 'styled-components';
import './ContactForm.css';

// const FormStyle = styled.form`
//   width: 100%;
//   .form-group {
//     width: 100%;
//     margin-bottom: 2rem;
//   }
//   label {
//     font-size: 1.5rem;
//   }
//   input,
//   textarea {
//     width: 100%;
//     font-size: 2rem;
//     padding: 1.2rem;
//     color: var(--gray-1);
//     background-color: var(--deep-dark);
//     outline: none;
//     border: none;
//     border-radius: 8px;
//     margin-top: 1rem;
//   }
//   textarea {
//     min-height: 250px;
//     resize: vertical;
//   }
//   button[type='submit'] {
//     background-color: var(--gray-1);
//     color: var(--black);
//     font-size: 1.2rem;
//     font-weight:bold;
//     display: inline-block;
//     outline: none;
//     border: none;
//     padding: 1rem 4rem;
//     border-radius: 8px;
//     cursor: pointer;
//   }
//   p {
//     color: red;
//     font-size: 1rem;
//   }
// `;

function ContactForm() {
  const initialValues = {name:"",email:"",message:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      let formErrors = validate(formValues);
      setFormErrors(formErrors);
      if (Object.keys(formErrors).length === 0) {
        contactUsSubmit();
      }
    };

    const contactUsSubmit = async () => {
      const name = formValues.name;
      const email = formValues.email;
      const message = formValues.message;

      const response = await fetch("/api/contact/contact-us", {
        method: 'post',
        body: JSON.stringify({
          name, email, message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const body = await response.json();
      if (body.status === "Success") {
        window.alert("Message sent!");
        setFormValues(initialValues);
      } else {
        window.alert("Error! Try again!");
      }
    }

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "name is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.message) {
        errors.message = "message is required";
      } 
      return errors;
    };

    

  return (
    <div>
    <form onSubmit={handleSubmit}>
      {/* <FormStyle> */}
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <p className='error'>{formErrors.name}</p>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <p className='error'>{formErrors.email}</p>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            />
          </label>
          <p className='error'>{formErrors.message}</p>
        <button type="submit" onClick={handleSubmit}>Send</button>
        </div>

      {/* </FormStyle> */}
      </form>

    </div>
  );
}
export default ContactForm;
