import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Nav className="me-auto">
            <Link  className="nav-link" to="/array">Array</Link>
            <Link  className="nav-link" to="/objetos">Objetos</Link>
            <Link  className="nav-link" to="/hello">Hello</Link>
            <Link className="nav-link" to="/principal">Página principal</Link>
            <Link className="nav-link" to="/tabela">Tabelas</Link>
            <Link className="nav-link" to="/estados">Estados</Link>
            <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
            
            
          </Nav>

        </Container>
      </Navbar>
        <hr/>
    </>
  );
};

export default Menu;
