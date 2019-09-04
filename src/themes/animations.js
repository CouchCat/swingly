import { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const animateFadeIn = css`
  animation-fill-mode: backwards;
  animation: ${fadeIn} .2s ease-out;
`;

export const fadeInOut = (transName, direction) => css`
  &.${transName}-enter {
    opacity: 0;
    ${direction}: 0%;
  }

  &.${transName}-enter-active {
    opacity: 1;
    ${direction}: 50%;
    transition: all 0.3s ease-out;
  }

  &.${transName}-exit {
    opacity: 1;
    ${direction}: 50%;
  }

  &.${transName}-exit-active {
    opacity: 0;
    ${direction}: 0%;
    transition: all 0.3s ease-out;
  }
`

export const growHeight = (transName, heightTo) => css`
  &.${transName}-enter {
    opacity: 0;
    height: 0px;
  }

  &.${transName}-enter-active {
    opacity: 1;
    height: 20rem;
    transition: all 0.3s ease-out;
  }

  &.${transName}-exit {
    opacity: 1;
    height: 20rem;
  }

  &.${transName}-exit-active {
    opacity: 0;
    height: 0px;
    transition: all 0.3s ease-out;
  }
`