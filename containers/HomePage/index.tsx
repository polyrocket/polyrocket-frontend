import React from "react";
import { SHomePage } from "./styled";
import About from "./About";
import Banner from "./Banner";
import NewsPaper from "./NewsPaper";
import Roadmap from "./Roadmap";
import System from "./System";
import Team from "./Team";
import Partners from "./Partners";

export default function HomePage() {
  return (
    <SHomePage>
      <Banner />
      <About />
      <System />
      <Team />
      <Roadmap />
      <NewsPaper />
      <Partners />
    </SHomePage>
  );
}
