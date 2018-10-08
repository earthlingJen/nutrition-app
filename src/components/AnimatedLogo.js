import React, { Component } from 'react'
import styled from 'styled-components'
import plainLogo from '../pics/plainLogo.svg'
import leftLeaf from '../pics/leftLeaf.svg'
import rightLeaf from '../pics/rightLeaf.svg'

const StyledD = styled.span`
  position: relative;
  font-family: 'Futura';
  color: brown;
  font-size: 42px;
  top: 48px;
  left: 11px;
  opacity: 1;
  animation: brownD 2s;
  animation-direction: reverse;

  @keyframes brownD {
    100% {
      opacity: 0;
    }
  }
`

const StyledLLeaf = styled.img`
  position: relative;
  top: 82px;
  right: 3px;
  opacity: 1;
  animation: moveLLeaf 3s linear 1s infinite alternate, growL 4s reverse;

  @keyframes moveLLeaf {
    0% {
      transform: rotate(-12deg);
      transform-origin: bottom right;
      transition: transform 1s ease-in;
    }
  }

  @keyframes growL {
    100% {
      opacity: 0;
      transform: scale(0.1) translate(25%, 20%);
      transform-origin: bottom right;
      transition: transform 1s ease-in;
    }
  }
`
const StyledRLeaf = styled.img`
  position: relative;
  top: 60px;
  left: 35px;
  opacity: 1;
  animation: moveRLeaf 3s linear 1s infinite alternate, growR 4s reverse;

  @keyframes moveRLeaf {
    0% {
      transform: rotate(15deg);
      transform-origin: bottom left;
      transition: transform 1s ease-in;
    }
  }
  @keyframes growR {
    100% {
      opacity: 0;
      transform: scale(0.1) translate(-25%, 50%);
      transform-origin: bottom left;
      transition: transform 1s ease-in;
    }
  }
`

export default class AnimatedLogo extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledLLeaf src={leftLeaf} alt="leftLeaf" />
        <StyledRLeaf src={rightLeaf} alt="rightLeaf" />
        <StyledD>d</StyledD>

        <img src={plainLogo} alt="plainLogo" />
      </React.Fragment>
    )
  }
}
