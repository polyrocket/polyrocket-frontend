import { Facebook, Twitter } from "components/icons";
import Linkedin from "components/icons/linkedin";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { STeam } from "../styled";

const listMember = [
  {
    name: "DOAN DUC MANH",
    avatar: "/images/members/boss.png",
    position: "Founder",
    linkedin: "https://www.linkedin.com/in/doanducmanh/",
  },
  {
    name: "PHAM VAN TINH",
    avatar: "/images/members/atinh.png",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/tinh-pham-544204150/",
  },
  {
    name: "NGUYEN XUAN TRUONG",
    avatar: "/images/members/atruong.png",
    position: "CTO",
    linkedin: "https://www.linkedin.com/in/doanducmanh/",
  },
  {
    name: "DINH TUAN ANH",
    avatar: "/images/members/anh.png",
    position: "CMO",
    linkedin: "https://www.linkedin.com/in/dinhtuananh2807/",
  },
  {
    name: "NGUYEN THI HONG YEN",
    avatar: "/images/members/yen.png",
    position: "Lead R&D",
    linkedin: "https://www.linkedin.com/in/doanducmanh/",
  },
  {
    name: "PHAM DUC TINH",
    avatar: "/images/members/tinh.png",
    position: "Blockchain Developer",
    linkedin: "https://www.linkedin.com/in/doanducmanh/",
  },
];

export default function Team() {
  return (
    <STeam id="team">
      <Container>
        <div className="team-top">
          <h1 className="team-top__title" data-aos="fade-up" data-aos-delay="0">
            Our Team
          </h1>
          <p className="team-top__text" data-aos="fade-up" data-aos-delay="200">
            PolyRocket is an open-source project built up by a lot of global IT
            staff
          </p>
        </div>
        <div className="team-members">
          <svg className="member-avatar__svg">
            <clipPath
              id="member-avatar__clip-path"
              clipPathUnits="userSpaceOnUse"
            >
              <path d="M91.4974 182C77.2899 182 64.2439 179.569 52.7185 174.781C32.9698 166.567 16.0557 150.386 7.47805 131.474C6.88751 130.18 6.31173 128.792 5.76548 127.36C0.00770155 112.346 -1.47357 95.0772 1.48406 77.4151C5.81469 51.5395 18.9493 29.0842 37.5071 15.8167C51.7785 5.61507 69.6818 6.93507e-07 87.9394 6.93507e-07C93.5025 -0.000694721 99.0534 0.521607 104.519 1.56001C120.198 4.54717 133.45 12.549 141.841 24.0843C143.317 26.1462 144.759 28.2525 146.137 30.2948C149.193 34.8173 152.077 39.0939 155.827 43.0899C161.826 49.4874 168.622 55.1467 173.883 59.3642C179.144 63.5817 184.552 68.3552 189.326 75.3187C193.34 81.3241 196.347 87.9449 198.228 94.9197C207.76 129.363 181.84 158.831 151.309 170.15C136.757 175.563 114.563 181.985 91.5023 181.985L91.4974 182Z" />
            </clipPath>
          </svg>

          <Row>
            {listMember.map((item, index) => (
              <Col lg={4} md={4} sm={6} key={index}>
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-avatar">
                    <Image
                      className="img-avatar"
                      src={item.avatar}
                      width="170px"
                      height="170px"
                      alt="avatart of member"
                    />
                  </div>
                  <div className="member-name">{item.name}</div>
                  <div className="member-position"> {item.position} </div>
                  <div className="member-social">
                    <a href={item.linkedin} className="member-social__link">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </STeam>
  );
}
