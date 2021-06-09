import React from "react";
import { Styles, ItemStyles } from "./Styles";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "styled-bootstrap-grid";

import Facebook from "../../../components/icons/facebook";
import Twitter from "../../../components/icons/twitter";
import Instagram from "../../../components/icons/instagram";

const NewsList = () => {
  return (
    <Styles>
      <Container>
        <div className="module">
          <div className="module-header">
            <p className="title" data-aos="fade-up" data-aos-delay="0">
              News Detail
            </p>
            <ul className="news-list" data-aos="fade-up" data-aos-delay="200">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>News Detail</li>
            </ul>
          </div>
          <div
            className="module-content"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="img">
              <img src="/images/details_img.jpg" alt="" />
              <div className="date-time">
                <span className="day">20</span>
                <span className="month">Jan</span>
              </div>
            </div>
            <div className="text">
              <p className="title">
                Pay for purchases directly with your cryptocurrency
              </p>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuriesy. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuriesy. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuriesy
              </p>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuriesy
              </p>
              <ul>
                <li>Dummy text of the printing</li>
                <li>Dummy text of the printing of the text</li>
                <li>Dummy text printing</li>
              </ul>
              <p className="title">
                Pay for purchases directly with your cryptocurrency
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuriesy
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuriesy. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuriesy. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuriesy
              </p>
              <p className="quote">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry when an unknown printer took a galley of type and
                scrambled. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry when an unknown printer took a galley of
                type and scrambled...
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuriesy. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuriesy. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuriesy. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuriesy
              </p>
            </div>
          </div>
          <div className="module-bottom">
            <div className="head">
              <p data-aos="fade-left" data-aos-delay="0">
                <img src="/images/icon_writer.png" alt="" />
                Posted by: Admin
              </p>
            </div>
            <div className="content">
              <p data-aos="fade-right" data-aos-delay="600">
                <img src="/images/icon_share.png" alt="" />
                Share:
              </p>
              <div className="social">
                <ul>
                  <li data-aos="fade-right" data-aos-delay="400">
                    {" "}
                    <a href="#">
                      <Facebook />
                    </a>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <a href="#">
                      <Twitter />
                    </a>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="0">
                    <a href="#">
                      <Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default NewsList;
