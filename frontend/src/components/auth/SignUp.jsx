import React from "react";
import { Form, Button } from 'react-bootstrap';
import { createUser } from "../../api/user";
import { useNavigate } from "react-router-dom";

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
      props.setAlert({
        variant: 'success',
        message: 'Your aacount has been created'
      })
      props.setUser(data.username);
      navigate('/');
    })
  }

  return (
    // <Form className="center-form">
    //   <Form.Group class='mb-2 w-25'>
    //     <Form.Label>Username</Form.Label>
    //     <Form.Control type="text" placeholder="Username" onInput={updateUsername} />
    //   </Form.Group>
    //   <Form.Group class='mb-2 w-25'>
    //     <Form.Label>First Name</Form.Label>
    //     <Form.Control type="text" placeholder="First Name" onInput={updateFirstName} />
    //   </Form.Group>
    //   <Form.Group class='mb-4 w-25'>
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control type="text" placeholder="Last Name" onInput={updateLastName} />
    //   </Form.Group>
    //   <Button variant="primary" type="button" onClick={handleSubmit}>Create Account</Button>
    // </Form>
    <section class="vh-100 bg-image " style={{ backgroundColor: "#eee", backgroundImage: "url('https://images.freeimages.com/images/large-previews/13e/blue-sky-sea-1379815.jpg')" }}>
      <div class="container h-100 ">
        <div class="row d-flex justify-content-center align-items-center h-100 ">
          <div class="col-lg-10 col-xl-9 ">
            <div class="card text-black gradient-custom-3" style={{ borderRadius: "25px" }}>
              <div class="card-body md-5 ">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-4 font">Instagram</p>
                    <p class="text-center h4 fw-bold mb-4 mx-1 mx-md-4 ">Sign up</p>

                    <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" placeholder="Username" onInput={updateUsername} />

                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" placeholder="First name" onInput={updateFirstName} />

                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control" placeholder="Last name" onInput={updateLastName} />

                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control" placeholder="Password" disabled/>

                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-5">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control" placeholder="Confirm Password" disabled/>

                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                      </div>
                      <p class="text-center text-muted mt-3 mb-0">Have already an account? <a href="/login" class="link-info"><u>Login here</u></a></p>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;