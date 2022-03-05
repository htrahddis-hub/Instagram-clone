import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import {getProfile} from '../../api/user.js';

const Login = (props) => {
  const [username, setUsername] = React.useState();
  const navigate= useNavigate();

  const handleLogin=(event)=>{
    const data=getProfile(username);
    data.then((data)=>{
      if(data.length > 0){
        props.setAlert({variant: "success", message: "Successfully logged in!"});
        props.setUser(data[0].username);
        navigate('/');
      }
      else{
        props.setAlert({
          variant: "danger",
          message: "No user with that username exists!",
        });
      }
    }).catch((err)=> props.setAlert({ variant: "danger", message: err.message}));
  }

  return (
    <Form className='center-form'>
      <Form.Group className='mb-4'>
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type='text' 
          placeholder="Username" 
          onInput={(event)=>{setUsername(event.target.value)}}
        />
        <small  className='form-text text-muted'>
          Don't have an account? Sign up <Link to='/sign-up'>here</Link>
          </small>
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick= {handleLogin}
      >Login</Button>
    </Form>
  )
}

export default Login;