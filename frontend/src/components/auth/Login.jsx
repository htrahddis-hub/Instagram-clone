import React from "react";
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../api/user.js';

const Login = (props) => {
  const [username, setUsername] = React.useState();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    const data = getProfile(username);
    //console.log(username);
    data.then((data) => {
      if (data.length > 0) {
        props.setAlert({ variant: "success", message: "Successfully logged in!" });
        props.setUser(data[0]);
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
    <section className="vh-100 ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 text-black mt-5">

            <div className="px-5 ms-xl-4">
              <span className="h1 fw-bold mb-0 font ">Instagram</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-xl-0 mt-xl-n5">

              <form style={{ width: "23rem" }}>

                <h3 className="fw-normal mb-3 pb-2 h2" style={{ letterSpacing: '1px' }}>Log in</h3>

                <div className="form-outline mb-1">
                  <input type="email" id="form2Example18" className="form-control form-control-lg" onInput={(event)=>{setUsername(event.target.value)}}/>
                  <label className="form-label" htmlFor="form2Example18">Email address or username</label>
                </div>

                <div className="form-outline mb-2">
                  <input type="password" id="form2Example28" className="form-control form-control-lg" disabled/>
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>

                <div className="pt-1 mb-1">
                  <button className="btn btn-info btn-lg btn-block mb-5" type="button" onClick={handleLogin}>Login</button>
                </div>

                
                <p>Don't have an account? <a href="/sign-up" className="link-info">Register here</a></p>

              </form>

            </div>

          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://images.freeimages.com/images/large-previews/fa1/the-spirit-of-sxc-1199620.jpg" alt="Login image" className="w-100 vh-100 py-5" style={{ objectFit: "cover", objectPosition: "left" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://images.freeimages.com/images/large-previews/c0d/girls-at-christmas-tree-1239755.jpg" alt="Login image" className="w-100 vh-100 py-5" style={{ objectFit: "cover", objectPosition: "left" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-100 vh-100 py-5" style={{ objectFit: "cover", objectPosition: "left" }} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;