import React from "react";
import { Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfileItem = (props) => {
  const navigate = useNavigate();
  return (
    <ListGroup.Item>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ">
          <img src={props.photo ? props.photo.asset.url : "/80.png"}
            style={{ width: "100%", height: "100%" }} />
          <div>
            <p className="px-2 m-0">
              <strong>{props.username}</strong>
            </p>
            <p className="px-2 m-0">
              {(props.first_name ? props.first_name : "") + " " + (props.Last_name ? props.Last_name : "")}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className="px-2">
            <strong>{props.followers} Followers</strong>
          </p>
          <Button variant="success" className="px-3 m-0" onClick={() => navigate('/profile/' + props.username)}>View</Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default ProfileItem;