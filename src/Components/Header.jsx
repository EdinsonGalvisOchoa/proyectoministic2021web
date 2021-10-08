import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../logo.svg';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="App">
        <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand><Link to="/Home">
            <img src={logo} width="40px" height="40px" />{' '}
            SuricataTeam</Link>
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            <Nav>
                <NavDropdown title="Products">
                <NavDropdown.Item href="/Ventas">Ventas</NavDropdown.Item>
                <NavDropdown.Item href="/Productos">Productos</NavDropdown.Item>
                <NavDropdown.Item href="/Usuarios">Usuarios</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/SobreNosotros">Sobre Nosotros</Nav.Link>
                <Nav.Link href="/Contactenos">Contactenos</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}
    export default Header;