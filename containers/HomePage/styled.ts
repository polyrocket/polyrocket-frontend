import styled from "styled-components";

export const SHomePage = styled.div``;

export const SBanner = styled.div`
  /* padding-top: 92px; */
  position: relative;
  overflow: hidden;
  height: 1003px;
  margin-bottom: -80px;

  #img-banner {
    position: absolute;
    width: 1920px;
    top: 0;
    z-index: -1;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }

  .banner-content {
    margin-top: 312px;
    max-width: 580px;
    padding-bottom: 250px;
    color: #ffffff;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 64px;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
      margin-bottom: 20px;

      .key {
        color: #00c2ff;
      }
    }
    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 30px;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
    }
    .get-start {
      width: 240px;
      height: 56px;
      border: none;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 40px;
      background: #ffffff;
      border-radius: 333px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
      cursor: pointer;
      color: #833fe8;
      transition: all 0.2s;

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        top: 8px;
        left: 8px;
        background: linear-gradient(117.59deg, #3d00ba -26.35%, #ce00ff 75.66%);
      }
      &:hover {
        box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.6);
      }
    }
  }

  @media (max-width: 1199px) {
    .banner-content {
      margin-top: 10%;
      margin-left: 12%;
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    height: 864px;
    #img-banner {
      position: absolute;
      width: 1670px;
      display: block;
      height: auto;
    }
  }
  @media (max-width: 991px) {
    height: 728px;
    padding-top: 80px;

    background: linear-gradient(69.39deg, #1c3ca8 6.15%, #87238c 100.55%);
    #img-banner {
      z-index: 0;
      position: absolute;
      width: 1143px;
      display: block;
      top: 0;
      height: auto;
    }
    .banner-content {
      z-index: 1;
      position: relative;
      margin-left: 0;
      background: rgba(0, 0, 0, 0.6);
      padding: 32px;
      max-width: 100%;
      border-radius: 20px;
    }
  }
  @media (max-width: 767px) {
    padding-top: 20px;
    .banner-content {
      margin-top: 140px;
      .banner-content__title {
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
`;

export const SAbout = styled.div`
  position: relative;
  /* height: 1000px; */
  color: rgba(51, 51, 51, 1);
  padding-top: 180px;
  overflow: hidden;
  /* padding-bottom: 244px; */
  padding-bottom: 150px;

  #img_about {
    position: absolute;
    top: 89px;
    left: 50%;
    transform: translateX(-91%);
    z-index: -1;
    max-width: 50%;
  }

  .about-wrap {
    .about-title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      position: relative;
      padding-bottom: 10px;
      margin-bottom: 22px;
      &:after {
        content: "";
        width: 32px;
        height: 4px;
        background: #7533e2;
        border-radius: 8px 8px 0px 0px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      /* identical to box height, or 150% */
    }
    .about-text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 34px;
    }
    .about-list {
      list-style: none;
      padding: 0;
      margin: 0;
      padding-left: 30px;
      margin-bottom: 38px;

      &__item {
        position: relative;
        margin-bottom: 22px;

        &::after {
          position: absolute;
          content: "";
          width: 10px;
          height: 10px;
          background: #7986fc;
          transform: matrix(-1, 0, 0, 1, 0, 0);
          top: 0;
          left: -25px;
          border-radius: 50%;
          box-shadow: 0 0 0px 3px #bcc3fd;
        }
      }
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 100px;
    #img_about {
      top: 200px;
    }
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-top: 97px;
    padding-bottom: 50px;
    #img_about {
      top: 250px;
      width: 493px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding-top: 97px;
    padding-bottom: 50px;
    #img_about {
      top: 0;
      width: auto;
      position: relative;
      max-width: 95%;
      transform: unset;
      left: unset;
    }
  }
`;

export const SSystem = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-image: url("/images/system_bg.jpg");
  padding-bottom: 80px;
  overflow: hidden;
  background-attachment: fixed;

  .system-image {
    position: relative;
    margin-top: 146px;
    margin-bottom: 250px;

    #img_system {
      max-width: 555px;
      margin: 0 auto;
      display: block;
    }

    .list-system {
      list-style: none;
      padding: 0;
      margin: 0;

      .system-item {
        display: flex;
        min-height: 80px;
        align-items: center;
        position: absolute;

        &__icon {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          background: #7986fc;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 0 10px #e6c9fb, 0 0 0 12px white;
          margin: 28px;
        }

        &__name {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: right;
          text-transform: capitalize;
        }
      }

      li.system-item.system-item__1 {
        left: 50%;
        top: -30%;
        flex-direction: column-reverse;
        transform: translateX(-50%);
      }

      li.system-item.system-item__2 {
        top: 1.8%;
        right: 4.6%;
      }

      li.system-item.system-item__3 {
        top: 35%;
        right: 1.4%;
      }

      li.system-item.system-item__4 {
        bottom: 7.2%;
        right: 2.1%;
      }

      li.system-item.system-item__5 {
        bottom: -29.5%;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
      }

      li.system-item.system-item__6 {
        bottom: 7.2%;
        left: 5.7%;
        flex-direction: row-reverse;
      }

      li.system-item.system-item__7 {
        flex-direction: row-reverse;
        bottom: 41%;
        left: 7.5%;
      }

      li.system-item.system-item__8 {
        top: 2.4%;
        left: 7.9%;
        flex-direction: row-reverse;
      }
    }
  }

  .system {
    text-align: center;
    max-width: 800px;
    display: block;
    margin: 0 auto;
    padding-top: 134px;
    padding-bottom: 80px;

    &-title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      margin-bottom: 31px;
      position: relative;

      &:before {
        position: absolute;
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 102.35px;
        height: 102.35px;
        background: #b283ff;
        filter: blur(56px);
      }

      &:after {
        content: "";
        width: 32px;
        height: 4px;
        background: #fff;
        border-radius: 8px 8px 0px 0px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &-text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .system-image {
      #img_system {
        max-width: 421px;
      }
      .list-system {
        li {
          &.system-item {
            &.system-item__1 {
              top: -36%;
            }
            &.system-item__5 {
              bottom: -37%;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .system {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .system-image {
      margin-bottom: 165px;
      #img_system {
        max-width: 421px;
      }
      .list-system {
        li {
          &.system-item {
            flex-wrap: wrap;
            justify-content: center;

            .system-item__icon {
              width: 55px;
              height: 55px;
              box-shadow: 0 0 0 3px #e6c9fb, 0 0 0 5px white;
              margin: 12px;
            }

            .system-item__name {
              width: 100%;
              text-align: center;
            }

            &.system-item__1 {
              top: -36%;
            }
            &.system-item__2 {
              top: -3.2%;
              right: -1.4%;
            }
            &.system-item__3 {
              top: 34%;
              right: -4.6%;
            }
            &.system-item__4 {
              bottom: -4%;
              right: -1.9%;
            }
            &.system-item__5 {
              bottom: -37%;
            }
            &.system-item__6 {
              bottom: -3.8%;
              left: 0.5%;
            }
            &.system-item__7 {
              bottom: 32%;
              left: 0.4%;
            }
            &.system-item__8 {
              top: -1.6%;
              left: 0.6%;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .system {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .system-text {
      text-align: justify;
    }
    .system-image {
      margin-bottom: 0;
      margin-top: 0;
      #img_system {
        display: none;
      }
      .list-system {
        display: table;
        margin-left: auto;
        margin-right: auto;
        li {
          &.system-item {
            &.system-item__1,
            &.system-item__2,
            &.system-item__3,
            &.system-item__4,
            &.system-item__5,
            &.system-item__6,
            &.system-item__7,
            &.system-item__8 {
              .system-item__icon {
                margin-right: 30px;
              }
              flex-direction: row;
              position: relative;
              top: 0;
              left: 0;
              transform: unset;
              bottom: 0;
            }
            &.system-item {
              .system-item__name {
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
`;

export const STeam = styled.div`
  color: #333333;
  background-image: url("/images/team-bgr.png");
  padding-top: 130px;
  padding-bottom: 70px;
  overflow: hidden;

  .team-top {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 80px;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      position: relative;

      &:before {
        position: absolute;
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 85.76px;
        height: 85.76px;
        background: #f78f1e;
        filter: blur(76px);
      }

      &:after {
        content: "";
        width: 32px;
        height: 4px;
        background: #7533e2;
        border-radius: 8px 8px 0px 0px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-top: 34px;
    }
  }

  .team-members {
    .member-avatar__svg {
      position: absolute;
      width: 0;
      height: 0;
    }
    .member {
      text-align: center;
      max-width: 240px;
      margin: 0 auto;
      padding: 12px 20px;
      margin-bottom: 80px;
      /* transition: all 0.1s ease-in-out; */

      &:hover {
        background: rgb(238 238 239);
        border-radius: 8px;
        cursor: pointer;
      }

      &-avatar {
        background-size: cover;
        clip-path: url("#member-avatar__clip-path");
        background: #7986fc;
        background-image: url("/images/member-fallback.png");
        background-repeat: no-repeat;
        background-position-y: 25px;
        background-position-x: 18px;

        .img-avatar {
        }
      }

      &-name {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #4f4f4f;
        margin-top: 32px;

        &:hover {
          color: #6563ff;
        }
      }

      &-position {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        color: #828282;
      }

      &-social {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 24px;
        padding-top: 24px;

        &__link {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #d3d1d8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
          border: 4px solid #d3d1d8;
          cursor: pointer;
          transition: all 0.3s;

          svg {
            width: 17px;
            height: 17px;
          }

          &:hover {
            border: 4px solid #e6c9fb;
            background: #7533e2;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
`;

export const SRoadmap = styled.div`
  /* height: 1000px; */
  padding-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("images/roadmap-bgr.png");
  overflow: hidden;
  background-attachment: fixed;
  background-position: bottom center;

  .roadmap-wrap {
    position: relative;
    .roadmap-content {
      position: relative;
      z-index: 1;
    }

    .roadmap {
      padding-top: 154px;
      padding-bottom: 60px;
      text-align: center;

      h1.roadmap-title {
        margin-bottom: 25px;
        padding-bottom: 20px;
        position: relative;
        &:before {
          position: absolute;
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          width: 102.35px;
          height: 102.35px;
          background: #b283ff;
          filter: blur(56px);
        }

        &:after {
          content: "";
          width: 32px;
          height: 4px;
          background: #fff;
          border-radius: 8px 8px 0px 0px;
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .roadmap-text {
        min-height: 44px;
      }
    }

    .roadmap-line {
      /* margin-top: 224px !important; */
    }
    .img {
      position: absolute;
      top: 196px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }

    .list-roadmap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .roadmap-item {
        flex-basis: 33%;
        padding-right: 32px;
        margin-bottom: 104px;
        padding-left: 32px;
        position: relative;
        margin-top: 91px;

        &__text {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          position: absolute;
          bottom: 100%;
          width: 100%;
          padding-right: 69px;

          max-height: 130px;
          overflow: hidden;
          text-overflow: ellipsis;

          margin-bottom: 16px;
          margin-left: 12px;
        }

        &__time {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          align-items: center;
          padding-left: 16px;
          /* width: 342.13px; */
          height: 40px;
          position: relative;
          background: linear-gradient(
            89.89deg,
            #7533e2 0.08%,
            rgba(121, 134, 252, 0) 91.9%
          );
          border-radius: 4px 0px 0px 4px;

          &::after {
            position: absolute;
            content: "";
            width: 20px;
            height: 10px;
            left: 20px;
            bottom: -10px;
            background: #b188fa;
            border: 1px solid #b188fa;
            box-sizing: border-box;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: rotate(180deg);
          }
        }

        &__marker {
          height: 4px;
          width: 4px;
          background: #7986fc;
          box-shadow: 0 0 0 6px #7986fc, 0 0 0 11px #bcc3fd,
            0 -21px 0 4px #bcc3fd, 0 -34px 0 2.6px #bcc3fd,
            0 -45px 0 1.8px #bcc3fd;
          display: block;
          border-radius: 50%;
          margin-top: 63px;
          margin-left: 28px;
          margin-bottom: 15px;
        }
        p {
          margin-bottom: 5px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    padding-bottom: 100px;
    .roadmap-wrap {
      .roadmap {
        padding-top: 79px;
        padding-bottom: 37px;
      }
      .img {
        top: 200px;
        img {
          width: 920px;
        }
      }
      .list-roadmap {
        .roadmap-item {
          margin-bottom: 29px;
          margin-top: 94px;
          padding-left: 32px;
          position: relative;
        }
        .roadmap-item__text {
          position: absolute;
          bottom: 100%;
          width: 100%;
          padding-right: 69px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-bottom: 100px;
    .roadmap-wrap {
      .roadmap {
        padding-top: 79px;
        padding-bottom: 37px;
      }

      .list-roadmap {
        .roadmap-item {
          margin-bottom: 29px;
          margin-top: 94px;
          padding-left: 32px;
          position: relative;
        }
        .roadmap-item__text {
          position: absolute;
          bottom: 100%;
          width: 100%;
          padding-right: 25px;
        }
      }
    }
  }

  @media (max-width: 991px) {
    padding-bottom: 50px;
    .roadmap-wrap {
      .list-roadmap {
        flex-direction: column;
        padding-left: 24px;

        .roadmap-item {
          display: flex;
          flex-direction: column-reverse;
          margin-left: 32px;
          margin-bottom: 12px;
          margin-top: 0;
          padding: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

          &:hover,
          &.current {
            box-sizing: border-box;
            border-radius: 8px;
            background-color: rgb(135, 140, 144, 50%);

            .roadmap-item__marker {
              box-shadow: 0 0 0 5px;
            }
          }
          &::after {
            position: absolute;
            content: "";
            height: calc(100% + 80px);
            width: 3px;
            background: gray;
            left: -24px;
            top: 0;
          }

          &:last-child {
            &::after {
              height: calc(100% + 30px);
            }
          }

          &__text {
            position: relative;
            max-height: unset;
          }
          &__time {
            all: unset;
            font-size: 14px;
            font-weight: 500;

            &::after {
              display: none;
            }
          }
          &__marker {
            position: absolute;
            left: -27.2px;
            box-shadow: none;
            width: 10px;
            height: 10px;
            z-index: 1;
            top: 13px;
            margin: 0;
          }
        }
      }
    }
  }
`;

export const SNewsPaper = styled.div`
  color: black;
  padding-top: 154px;
  position: relative;

  .newspaper-content {
    position: relative;
    &:after {
      content: url(/images/news_after.svg);
      position: absolute;
      top: -80px;
      left: 50%;
      display: block;
      transform: translateX(-43px);
    }

    &:before {
      content: "";
      position: absolute;
      bottom: -100px;
      left: 95px;
      width: 56px;
      height: 56px;
      border: 10px solid #ffe8be;
      box-sizing: border-box;
      display: block;
      border-radius: 50%;
    }
  }
  .newspaper-top {
    margin-bottom: 80px;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      padding-bottom: 10px;
      position: relative;
      display: inline-block;
      margin-bottom: 0;
      &:before {
        position: absolute;
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 85.76px;
        height: 85.76px;
        background: #f78f1e;
        filter: blur(76px);
      }

      &:after {
        content: "";
        width: 32px;
        height: 4px;
        background: #7533e2;
        border-radius: 8px 8px 0px 0px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0%;
      }
    }
  }

  .newspaper-list {
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 100.53px;
      height: 100.53px;
      background: #005ed7;
      filter: blur(120px);
      bottom: 30px;
      right: 0;
      z-index: -1;
      position: absolute;
    }

    &:before {
      content: "";
      display: block;
      width: 100.53px;
      height: 100.53px;
      background: #f78f1e;
      filter: blur(120px);
      top: 30px;
      left: 0;
      z-index: -1;
      position: absolute;
    }

    .slick-list {
      margin-right: -15px;
      margin-left: -15px;
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 30px 0 50px;
      &:hover {
        overflow: unset;
        .slick-slide {
          opacity: 0;
          &.slick-active {
            opacity: 1;
          }
        }
      }
    }
    .slick-slide {
      padding-left: 15px;
      padding-right: 15px;
    }
    .slick-arrow {
      &.slick-next {
        right: 0;
        top: -134px;
      }
      &.slick-prev {
        right: 63px;
        left: unset;
        top: -108px;
      }
      width: 52px;
      height: 52px;
      background: #e6c9fb;

      border-radius: 50%;
      padding: 0;
      z-index: 10;
      transition: all 0.3s;
      position: absolute;
      border: 0px solid #e6c9fb;
      box-shadow: unset;
      position: absolute;
      &:before {
        display: none;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        path {
          transition: all 0.3s;
          fill: #7986fc;
        }
      }

      &.prev__btn {
        margin-left: 16px;
      }

      &.next__btn {
        transform: rotateY(180deg);
      }

      &:hover {
        background: #7533e2;
        border: 8px solid #e6c9fb;

        path {
          fill: #fff;
        }
      }
    }

    .newspaper-item {
      background: #ffffff;
      box-shadow: 0px 12px 20px rgba(189, 189, 189, 0.26);
      border-radius: 10px;
      max-width: 360px;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease;

      a {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0;
      }
      &:hover {
        box-shadow: 0px 12px 40px rgba(189, 189, 189, 0.36);
        transform: translateY(-20px);

        .newspaper-item__title {
          color: #7986fc;
        }
      }

      &__img {
      }
      &__content {
        padding: 24px;
        min-height: 240px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__title {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 16px;
      }
      &__text {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #4f4f4f;
        margin-bottom: 32px;
      }
      &__other {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        /* color: #828282; */
        color: #000;

        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        .newspaper-date {
          display: flex;
          margin-right: 20px;
          img {
            margin-right: 8px;
            position: relative;
            top: -2px;
          }
        }
        .newspaper-author {
          display: flex;
          img {
            margin-right: 8px;
            position: relative;
            top: -2px;
          }
        }
      }
    }

    .control {
      position: absolute;
      top: 0;
      right: 0;
      width: 52px;
      height: 52px;
      background: #e6c9fb;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &.next {
        right: 50px;
      }
      &.prev {
      }
    }
  }
  .bottom {
    text-align: center;
    .get-start {
      width: 240px;
      height: 56px;
      background: #7986fc;
      border: none;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 40px;
      border-radius: 333px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      transition: all 0.2s;
      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        top: 8px;
        left: 8px;
        background: #fff;
        svg {
          path {
            fill: #7986fc;
          }
        }
      }
      &:hover {
        box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.6);
      }
    }
  }
  @media (max-width: 767px) {
    padding-top: 56px;

    .newspaper-top {
      margin-bottom: 36px;
    }
    .newspaper-list {
      .slick-arrow {
        top: -20px !important;
      }
      .slick-arrow.slick-next {
        transform: rotate(180deg) translateY(25px) !important;
      }
      .newspaper-item {
        margin: 0 auto;
        display: block !important;
      }
    }
  }
`;

export const SPartners = styled.div`
  color: black;
  background-image: url("/images/partner-bgr.png");
  background-position: bottom;
  min-height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 158px;
  overflow: hidden;

  .partners-top {
    padding: 125px 0 56px;
    position: relative;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      text-transform: capitalize;
      color: #333333;
      text-align: center;
      padding-bottom: 10px;
      position: relative;

      /* &:before {
                    position: absolute;
                    content: "";
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                    width: 85.76px;
                    height: 85.76px;
                    background: #F78F1E;
                    filter: blur(76px);
                } */
      &:before {
        content: url(/images/banner_img_after.png);
        position: absolute;
        top: 0px;
        right: 40px;
        display: block;

        @media (max-width: 991px) {
          top: 60px;
        }
      }

      &:after {
        content: "";
        width: 32px;
        height: 4px;
        background: #7533e2;
        border-radius: 8px 8px 0px 0px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .partner-item {
    display: flex !important;
    align-items: center;
    margin: 0 16px;
    min-height: 100px;
  }
`;
