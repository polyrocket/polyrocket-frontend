import styled from "styled-components";

export const Styles = styled.div`
  position: relative;
  z-index: 10;
  color: #333333;
  
  .module {
    padding-bottom: 150px;
    padding-top: 70px;
    max-width: 800px;
    margin: 0 auto;
    display: block;

    .module-header {
      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 60px;
        position: relative;
        color: #333333;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 40px;

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
      .news-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        margin: 0 -18px;
        padding: 0;

        li {
          font-size: 20px;
          line-height: 30px;
          color: #4f4f4f;
          padding: 0 18px;
          position: relative;
          &:last-child {
            &:after {
              display: none;
            }
          }
          &:after {
            content: url(/images/new_list_arrow.png);
            display: block;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(50%, -50%);
          }
          a {
            color: #4f4f4f;
            font-weight: bold;
            text-decoration: unset;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .module-content {
      padding-top: 120px;
      padding-bottom: 15px;
      .img {
        position: relative;

        margin-bottom: 45px;

        z-index: 1;
        &:after {
          height: 120px;
          background: #7986fc;
          width: 100%;
          content: "";
          display: block;
          position: absolute;
          bottom: -19px;
          right: -24px;
          z-index: -1;
        }
        img {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
        }
        .date-time {
          position: absolute;
          width: 56px;
          top: -13px;
          left: 29px;
          height: 59px;
          background: #7986fc;
          &:before {
            content: "";
            display: block;
            border-bottom: 0;
            border-top: 14px solid #7986fc;
            border-right: 28px solid transparent;
            border-left: 28px solid transparent;
            position: absolute;
            top: 100%;
            right: 0%;
          }
          &:after {
            content: "";
            display: block;
            border-bottom: 0;
            border-left: 0;
            border-top: 14px solid transparent;
            border-right: 9px solid #3b49c8;
            position: absolute;
            top: 0;
            right: 100%;
          }
          .day {
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            color: #ffffff;
            width: 100%;
            text-align: center;
            display: block;
            position: relative;
            padding-top: 5px;
            padding-bottom: 4px;
            margin-bottom: 1px;
            &:after {
              position: absolute;
              width: 24px;
              height: 2px;
              content: "";
              display: block;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              background: #ffffff;
            }
          }
          .month {
            font-size: 16px;
            line-height: 24px;
            color: #ffffff;
            display: block;
            text-align: center;
          }
        }
      }
      .text {
        .title {
          font-size: 24px;
          line-height: 36px;
          color: #222222;
          margin-bottom: 16px;
          font-weight: bold;
          text-align: left;
        }
        p {
          font-size: 16px;
          line-height: 24px;
          color: #4f4f4f;
          margin-bottom: 24px;
          text-align: justify;
        }
        ul {
          list-style-type: none;
          padding-left: 40px;
          li {
            padding-left: 36px;
            text-align: justify;
            position: relative;
            margin-bottom: 24px;
            &:after {
              width: 16px;
              height: 16px;
              content: "";
              display: block;
              border: 3px solid #bcc3fd;
              background: #7986fc;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 50%;
            }
          }
        }
        .quote {
          max-width: 1017px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 65px;
          position: relative;
          font-style: italic;
          font-size: 16px;
          line-height: 24px;
          color: #828282;
          &:after {
            content: url(/images/quote.png);
            display: block;
            position: absolute;
            top: 0;
            left: 10px;
          }
        }
      }
    }
    .module-bottom {
      border-top: 1px dashed #bcc3fd;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      align-items: center;
      flex-wrap: wrap;
      .head {
        p {
          display: flex;
          align-items: center;
          position: relative;
          img {
            margin-right: 16px;
            top: -2px;
          }
        }
      }
      .content {
        display: flex;
        p {
          display: flex;
          align-items: center;
          position: relative;
          margin-right: 32px;

          img {
            margin-right: 16px;
            top: -2px;
          }
        }
        .social {
          margin: 0 -10px;
          ul {
            li {
              display: inline-block;
            }
          }
          a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: #e6c9fb;
            text-align: center;
            font-size: 16px;
            line-height: 28px;
            border-radius: 50%;
            padding: 0;
            z-index: 10;
            transition: all 0.3s;
            border: 0px solid #e6c9fb;
            box-shadow: unset;
            color: #7986fc;
            font-weight: bold;
            margin: 10px;
            border: 6px solid #e6c9fb;
            cursor: pointer;
            position: relative;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              path {
                fill: #7986fc;
              }
            }

            &:hover {
              background: #7533e2;
              border: 6px solid #e6c9fb;
              svg {
                path {
                  fill: #ffffff;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .module {
      padding-bottom: 70px;
      .module-content {
        padding-top: 70px;
        .img {
          &:after {
            right: -10px;
            bottom: -10px;
          }
        }
      }
      .module-bottom {
        .head {
          padding-bottom: 10px;
          padding-top: 10px;
        }
        .content {
          p {
            margin-right: 10px;
          }
          .social {
            margin: 0 -5px;
            a {
              margin: 5px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 479px) {
    .module {
      .module-header {
        .title {
          font-size: 30px;
          margin-bottom: 12px;
        }
      }
    }
  }
`;
export const ItemStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 12px 20px rgba(189, 189, 189, 0.26);
  border-radius: 10px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  margin-bottom: 30px;
  top: 0;
  position: relative;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 12px 40px rgba(189, 189, 189, 0.36);
    top: -20px;
    &:after {
      content: "";
      display: block;
      height: 20px;
      width: 100%;
      top: 100%;
      left: 0;
      position: absolute;
    }
    .newspaper-item {
      &__title {
        color: #7986fc;
      }
    }
  }
  .newspaper-item {
    &__img {
    }
    &__content {
      padding: 24px;
      min-height: 240px;
    }
    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 16px;
      color: #4f4f4f;
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

  @media only screen and (max-width: 479px) {
    .newspaper-item__content {
      padding: 16px;
      min-height: unset;
      padding-bottom: 30px;
    }
  }
`;
