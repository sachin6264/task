import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
const Header = () => {
  return (
    <div>
      <div className="border shadow">
        <Navbar collapseOnSelect expand="lg" bg="light" className="p-3">
          <Container>
            <Navbar.Brand>
              Task <span className="text-danger">.....</span>
            </Navbar.Brand>
            <NavbarCollapse id="responsive-navbar-nav bg-dark">
              <Nav className="me-auto ">
                <Nav.Link>
                  <Link className="text-dark" to={"/"}>
                    home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="text-dark" to={"/"}>
                    servce
                  </Link>
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
