import styled from "@emotion/styled";

import { loadingRing } from "../../styles/global";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8257e6;
  min-height: 100vh;
  width: 100%;
`;

export const LoadingWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${loadingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #00b37e transparent transparent transparent;

    &:first-of-type {
      animation-delay: -0.45s;
    }

    &:nth-of-type(2) {
      animation-delay: -0.3s;
    }

    &:last-of-type {
      animation-delay: -0.15s;
    }
  }
`;
