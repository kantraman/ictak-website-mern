import React, { useEffect ,useState} from 'react';
import {Card , CardGroup , Row , Col ,Button, Offcanvas} from 'react-bootstrap';
import axios from 'axios';
import {useDispatch , useSelector} from "react-redux";
import { deleteCourceAction, listCource } from '../actions/courceActions';
import { Link } from 'react-router-dom';
import "./Cources.css";
import Topbar from '../components/Dashboard/topbar/Topbar';
import Sidebar from '../components/Dashboard/sidebar/Sidebar';
import { HamburgerIcon } from '@chakra-ui/icons';

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
  const [show, setShow] = useState(false);
  //Offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
       <Topbar />
      <div className="d-grid w-100">
        <Button variant="primary"  onClick={handleShow} className='d-flex align-items-center ml-4'>
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
      <Link to="/CreateCource">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Add new Course
        </Button>
      </Link>

      <Row>
        {cource?.map((cource) => (
          <Col md={3} key={cource._id} style={{ marginBottom: "20px" }}>
            <CardGroup className="courseCard">
              <Card>
                <img
                  src="data:image/jpeg;base64,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"
                  alt={cource.title}
                  className="cardImg"
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
                  <Card.Text className="cardtext">
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
                    Read More...
                  </a>
                </Card.Body>
                <div style={{ marginBottom: "20px" }}>
                  <Button href={`/cource/${cource._id} `}>Edit</Button>
                  <Button
                    varient="danger"
                    className="mx-2"
                    onClick={() => deleteCource(cource._id)}
                  >
                    Delete
                  </Button>

                  <Button href={`/registerScreen?course=${cource.title}`}>Apply Now</Button>
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