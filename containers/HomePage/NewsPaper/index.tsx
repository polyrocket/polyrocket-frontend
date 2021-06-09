import React from "react";
import { Container } from "styled-bootstrap-grid";
import { SNewsPaper } from "../styled";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

export default function NewsPaper() {
  return (
    <SNewsPaper id="newspaper">
      <Container>
        <div className="newspaper-content">
          <div
            className="newspaper-top"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            <h2 className="newspaper-top__title">Newspaper</h2>
          </div>
          <div
            className="newspaper-list"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <SimpleSlider />
          </div>
          <div className="bottom" data-aos="fade-left" data-aos-delay="900">
            <Link href="/news-list">
              <button className="get-start">
                <span className="icon">
                  <IconGetStart />
                </span>
                Get started
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </SNewsPaper>
  );
}

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="control next" />,
    prevArrow: <PrevArrow className="control prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {Array.from({ length: 10 }, (item, index) => ({
        img: "/images/demo-paper.png",
        title: "Pay for purchases directly with your cryptocurrency",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tincidunt ultrices. Ut quis blandit dolor...",
        date: "January 20, 2020",
        auth: "Admin",
      })).map((item, index) => (
        <div className="newspaper-item" key={index}>
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
                <img src="/images/icon_personal.png" alt="" /> {item.auth}{" "}
              </div>
            </div>
          </div>
          <Link href="news/news-details">
            <a></a>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

const NextArrow = (props: any) => {
  return (
    <div
      {...props}
      className={props.className}
      style={{ transform: "rotate(180deg)" }}
    >
      <Icon />
    </div>
  );
};

const PrevArrow = (props: any) => {
  return (
    <div {...props}>
      <Icon />
    </div>
  );
};

const Icon = () => (
  <svg
    width="17"
    height="12"
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.315174 5.43431C0.00275421 5.74673 0.00275421 6.25327 0.315174 6.56569L5.40634 11.6569C5.71876 11.9693 6.22529 11.9693 6.53771 11.6569C6.85013 11.3444 6.85013 10.8379 6.53771 10.5255L2.01223 6L6.53771 1.47452C6.85013 1.1621 6.85013 0.655565 6.53771 0.343146C6.22529 0.0307264 5.71876 0.0307264 5.40634 0.343146L0.315174 5.43431ZM16.8809 5.2L0.880859 5.2V6.8L16.8809 6.8V5.2Z"
      fill="#7986FC"
    />
  </svg>
);

class IconGetStart extends React.PureComponent {
  render() {
    return (
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0983 0.876099H11.4278L16.0155 6.60902H0.191406V9.47548H16.0127L11.4278 15.2084H15.0983L20.8312 8.04082L15.0983 0.876099Z"
          fill="white"
        />
      </svg>
    );
  }
}
