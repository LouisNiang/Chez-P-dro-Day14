import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Blog from "./pages/Blog"
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <div className="m-0 p-0">
        <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand text-success fw-semibold">
                Chez Pédro
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="active text-uppercase">Home</Nav.Link>
              <Nav.Link href="/menu" className=" text-uppercase">Menu</Nav.Link>
              <Nav.Link href="/about" className=" text-uppercase">About us</Nav.Link>
              <Nav.Link href="/blog" className=" text-uppercase">Blog</Nav.Link>
              <Nav.Link href="/contact" className=" text-uppercase">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse >
            
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-body-tertiary mt-5">
          <p className="p-3 m-0 text-center">
            copyright @ made by LN-Dev_007
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
