import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import "./NavigationBar.css";
import Cuaca from "./Weather";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" fixed="top" variant="dark" id="beranda">
        <Container>
          <Navbar.Brand className="logo">CITARUM HARUM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="col" id="navbarNavAltMarkup">
              <Nav className="justify-content-center">
                <Nav.Link className="nav text-white">Beranda</Nav.Link>
                <Nav.Link className="nav text-white">Data Informasi</Nav.Link>
                <Nav.Link className="nav text-white">Informasi Air</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="WebDesc">
        <Col sm={6} className="textBox col-6">
          <h1>Solusi dalam menanggulangi pencemaran air di Sungai Citarum dan mencegah terjadinya banjir</h1>
        </Col>
        <Col sm={6} className="WeatherBox col-6">
          <Cuaca />
        </Col>
      </Row>
    </div>
  );
};

export default NavigationBar;
