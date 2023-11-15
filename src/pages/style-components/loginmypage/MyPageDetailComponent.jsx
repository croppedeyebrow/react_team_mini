import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 80rem; /* 변경: 1280px / 16px = 80rem */
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: auto;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Items = styled.div`
  &.present {
    display: flex;
    justify-content: space-around;
    border-radius: 1.5rem;
    align-items: center;
    width: 37.5rem;
    height: 7.5rem;
    background-color: white;
    margin-top: 5rem;
    box-shadow: 0px 0.5rem 1.8rem rgba(0, 0, 0, 0.19);
    overflow: hidden;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 1rem;
      font-weight: 600;
      height: 100%;
      width: 100%;
      cursor: pointer;
      &:active {
        box-shadow: inset 0px 1rem 0.5rem rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
      }
      p {
        font-size: 1.875rem;
        font-weight: 800;
        margin: 0px;
      }
    }
  }
  .one {
    width: 16rem;
    height: 100%;
  }
  .two {
    width: 20rem;
    height: 100%;
  }
  .three {
    width: 10rem;
    height: 100%;
  }
  .four {
    width: 16rem;
    height: 100%;
  }
  .five {
    width: 16rem;
    height: 100%;
  }

  &.detail {
    margin-top: 2rem;
    width: 80rem;
    height: 46.25rem;
    background-color: rgb(250, 250, 250);
    border-radius: 1.5rem;
    box-shadow: 0px 3rem 3rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    .Header {
      width: 100%;
      height: 6rem;
      background-color: #f5ce26;
      display: flex;
      position: relative; // 추가
      z-index: 1; // 추가
      .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px 1rem 1rem #d94d4d55;
      }

      div {
        position: relative; // 추가
        z-index: 2; // 추가
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 600;
      }
    }
    .contents {
      display: flex;
      width: 100%;
    }
  }
  &.3 {
  }
  &.4 {
  }
  &.5 {
    div {
      p {
      }
    }
  }
  &.6 {
    div {
      &.setting {
      }
    }
  }
`;

export const Button = styled.button``;

export const Input = styled.input``;
