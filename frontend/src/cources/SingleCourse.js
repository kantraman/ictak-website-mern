import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function SingleCourse({ match, history }) {
  const [title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  let courseId = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/cource/${courseId.id}`);

      setTitle(data.title);
      setDescription(data.Description);
      setDate(data.updatedAt);
    };

    fetching();
  }, [courseId.id, date]);


  return (
    <div>
      <Card>
        <Card.Header> Cource Details</Card.Header>
        <div>
          <p>{title}</p>
          <p>{Description}</p>
          <button href="/Cources">Back</button>
        </div>
      </Card>
    </div>
  );
}

export default SingleCourse;
