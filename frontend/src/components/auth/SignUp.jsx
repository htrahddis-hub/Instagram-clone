import React from "react";
import { Form, Button } from 'react-bootstrap';
import { createUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import '../../css/SignUp.css';

const SignUp = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const navigate = useNavigate();

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const updateLastName = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = (event) => {
    const data = createUser(JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      username: username
    }));
    data.then((data) => {
      data.json().then((data) => {
        props.setAlert({
          variant: 'success',
          message: 'Your aacount has been created'
        })
        props.setUser(data.username);
        navigate('/');
      })
    })
  }

  return (
    <Form className="sign-up-form">
      <Form.Group class='mb-2 w-25'>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" onInput={updateUsername} />
      </Form.Group>
      <Form.Group class='mb-2 w-25'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onInput={updateFirstName} />
      </Form.Group>
      <Form.Group class='mb-4 w-25'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onInput={updateLastName} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>Create Account</Button>
    </Form>
  )
}

export default SignUp;