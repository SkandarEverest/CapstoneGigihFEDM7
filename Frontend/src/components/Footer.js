import { Image, Button, Row, Col, Container } from "react-bootstrap";
import "./Footer.css";
import copyright from "../assets/copyright.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import gigih from "../assets/GG.png";
import yabb from "../assets/yabb.png";

const Footer = () => {
  return (
    <>
      <Row>
        <Col sm={2} className="group1 mx-5">
          <Button variant="dark" href="https://drive.google.com/drive/folders/1REseJB41KhN-3NbVCYuPKtrZTP8Ry_V1" className="progressbutton ">
            Our Progress
          </Button>
          <Image src={copyright} alt="copyright" className="copyright center" />
        </Col>
        <Col>
          <div className="group2 ">
            <div className="NamesOfGroup row">
              <h6 className="fw-bold">Zafira Galea</h6>
              <p>KMG2FE5023</p>
              <p>
                <a href="#">
                  <Image src={mail} className="mail" />
                </a>
                <a href="https://www.linkedin.com/in/zafira-galea/">
                  <Image src={linkedin} className="linkedin" />
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="group2 ">
            <div className="NamesOfGroup row">
              <h6 className="fw-bold">M Firman H</h6>
              <p>KMG2FE5023</p>

              <p>
                <a href="#">
                  <Image src={mail} className="mail" />
                </a>
                <a href="https://www.linkedin.com/in/zafira-galea/">
                  <Image src={linkedin} className="linkedin" />
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="group2 ">
            <div className="NamesOfGroup row">
              <h6 className="fw-bold">Fadhil Rausyanfikr</h6>
              <p>KMG2FE5023</p>

              <p>
                <a href="#">
                  <Image src={mail} className="mail" />
                </a>
                <a href="https://www.linkedin.com/in/zafira-galea/">
                  <Image src={linkedin} className="linkedin" />
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="group2 ">
            <div className="NamesOfGroup row">
              <h6 className="fw-bold">Ruth Calista P S</h6>
              <p>KMG2FE5023</p>
              <p>
                <a href="#">
                  <Image src={mail} className="mail" />
                </a>
                <a href="https://www.linkedin.com/in/zafira-galea/">
                  <Image src={linkedin} className="linkedin" />
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="group2 ">
            <div className="NamesOfGroup row">
              <h6 className="fw-bold">Lia Nur Halimah</h6>
              <p>KMG2FE5023</p>
              <p>
                <a href="#">
                  <Image src={mail} className="mail" />
                </a>
                <a href="https://www.linkedin.com/in/zafira-galea/">
                  <Image src={linkedin} className="linkedin" />
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col>
            <div className="garisBawah "></div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={2}>
            <Image src={gigih} className="gigihImage mt-3" />
          </Col>
          <Col sm={2}>
            <Image src={yabb} className="yabbImage mt-4" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
