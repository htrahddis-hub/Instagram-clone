import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
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

  return (
    <div className="fill-parent">
      <BrowserRouter>
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
          <Container fluid>
            <LinkContainer to='/'>
              <Navbar.Brand>Instagram</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <LinkContainer to='/'>
                  <Nav.Link>Feed</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/search'>
                  <Nav.Link>Search</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/create-post'>
                  <Nav.Link>New Post</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                {user ? <Navbar.Text>
                  Signed in as: <Link to={'/profile' + user}>{user}</Link> |{" "}
                  <Button
                    type='button'
                    varinat='primary'
                    onClick={() => { setUser(""); setAlert({ variant: 'warning', message: 'You are now signed out!' }) }}>
                    Logout
                  </Button>
                </Navbar.Text>
                  : <Navbar.Text>
                    <Link to='/login'>Not Signed In</Link>
                  </Navbar.Text>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {!alert || (<AlertDissimable {...alert} deleteAlert={() => setAlert(null)} />)}
        <Routes>
          <Route path='/' exact element={<AllPost user={user} />} />
          <Route path='/login' element={<Login setAlert={setAlert} setUser={setUser} />} />
          <Route path='/sign-up' element={<SignUp setAlert={setAlert} setUser={setUser} />} />
          <Route path='/profile/:username' element={<Profile user={user} setAlert={setAlert} />} />
          <Route path='/search' element={<Search />} />
          <Route path='/create-post' element={<CreatePost user={user} setAlert={setAlert} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
