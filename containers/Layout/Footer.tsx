import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Youtube,
  Pinterest,
  Twitter,
  Location,
  Email,
  Phone,
} from "components/icons";

export default function Footer() {
  return (
    <SFooter id="contact">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} col={12}>
              <div
                className="footer-social"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <div className="logo">
                  <Image
                    src="/images/logo.svg"
                    alt="Logo of PolyRocket"
                    width={200}
                    height={55}
                  />
                </div>
                <p className="content">
                  PolyRocket aims to build up a pioneering all-in-one Pre-sale
                  platform - a rocket for crypto startups.
                </p>
                <ul className="list-social">
                  <li className="social-item">
                    <a href="#">
                      <Facebook />
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="#">
                      <Twitter />
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="#">
                      <Instagram />
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="#">
                      <Youtube />
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="#">
                      <Pinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} col={12}>
              <div
                className="footer-contact"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h2 className="footer-title">Contact</h2>
                <ul className="list-contact">
                  <li className="contact-item">
                    <div className="contact-item__icon">
                      <Location />
                    </div>
                    <p className="contact-item__name">
                      Lorem ipsum dolor sit amet, consy ect etur adipisc de
                      elit. Quisque act
                    </p>
                  </li>
                  <li className="contact-item">
                    <div className="contact-item__icon">
                      <Email />
                    </div>
                    <p className="contact-item__name">Your email address</p>
                  </li>
                  <li className="contact-item">
                    <div className="contact-item__icon">
                      <Phone />
                    </div>
                    <p className="contact-item__name">(+84) 123 456 789</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} col={12}>
              <div
                className="footer-subcribe"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <h2 className="footer-title">Subcribe</h2>
                <p className="content">
                  Subscribe to get the latest information of PolyRocket.
                </p>
                <div className="input-subcribe">
                  <label
                    style={{
                      width: 0,
                      height: 0,
                      display: "block",
                      overflow: "hidden",
                    }}
                    htmlFor="subcribe-email"
                  >
                    email
                  </label>
                  <input
                    id="subcribe-email"
                    type="text"
                    name="email"
                    placeholder="Enter your email..."
                  />
                  <button className="submit">subcribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <p className="footer-copyright" data-aos="fade-left" data-aos-delay="600">
        Copyright © 2021, PolyRocket. All trademarks and copyrights belong to
        their respective owners.
      </p>
    </SFooter>
  );
}

const SFooter = styled.footer`
  padding-top: 120px;
  background: linear-gradient(69.39deg, #072382 6.13%, #67046c 100.55%);
  overflow: hidden;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  .footer-copyright {
    padding-top: 138px;
    text-align: center;
    padding-bottom: 20px;
  }

  .footer-title {
    position: relative;
    margin-bottom: 62px;
    margin-top: 0;

    &::after {
      position: absolute;
      content: "";
      width: 32px;
      height: 4px;
      background: #ffffff;
      border-radius: 0px 0px 8px 8px;
      transform: rotate(-180deg);
      bottom: -16px;
      left: 0;
    }
  }
  .footer-social {
    .logo {
      margin-bottom: 38px;
    }
    p.content {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 38px;
    }
    ul.list-social {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;

      li.social-item {
        a {
          width: 40.5px;
          height: 40.5px;
          background: #e6c9fb;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 12px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.3s;
          border: 4px solid #e6c9fb;
          svg {
            fill: #7986fc;
          }
          &:hover {
            border: 4px solid #e6c9fb;
            background: #7533e2;
            svg {
              fill: white;
            }
          }
        }
      }
    }
  }

  //contact
  .footer-contact {
    ul.list-contact {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li.contact-item {
      display: flex;
      margin-bottom: 30px;
    }

    p.contact-item__name {
      padding: 0;
      margin: 0;
    }

    .contact-item__icon {
      margin-right: 22px;
      svg {
        fill: #b283ff;
      }
    }
  }

  // subcribe
  .footer-subcribe {
    .content {
      margin-bottom: 26px;
    }
    .input-subcribe {
      width: 100%;
      position: relative;
      height: 44px;
      background: #ffffff;
      border: 1px solid rgba(230, 201, 251, 0.33);
      box-sizing: border-box;
      border-radius: 40px;

      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;

      input {
        all: unset;
        height: 100%;
        width: calc(100% - 140px);
        /* color: black; */
        color: #7986fc;
        padding-left: 12px;
        padding-right: 10px;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
      }

      .submit {
        position: absolute;
        border: none;
        width: 120px;
        height: 40px;
        right: 2px;
        top: 1px;
        /* background: #7932ec; */
        background: #b283ff;
        border-radius: 30px;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-transform: capitalize;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 991px) {
    .footer-title {
      margin-top: 32px;
    }
  }
`;
