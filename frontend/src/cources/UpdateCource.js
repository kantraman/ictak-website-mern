import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourceAction,
  updateCourceAction,
} from "../../src/actions/courceActions";
import { useNavigate, useParams } from "react-router-dom";


function UpdateCource({ match, history }) {
  const [title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  let courseId = useParams();


  const dispatch = useDispatch();

  const courceUpdate = useSelector((state) => state.courceUpdate);
  const { loading, error } = courceUpdate;

  const courceDelete = useSelector((state) => state.courceDelete);
  const { loading: loadingDelete, error: errorDelete } = courceDelete;
 
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCourceAction(id));
    }
  };


  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/cource/${courseId.id}`);

      setTitle(data.title);
      setDescription(data.Description);
      setDate(data.updatedAt);
    };

    fetching();
  }, [courseId.id, date]);


    
  const updateHandler = async (e) => {
    e.preventDefault();
    dispatch(updateCourceAction(courseId.id,title,Description));
    if (!title || !Description) return;
    navigate("/Cources");
  };

  return (
    <div>
      <Card>
        <Card.Header>Edit Cource Details</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the Description"
                value={Description}
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Cource
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(courseId.id)}
            >
              Delete Cource
            </Button>
            <Card.Footer className="text-muted">
              {/* Updated on - {date.substring(0, 10)} */}
            </Card.Footer>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
  }

export default UpdateCource;
