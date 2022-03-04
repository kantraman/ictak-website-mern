import React, { useEffect ,useState} from 'react';
import {Card , CardGroup , Row , Col ,Button} from 'react-bootstrap';
import axios from 'axios';
import {useDispatch , useSelector} from "react-redux";
import { deleteCourceAction, listCource } from '../actions/courceActions';
import { Link } from 'react-router-dom';
import "./Cources.css";

const Cources = () => {
  const dispatch = useDispatch();

  const courceList = useSelector((state) => state.courceList);
  const { loading, cource, error } = courceList;
  
  const courceCreate = useSelector((state) => state.courceCreate);
  const { success:successCreate} = courceCreate;

  const courceUpdate = useSelector((state) => state.courceUpdate);
  const { success: successUpdate } = courceUpdate;

  const courceDelete = useSelector((state) => state.courceDelete);
  const { loading : loadingDelete , error:errorDelete , success : successDelete } = courceDelete;

  const deleteCource = (id) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(deleteCourceAction(id));
    }
  };
  useEffect(() => {
    dispatch(listCource());
  },[dispatch , successCreate , successUpdate , successDelete]);

  return (
    <div className="container">
      <Link to="/CreateCource">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Add new Cource
        </Button>
      </Link>

      <Row>
        {cource?.map((cource) => (
          <Col md={3} key={cource._id} style={{ marginBottom: "20px" }}>
            <CardGroup className="courseCard">
              <Card>
                <img
                  src="https://www.codingdojo.com/blog/wp-content/uploads/FULL-STACK-DEV-GRAPH-2.jpg"
                  alt=""
                  className="card-img-top"
                />

                <Card.Body>
                  <span
                    style={{
                      color: "Green",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                      fontStyle: "Bold",
                    }}
                  >
                    {cource.title}
                  </span>
                  <Card.Text>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 12,
                      }}
                    >
                      {cource.Description}
                    </span>
                  </Card.Text>
                  <a
                    href={`/singlecourse/${cource._id}`}
                    className="btn-btn-outline-success"
                  >
                    Read More
                  </a>
                </Card.Body>
                <div style={{ marginBottom: "20px",marginLeft:"40px" }}>
                  <Button href={`/cource/${cource._id} `}>Edit</Button>
                  <Button
                    varient="danger"
                    className="mx-2"
                    onClick={() => deleteCource(cource._id)}
                  >
                    Delete
                  </Button>
                  <div style={{ marginBottom: "20px" ,marginTop:"20px" , marginLeft:"10px"}}>
                    <Button href="/registerScreen">Register Here</Button>
                  </div>
                </div>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cources;