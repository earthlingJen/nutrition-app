/* eslint-disable no-console */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AnimatedLogo from '../components/AnimatedLogo'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(white, #50e379, white);
`
const StyledSection = styled.section`
  animation: slowQuestion 4s step-end;
  opacity: 1;

  @keyframes slowQuestion {
    0% {
      opacity: 0;
    }
  }
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
        <AnimatedLogo />
        <StyledSection>
          <p>Möchtest du eine Quizfrage beantworten?</p>

          <div>
            <StyledButton onClick={() => this.showQuestion()}>Ja</StyledButton>
            <Link to="/nutrition">
              <StyledButton>Nein</StyledButton>
            </Link>
          </div>

          <div style={{ width: '330px' }} hidden={this.state.questionsHidden}>
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
              mehr Eisen als Paprika (0,4 mg) und <br />
              Brokkoli (0,8 mg) zusammen!
            </p>
            <Link to="/nutrition">
              <StyledButton style={{ width: '52px' }}>Weiter</StyledButton>
            </Link>
          </div>
        </StyledSection>
      </StyledDiv>
    )
  }
}
