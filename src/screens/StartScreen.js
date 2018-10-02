/* eslint-disable no-console */
import React, { Component } from 'react'
import logo from '../pics/plannedtritionLogo.svg'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(white, #50e379, white);
`

const StyledButton = styled.button`
  background: lightgrey;
  border-radius: 5%;
`

export default class StartScreen extends Component {
  render() {
    return (
      <StyledDiv>
        <img src={logo} alt="plannedtritionLogo" />
        <p>Möchtest du eine Frage beantworten?</p>
        <div>
          <StyledButton onClick={() => console.log('Frage is in Arbeit')}>
            Ja
          </StyledButton>
          <Link to="/nutrition">
            <StyledButton>Nein</StyledButton>
          </Link>
        </div>
      </StyledDiv>
    )
  }
}
