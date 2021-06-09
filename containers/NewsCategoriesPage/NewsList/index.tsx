import React from "react";
import { Styles, ItemStyles } from "./Styles";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "styled-bootstrap-grid";

const NewsList = () => {
  return (
    <Styles>
      <Container>
        <div className="module">
          <div className="module-header">
            <p className="title" data-aos="fade-up" data-aos-delay="0">
              News Categories
            </p>
            <ul className="news-list" data-aos="fade-up" data-aos-delay="200">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>News Categories</li>
            </ul>
          </div>
          <div
            className="module-content"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Row>
              {Array.from({ length: 10 }, (item, index) => ({
                img: "/images/demo-paper.png",
                title: "Pay for purchases directly with your cryptocurrency",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tincidunt ultrices. Ut quis blandit dolor...",
                date: "January 20, 2020",
                auth: "Admin",
              })).map((item, index) => (
                <Col lg={4} md={6} key={index}>
                  <ItemStyles className="newspaper-item">
                    <div className="newspaper-item__img">
                      <Image
                        src={item.img}
                        width="360px"
                        height="260px"
                        alt="paper item"
                      />
                    </div>
                    <div className="newspaper-item__content">
                      <div className="newspaper-item__title">{item.title} </div>
                      <div className="newspaper-item__text">{item.title} </div>
                      <div className="newspaper-item__other">
                        <div className="newspaper-date">
                          {" "}
                          <img src="/images/icon_calendar.png" alt="" />
                          {item.date}{" "}
                        </div>
                        <div className="newspaper-author">
                          <img src="/images/icon_personal.png" alt="" />{" "}
                          {item.auth}{" "}
                        </div>
                      </div>
                    </div>
                    <Link href="/news/news-details">
                      <a></a>
                    </Link>
                  </ItemStyles>
                </Col>
              ))}
            </Row>
          </div>
          <div className="module-bottom">
            <ul className="pagination">
              <li data-aos="fade-up" data-aos-delay="0">
                1
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                2
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                3
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default NewsList;
