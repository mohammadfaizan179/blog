import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/Images/logo.png';
import { useNavigate, NavLink, Navigate, useLocation } from 'react-router-dom'
import styles from "../Styles/navbar.module.css";
import { getToken, removeToken } from '../services';
import {useEffect} from 'react'

function MyNavbar() {
  const {access} = getToken()
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state ? state.from.pathname : '/';

  const logoutUser = () =>{
    removeToken();

    // navigate(from, { replace: true }); // <-- redirect
    // <Navigate to="/signin" replace={true} state={{ from: location }} />
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="60"
              height="35"
              className="d-inline-block align-top"
              alt="Navbar logo"
            /> {'  '}
            Blog Time
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link> <NavLink className={styles.navLinkItem} to="/"> Home </NavLink></Nav.Link>
            <Nav.Link> <NavLink className={styles.navLinkItem} to="/blogs"> Blog </NavLink></Nav.Link>
            <Nav.Link> <NavLink className={styles.navLinkItem} to="/categories"> Categories </NavLink></Nav.Link>
            <Nav.Link> <NavLink className={styles.navLinkItem} to="/contact-us"> Contact Us </NavLink></Nav.Link>
            {
              access ? (
                <>
                  <Nav.Link> <NavLink className={styles.navLinkItem} to="/dashboard"> Dashboard </NavLink></Nav.Link>
                  <Nav.Link> <NavLink className={styles.navLinkItem} onClick={logoutUser}> Logout </NavLink></Nav.Link>
                </>
              ):(
                <>
                  <Nav.Link> <NavLink className={styles.navLinkItem} to="/sign-up"> Sign Up </NavLink></Nav.Link>
                  <Nav.Link> <NavLink className={styles.navLinkItem} to="/login"> Login </NavLink></Nav.Link>
                </>
              )
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;  