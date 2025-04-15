import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../assets/foto_klinik.jpg";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner_part">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} xl={5}>
            <div className="banner_text">
              <div className="banner_text_iner">
                <h5>We are here for your care</h5>
                <h1>
                  Best Care & <br /> Better Doctor
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.
                </p>
                <a href="#" className="btn_2">Make an appointment</a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="banner_img">
              <img src={bannerImg} alt="Banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
