import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { getProfile } from '../../api/user.js';

const Login = (props) => {
  const [username, setUsername] = React.useState();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    const data = getProfile(username);
    console.log(username);
    data.then((data) => {
      if (data.length > 0) {
        props.setAlert({ variant: "success", message: "Successfully logged in!" });
        props.setUser(data[0].username);
        navigate('/');
      }
      else {
        props.setAlert({
          variant: "danger",
          message: "No user with that username exists!",
        });
      }
    }).catch((err) => props.setAlert({ variant: "danger", message: err.message }));
  }

  return (
    <section class="vh-100 ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-5 text-black mt-5">

            <div class="px-5 ms-xl-4">
              <span class="h1 fw-bold mb-0 font ">Instagram</span>
            </div>

            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-xl-0 mt-xl-n5">

              <form style={{ width: "23rem" }}>

                <h3 class="fw-normal mb-3 pb-2 h2" style={{ letterSpacing: '1px' }}>Log in</h3>

                <div class="form-outline mb-1">
                  <input type="email" id="form2Example18" class="form-control form-control-lg" onInput={(event)=>{setUsername(event.target.value)}}/>
                  <label class="form-label" for="form2Example18">Email address or username</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="password" id="form2Example28" class="form-control form-control-lg" disabled/>
                  <label class="form-label" for="form2Example28">Password</label>
                </div>

                <div class="pt-1 mb-1">
                  <button class="btn btn-info btn-lg btn-block mb-5" type="button" onClick={handleLogin}>Login</button>
                </div>

                
                <p>Don't have an account? <a href="/sign-up" class="link-info">Register here</a></p>

              </form>

            </div>

          </div>
          <div class="col-sm-6 px-0 d-none d-sm-block">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://images.freeimages.com/images/large-previews/fa1/the-spirit-of-sxc-1199620.jpg" alt="Login image" class="w-100 vh-100 py-5" style={{ objectFit: "cover", objectPosition: "left" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://images.freeimages.com/images/large-previews/c0d/girls-at-christmas-tree-1239755.jpg" alt="Login image" class="w-100 vh-100 py-5" style={{ objectFit: "cover", objectPosition: "left" }} />
                </div>
                <div class="carousel-item">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" class="w-100 vh-100 py-5" style={{ objectFit: "cover", objectPosition: "left" }} />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;