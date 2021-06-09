import useMediaQuery from "hooks/useMediaQuery";
import Image from "next/image";
import React from "react";
import { Container } from "styled-bootstrap-grid";
import { SRoadmap } from "../styled";

const listRoadMap = [
  {
    time: "April, 2021",
    text: "Research Polygon, DeFi and PolyRocket ecosystem",
  },
  {
    time: "May, 2021",
    text: (
      <div>
        <p>
          - Complete PolyRocket website, whitepaper, smart contract and other
          documents
        </p>
        <p>- Smart Contract Security Audit</p>
        <p>- Launch Private Sale round at the end of May</p>
      </div>
    ),
  },
  {
    time: "June, 2021",
    text: (
      <div>
        <p>
          - Complete Private Sale at the first 2 weeks of June and update
          information
        </p>
        <p>- Promote marketing activities before IDO</p>
        <p>- Launch IDO and complete in June</p>
      </div>
    ),
  },
  { time: "Quarter I/2022", text: "Launch PolyRocket v2" },
  {
    time: "Quarter IV/2021",
    text: (
      <div>
        <p>
          - Expand PolyRocket ecosystem, ensuring risk management and compliance
          frame
        </p>
        <p>- Launch PolyRocket iOS and Android mobile app</p>
      </div>
    ),
  },
  {
    time: "Quarter III/2021",
    text: (
      <div>
        <p>- Launch Pre-sale platform</p>
        <p>
          - Launch the function supporting startups to connect to VCs, KOLs and
          experts
        </p>
        <p>- Launch a system of Token and LP Token Staking</p>
      </div>
    ),
  },
];

export default function Roadmap() {
  const { width } = useMediaQuery();
  return (
    <SRoadmap id="roadmap">
      <Container>
        <div className="roadmap-wrap">
          <div className="roadmap">
            <h1 className="roadmap-title" data-aos="fade-up" data-aos-delay="0">
              Roadmap
            </h1>
            <p className="roadmap-text" data-aos="fade-up" data-aos-delay="200">
              Important development milestones of PolyRocket
            </p>
          </div>
          <div className="roadmap-content">
            {width < 992 ? null : (
              <div className="img">
                <img src="/images/roadmap-line-2.png" alt="line roadmap" />
              </div>
            )}

            <div className="list-roadmap">
              {listRoadMap.map((item, index) => (
                <div
                  className={`roadmap-item ${index === 0 && "current"}`}
                  key={index}
                  data-aos="fade-down"
                  data-aos-delay={(index + 3) * 100}
                >
                  <p className="roadmap-item__text">{item.text}</p>
                  <span className="roadmap-item__time">{item.time}</span>
                  <span className="roadmap-item__marker"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SRoadmap>
  );
}
