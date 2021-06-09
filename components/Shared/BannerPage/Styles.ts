import styled from "styled-components";

export const Styles = styled.div`
  background-image: url(/images/banner_page.jpg);
  background-position: top center;
  background-size: 100%;
  background-repeat: no-repeat;
  img {
    width: 100%;
    opacity: 0;
  }
  @media only screen and (max-width: 991px) {
    height: 330px;
    background-size: 991px;
  }
  @media only screen and (max-width: 479px) {
    height: 300px;
    background-size: 900px;
  }
`;
