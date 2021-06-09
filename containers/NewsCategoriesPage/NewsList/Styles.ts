import styled from "styled-components";

export const Styles = styled.div`
  position: relative;
  z-index: 10;
  .module {
    padding-bottom: 150px;
    padding-top: 70px;
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
    }
    .module-bottom {
      padding-top: 50px;
      ul {
        padding: -10px;
        margin: 0;
        list-style-type: none;
        text-align: center;

        li {
          display: inline-block;
          width: 44px;
          height: 44px;
          background: #e6c9fb;
          text-align: center;
          font-size: 16px;
          line-height: 32px;
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

          &:hover {
            background: #7533e2;
            border: 6px solid #e6c9fb;
            color: #fff;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .module {
      .module-content {
        padding-top: 70px;
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
  a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
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
