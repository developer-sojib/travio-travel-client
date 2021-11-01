import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoImg from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth.js";
import "./header.css";

const Header = () => {
  const { AllContexts } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, photoURL, email } = user;
  return (
    <div className="">
      <Navbar style={{ backgroundColor: `#061A3A` }} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="90px" src={logoImg} alt="Logo" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                <b>Home</b>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white">
                <b>About</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/packages" className="text-white">
                <b>Packages</b>
              </Nav.Link>


              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    <b>Sign Up</b>
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    <b>Log in</b>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/dashboard"
                    className="text-white"
                  >
                    <b>Dashboard</b>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact" className="text-white">
                    <b>Contact</b>
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center">
                      <h6>{displayName}</h6>
                      <p className="m-0 mb-2">{email}</p>
                      <button onClick={logOut} className="btn btn-primary">
                        <b>Sign Out</b>
                      </button>
                    </div>
                  </NavDropdown>
                </>
              )}
              <Nav.Link as={HashLink} to="/admin" className="text-white">
                <b>Admin Panel</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
