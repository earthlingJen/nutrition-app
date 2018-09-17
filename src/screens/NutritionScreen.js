import React, { Component } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import NutritionTile from '../components/NutritionTile'

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
`

const NutritonGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`

export default class NutritionScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <StyledDiv>
          <div>biologisches Geschlecht:</div>
          <div>weiblich</div>
          <div>Altersspanne:</div>
          <div>25 bis unter 51</div>
        </StyledDiv>

        <NutritonGrid>
          <NutritionTile />
        </NutritonGrid>
      </React.Fragment>
    )
  }
}
