import React from "react";
import { Container } from "styled-bootstrap-grid";
import { SSystem } from "../styled";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
} from "./Icons";
import ImgSystem from "./ImgSystem";

export default function System() {
  const listSystem = [
    { icon: Icon1, name: "Cross-chain bridge" },
    { icon: Icon2, name: "Token creation" },
    { icon: Icon3, name: "Multi sig wallet" },
    { icon: Icon4, name: "Liquidity provision" },
    { icon: Icon5, name: "Token claim solution" },
    { icon: Icon6, name: "Yield farming" },
    { icon: Icon7, name: "Staking" },
    { icon: Icon8, name: "Dashboard" },
  ];
  return (
    <SSystem id="system">
      <Container>
        <div className="system">
          <h1 className="system-title" data-aos="fade-up">
            System
          </h1>
          <p className="system-text" data-aos="fade-up" data-aos-delay="200">
            PolyRocket provides an ecosystem supporting startups to raise and
            manage funds in a decentralized manner. Moreover, we accompany all
            projects along their development processes from managing funds,
            creating markets til stabilizing their values.
          </p>
        </div>
        <div className="system-image">
          <div className="img" data-aos="zoom-out" data-aos-delay="400">
            <ImgSystem />
          </div>

          <ul className="list-system">
            {listSystem.map((item, index) => (
              <li
                className={`system-item system-item__${index + 1}`}
                key={index}
              >
                <div
                  className="system-item__icon"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  {item.icon()}
                </div>
                <div
                  className="system-item__name"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </SSystem>
  );
}
