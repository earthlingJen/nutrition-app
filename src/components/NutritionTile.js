import React, { Component } from 'react'
import styled from 'styled-components'
import { nutriNeeds } from '../data/NutriNeeds'

const size = 102

const StyledTile = styled.div`
  margin: 5px auto;
  border: solid grey 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${size}px;
  height: ${size}px;
  padding: 2px;

  &:hover {
    background: grey;
  }
`

export default class NutritionTile extends Component {
  render() {
    return (
      <StyledTile>
        <div>{nutriNeeds.magnesium.nutriName}</div>
        <div>{nutriNeeds.magnesium.female['25']}</div>
        <div>{nutriNeeds.magnesium.unit}</div>
      </StyledTile>
    )
  }
}
