import React, { useEffect ,useState} from 'react';
import {Card , CardGroup , Row , Col ,Button} from 'react-bootstrap';
import axios from 'axios';
import {useDispatch , useSelector} from "react-redux";
import { listCource } from '../actions/courceActions';
import { Link } from 'react-router-dom';

const Cources = () => {
  const dispatch = useDispatch();

  const courceList = useSelector((state) => state.courceList);
  const { loading, cource, error } = courceList;
  
  const courceCreate = useSelector((state) => state.courceCreate);
  const { success:successCreate} = courceCreate;

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
    }
  };
  useEffect(() => {
    dispatch(listCource());
  },[dispatch , successCreate ]);

  return (
  

    <div className="container">
      <Link to = "/CreateCource">
      <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
        Add new Cource
      </Button>
      </Link>
      <h1>cources</h1>
      <Row>
        {cource?.map((cource) => (
          <Col md={3}>
            <CardGroup className="courseCard">
              <Card>
                <Card.Img variant="top" src={cource.image} alt="" />

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
                      {cource.description}
                    </span>
                    <div>
                      <Button href ={`/cources/${cource.id} `}>Edit</Button>
                      <Button varient="danger" className="mx-2" onClick={()=>deleteHandler(cource.id)}>
                        Delete
                      </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cources;