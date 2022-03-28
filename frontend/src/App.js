import React from 'react';
import { Route, Routes, Link, useLocation ,Navigate} from 'react-router-dom';
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
      {location.pathname!=='/login' && location.pathname!=='/sign-up'?<nav className="p-2 mb-3 border-bottom fixed-top blur">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <span className="fs-4 me-4">Instagram</span>
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 link-secondary">Feed</Link></li>
              <li><Link to='/search'  className="nav-link px-2 link-dark">Search</Link></li>
              <li><Link to="/create-post" className="nav-link px-2 link-dark">New Post</Link></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control search" placeholder="Search..." aria-label="Search" />
            </form>

            {user ? <div className="dropdown text-end">
              <Link to="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={user.photo?user.photo.asset.url:"https://i0.wp.com/www.dc-hauswartungen.ch/wp-content/uploads/2018/01/dummy_profile.png"} alt="mdo" width="30" className="rounded-circle" />
              </Link>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><Link className="dropdown-item" to={"/profile/"+user.username}>Profile</Link></li>
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
