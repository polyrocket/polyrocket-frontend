import React from "react";
import { Container } from "styled-bootstrap-grid";
import { SPartners } from "../styled";
import Slider, { Settings } from "react-slick";

export default function Partners() {
  return (
    <SPartners id="partners">
      <Container>
        <div className="partners-top" data-aos="fade-up" data-aos-delay="0">
          <h2 className="partners-top__title">Partners</h2>
        </div>
        <div className="partners-list" data-aos="fade-up" data-aos-delay="400">
          <ListPartners />
        </div>
      </Container>
    </SPartners>
  );
}

const ListPartners = () => {
  const settings: Settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 300,
  };

  const list = [
    {
      name: "An Partner of PolyRocket",
      link: "",
      img: "/images/partner-1.png",
    },
    {
      name: "An Partner of PolyRocket",
      link: "",
      img: "/images/partner-2.png",
    },
    {
      name: "An Partner of PolyRocket",
      link: "",
      img: "/images/partner-3.png",
    },
    {
      name: "An Partner of PolyRocket",
      link: "",
      img: "/images/partner-4.png",
    },
    {
      name: "An Partner of PolyRocket",
      link: "",
      img: "/images/partner-5.png",
    },
    {
      name: "An Partner of PolyRocket",
      link: "",
      img: "/images/partner-6.png",
    },
  ];

  return (
    <Slider {...settings}>
      {list.map((item, index) => (
        <div className="partner-item" key={index}>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </Slider>
  );
};
