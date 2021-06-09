import React, { useState } from "react";
import { Container } from "styled-bootstrap-grid";
import styled from "styled-components";
import Image from "next/image";
import usePosition from "hooks/usePosition";
import useMediaQuery from "hooks/useMediaQuery";
import { Menu, Close } from "components/icons";
import Link from "next/link";

export default function Header() {
  const { y } = usePosition();
  const { width } = useMediaQuery();
  const [openMobile, setopenMobile] = useState(false);

  return (
    <SHeader id="header" className={`${y > 100 ? "scroll" : ""}`}>
      <Container>
        <div className="header-wrap">
          <div className="logo" data-aos="fade-up" data-aos-delay="0">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo of PolyRocket"
                width={185}
                height={45}
              />
            </Link>
          </div>
          {width < 768 ? (
            <span
              onClick={() => {
                setopenMobile(true);
              }}
              className="icon-menu"
            >
              <Menu />
            </span>
          ) : (
            ""
          )}

          <ul className={`list-nav ${openMobile ? "mobile" : ""}`}>
            {width < 768 ? (
              <span
                onClick={() => {
                  setopenMobile(false);
                }}
                className="icon-close"
              >
                <Close />
              </span>
            ) : (
              ""
            )}
            <li className="nav-item" data-aos="fade-up" data-aos-delay="100">
              <a href="#banner" className="nav-item__link active">
                Home
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="nav-item__link">
                About
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="300">
              <a href="#system" className="nav-item__link">
                System
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="400">
              <a href="#team" className="nav-item__link">
                Team
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="500">
              <a href="#roadmap" className="nav-item__link">
                Roadmap
              </a>
            </li>
            <li className="nav-item" data-aos="fade-up" data-aos-delay="600">
              <a href="#contact" className="nav-item__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </SHeader>
  );
}

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 11;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.scroll {
    background-color: rgb(0, 0, 0, 30%);
    .header-wrap {
      height: 70px;
    }
  }

  ul.list-nav {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;
    align-items: center;
  }

  .header-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 92px;
    align-items: center;
  }

  .nav-item {
    margin-left: 26px;
    transition: all 0.3s ease, width 0s;

    &:hover {
      a {
        font-weight: 600;
      }
    }

    &__link {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-decoration: none;
      color: #ffffff;
    }
  }

  @media (max-width: 767px) {
    .list-nav {
      opacity: 0;
      z-index: -99;
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
      position: fixed;
      width: 100vw;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgb(0, 0, 0, 85%);
      flex-direction: column;
      justify-content: center;
      visibility: hidden;

      &.mobile {
        visibility: visible;
        opacity: 1;
        z-index: 12;

        li.nav-item {
          padding: 12px;
          width: 100%;
          text-align: center;
        }

        .icon-close {
          /* border: 1px solid; */
          padding: 10px;
          position: absolute;
          top: 25px;
          right: 25px;
          z-index: 12px;
        }
      }
    }

    .icon-menu,
    .icon-close {
      cursor: pointer;
      svg {
        height: 25px;
        width: 25px;
        * {
          fill: #ffffff;
          stroke: #ffffff;
        }
      }
    }
  }
`;
