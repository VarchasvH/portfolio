import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-linkedin.svg";
import navIcon2 from "../assets/img/nav-twitter.svg";
import navIcon3 from "../assets/img/nav-instagram.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <div>
      <Navbar expand='md' className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='https://linkedin.com/in/varchasvh'>
                  <img src={navIcon1} alt='' />
                </a>
                <a href='https://x.com/varchasvh'>
                  <img src={navIcon2} alt='' />
                </a>
                <a href='https://instagram.com/varchasvh'>
                  <img src={navIcon3} alt='' />
                </a>
              </div>

              <button className='vvd'>
                <Nav.Link
                  href='#connect'
                  className={
                    activeLink === "connect"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  style={{ color: "#4169e1" }}
                  onClick={() => onUpdateActiveLink("connect")}
                >
                  Contact Me
                </Nav.Link>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
