/* eslint-disable no-console */
import React, { Component } from 'react'
//import logo from '../pics/plannedtritionLogo.svg'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import plainLogo from '../pics/plainLogo.svg'
import d from '../pics/brownD.svg'
import leftLeaf from '../pics/leftLeaf.svg'
import rightLeaf from '../pics/rightLeaf.svg'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(white, #50e379, white);
`

const StyledButton = styled.button`
  background: white;
  border: solid black 1px;
  width: 42px;
  height: 32px;
  margin: 5px 5px 22px;
  border-radius: 5px;
`
const StyledAnswer = styled.button`
  background: white;
  border: solid 1px black;
  border-radius: 5px;
  margin-top: 10px;
  width: 170px;
  padding: 5px 0 5px;
`

const StyledD = styled.img`
  position: relative;
  top: 37px;
  left: 11px;
`
const StyledLLeaf = styled.img`
  position: relative;
  top: 63px;
  right: 2px;
  animation: moveRLeaf 3s linear 1s infinite alternate;

  @keyframes moveRLeaf {
    100% {
      transform: rotate(-12deg);
      transform-origin: bottom right;
      transition: transform 1s ease-in;
    }
  }
`
const StyledRLeaf = styled.img`
  position: relative;
  top: 40px;
  left: 36px;
  animation: moveLeaf 3s linear 1s infinite alternate;

  @keyframes moveLeaf {
    0% {
      transform: rotate(15deg);
      transform-origin: bottom left;
      transition: transform 1s ease-in;
    }
  }
`

let question = 'test'

export default class StartScreen extends Component {
  showQuestion() {
    console.log(question)
    return question === ''
      ? (question = 'Was enthält mehr Eisen?')
      : (question = '')
  }

  render() {
    return (
      <StyledDiv>
        {/* <img src={logo} alt="plannedtritionLogo" /> */}
        <StyledLLeaf src={leftLeaf} alt="leftLeaf" />
        <StyledRLeaf src={rightLeaf} alt="rightLeaf" />
        <StyledD src={d} alt="d" />
        <img src={plainLogo} alt="plainLogo" />

        <p>Möchtest du eine Frage beantworten?</p>

        <details>
          <summary>
            <StyledButton onClick={() => this.showQuestion()}>Ja</StyledButton>
            <Link to="/nutrition">
              <StyledButton>Nein</StyledButton>
            </Link>
          </summary>

          <p>Was enthält mehr Eisen?</p>
          <StyledAnswer>Spinat</StyledAnswer>
          <StyledAnswer>Brokkoli</StyledAnswer>
          <StyledAnswer>Paprika</StyledAnswer>
        </details>
      </StyledDiv>
    )
  }
}
