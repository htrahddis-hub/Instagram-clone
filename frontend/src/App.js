import React from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation ,Navigate} from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AllPost from './components/post/AllPost';
import CreatePost from './components/post/CreatePost';
import Profile from './components/user/Profile';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Search from './components/Search.jsx';
import AlertDissimable from './components/AlertDissimable';
import './css/App.css';

function App() {
  const [alert, setAlert] = React.useState(null);
  const [user, setUser] = React.useState('');
  const location = useLocation();
  return (
    <div className="fill-parent">
      {location.pathname!=='/login'?<nav className="p-2 mb-3 border-bottom fixed-top blur">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <span className="fs-4 me-4">Instagram</span>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 link-secondary">Feed</a></li>
              <li><a href="/search" className="nav-link px-2 link-dark">Search</a></li>
              <li><a href="/create-post" className="nav-link px-2 link-dark">New Post</a></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control search" placeholder="Search..." aria-label="Search" />
            </form>

            {user ? <div className="dropdown text-end">
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={() => { setUser(""); setAlert({ variant: 'warning', message: 'You are now signed out!' }) }}>Sign out</a></li>
              </ul>
            </div> :
              <div className="col-md-2 text-end">
                <a type="button" className="btn btn-outline-primary me-2" href='/login'>Login</a>
                <a type="button" className="btn btn-primary" href='/sign-up'>Sign-up</a>
              </div>}
          </div>
        </div>
      </nav>:null}
      {!alert || (<AlertDissimable {...alert} deleteAlert={() => setAlert(null)} />)}
      <Routes>
        <Route path='/' exact element={user?<AllPost user={user} />:<Navigate to='/login'/>} />
        <Route path='/login' element={<Login setAlert={setAlert} setUser={setUser} />} />
        <Route path='/sign-up' element={<SignUp setAlert={setAlert} setUser={setUser} />} />
        <Route path='/profile/:username' element={<Profile user={user} setAlert={setAlert} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/create-post' element={<CreatePost user={user} setAlert={setAlert} />} />
      </Routes>

    </div>
  );
}

export default App;
