import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import "./Artikel.css";
import bnpb from "../assets/BNPB.png";
import bmkg from "../assets/BMKG.png";
import bps from "../assets/BPS.png";
import petabencana from "../assets/PetaBencana.jpg";
const Artikel = () => {
  return (
    <div className="DataInfo">
      <h2 className="textDataInfo text-center">DATA INFORMASI</h2>
      <Container>
        <Row>
          <Col sm={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={bnpb} className="card__background text-center" style={{ width: "10rem" }} />
              <Card.Body className="card__body">
                <Card.Title>Geoportal Data Bencana (BNPB)</Card.Title>
                <Card.Text>Menyediakan data, informasi, dan teknologi geospasial dalam manajemen bencana: mitigasi, persiapan, respo, dan pemulihan bencana dalam menyokong BNPB dan komunitas manajemen bencana di Indonesia.</Card.Text>
                <Button variant="info" className="btn-primary" href="https://gis.bnpb.go.id/">
                  Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={bmkg} className="card__background text-center" style={{ width: "10rem" }} />
              <Card.Body className="card__body">
                <Card.Title>Prakiraan Cuaca (BMKG)</Card.Title>
                <Card.Text>BMKG mempunyai tugas : melaksanakan tugas pemerintahan di bidang Meteorologi, Klimatologi, Kualitas Udara dan Geofisika sesuai dengan ketentuan perundang-undangan yang berlaku.</Card.Text>
                <Button variant="info" className="btn-bmkg" href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg">
                  Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={bps} className="bps card__background text-center" style={{ width: "10rem" }} />
              <Card.Body className="card__body">
                <Card.Title>Banyaknya Desa/Kelurahan Menurut Jenis Bencana Alam dalam Tiga Tahun Terakhir (Desa)</Card.Title>
                <Card.Text>Melaksanakan tugas pemerintahan dibidang statistik sesuai peraturan perundang-undangan.</Card.Text>
                <Button variant="info" className="btn-bps" href="https://www.bps.go.id/indicator/168/954/1/banyaknya-desa-kelurahan-menurut-jenis-bencana-alam-dalam-tiga-tahun-terakhir.html">
                  Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={petabencana} className="petabencana card__background text-center" style={{ width: "10rem" }} />
              <Card.Body className="card__body">
                <Card.Title>PetaBencana.id</Card.Title>
                <Card.Text>PetaBencana.id memanfaatkan penggunaan media sosial dalam situasi darurat untuk mengumpulkan, menyortir, dan menampilkan informasi risiko secara waktu-nyata (real-time).</Card.Text>
                <Button variant="info" className="btn btn-petabencana" href="https://petabencana.id/">
                  Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Artikel;
