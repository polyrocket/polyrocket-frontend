import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { SAbout } from "../styled";
import ImgAbout from "./ImgAbout";

export default function About() {
  return (
    <SAbout id="about">
      <Container>
        <ImgAbout data-aos="fade-right" data-aos-delay="700" />
        <Row>
          <Col col={6}></Col>
          <Col col={6}>
            <div className="about-wrap" data-aos="fade-right">
              <h2 className="about-title">Built by Startups, for Startups</h2>
              <p className="about-text">
              With many years of experience in supporting to launch crypto projects, we want to build up PolyRocket - a platform that helps crypto startups remove difficulties in the Pre-sale period, and is expected to make a breakthrough with outstanding features as follows:
              </p>
              <ul className="about-list">
                <li className="about-list__item">
                  Stake PRT/MATIC or other tokens to get token of pre-sale projects
                </li>
                <li className="about-list__item">
                  Small KOLs/ influencers: contribute to marketing activities to get a chance of using USDT to buy tokens of pre-sale projects
                </li>
                <li className="about-list__item">
                Liquidity providers: Provide liquidity to PRT pair or other pairs to get token of pre-sale project
                </li>
              </ul>
              <p className="about-text">
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </SAbout>
  );
}
