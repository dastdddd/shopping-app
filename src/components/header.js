import React, { useState } from "react";
import category from "../category";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({
  filterDiscountProduct,
  productAll,
  filterCategory,
  searchProduct,
}) => {
  
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //event.preventDefault() - не обновляется страница
    searchProduct(value);
    //searchProduct-берем функцию чз пропс
    setValue("");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={productAll} href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={productAll} href="#home">
              Home
            </Nav.Link>
            <Nav.Link onClick={filterDiscountProduct} href="#link">
              Акции
            </Nav.Link>
            <NavDropdown title="категория" id="basic-nav-dropdown">
              {category.map((item) => (
                <NavDropdown.Item
                  onClick={() => filterCategory(item.id)}
                  key={item.id}
                >
                  {item.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="search"
          />
          <button type="submit">search</button>
        </form>
      </Container>
    </Navbar>
  );
};

export default Header;
