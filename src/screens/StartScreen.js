/* eslint-disable no-console */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import plainLogo from '../pics/plainLogo.svg'
import leftLeaf from '../pics/leftLeaf.svg'
import rightLeaf from '../pics/rightLeaf.svg'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  :focus {
    background: ${props => props.buttonColor};
    color: white;
  }
`
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
let buttonColor = 'white'

export default class StartScreen extends Component {
  state = {
    questionsHidden: true,
    answerHidden: true,
  }

  showQuestion() {
    this.setState({ questionsHidden: false })
  }

  showAnswer() {
    this.setState({ answerHidden: false })
    buttonColor = 'red'
  }

  showRightAnswer() {
    this.setState({ answerHidden: false })
    buttonColor = 'green'
  }

  render() {
    return (
      <StyledDiv>
        <StyledLLeaf src={leftLeaf} alt="leftLeaf" />
        <StyledRLeaf src={rightLeaf} alt="rightLeaf" />
        <StyledD>d</StyledD>

        <img src={plainLogo} alt="plainLogo" />

        <p>Möchtest du eine Quizfrage beantworten?</p>

        <div>
          <StyledButton onClick={() => this.showQuestion()}>Ja</StyledButton>
          <Link to="/nutrition">
            <StyledButton>Nein</StyledButton>
          </Link>
        </div>

        <div hidden={this.state.questionsHidden}>
          <p>Was enthält mehr Eisen?</p>

          <StyledAnswer
            buttonColor={buttonColor}
            onClick={() => this.showAnswer()}
          >
            Brokkoli
          </StyledAnswer>

          <StyledAnswer
            buttonColor={buttonColor}
            onClick={() => this.showRightAnswer()}
          >
            Spinat
          </StyledAnswer>

          <StyledAnswer
            buttonColor={buttonColor}
            onClick={() => this.showAnswer()}
          >
            Paprika
          </StyledAnswer>
        </div>

        <div hidden={this.state.answerHidden}>
          <p>
            <b>Spinat</b> enthält mit 3,4 mg sogar
            <br />
            mehr Eisen als Paprika (0,4 mg) und Brokkoli (0,8 mg) zusammen!
          </p>
          <Link to="/nutrition">
            <StyledButton style={{ width: '52px' }}>Weiter</StyledButton>
          </Link>
        </div>
      </StyledDiv>
    )
  }
}
