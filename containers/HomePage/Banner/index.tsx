import React from "react";
import { Container } from "styled-bootstrap-grid";
import { SBanner } from "../styled";
import Img from "./Img";

export default function Banner() {
  return (
    <SBanner id="banner">
      <Img />
      <Container>
        <div className="banner-content">
          <h1
            className="banner-content__title"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            Pre-sale Platform For Blockchain Startups
          </h1>
          <p
            className="banner-content__text"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            PolyRocket aims to build up a pioneering all-in-one Pre-sale platform serving as a rocket for crypto startups.

          </p>
          <div data-aos="fade-left" data-aos-delay="900">
            <button className="get-start">
              <span className="icon">
                <IconGetStart />
              </span>
              Get started
            </button>
          </div>
        </div>
      </Container>
    </SBanner>
  );
}

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
