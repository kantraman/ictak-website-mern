import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form } from "react-bootstrap";
import { createCourceAction } from "../actions/courceActions";
import { useNavigate } from "react-router-dom";



function CreateCource({ a }) {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [courseError , setError] = useState(false);


  const dispatch = useDispatch();

  const courceCreate = useSelector((state) => state.courceCreate);
  const { loading, error, cource } = courceCreate;
  const navigate = useNavigate();

  // console.log(cource)
    
  

  const submitHandler = (e) => {
    e.preventDefault();
      setError(false);

    dispatch(createCourceAction(title,Description));
    if (!title || !Description){

      setError(true);
    }else{
    navigate("/Cources");
    }

  };

  useEffect(() => {}, []);

  return (
    <div>
      <Card>
        <Card.Header>Create a new cource</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={Description}
                placeholder="Enter the Description"
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Create cource
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          {/* Creating on - {new Date().toLocalDateString()} */}
        </Card.Footer>

        {courseError && <p style={{color:'red'}}>failed to create course.</p>}
      </Card>
    </div>
  );
}

export default CreateCource;
