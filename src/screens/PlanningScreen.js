import React, { Component } from 'react'

import NutritionTile from '../components/NutritionTile'
import FoodTile from '../components/FoodTile'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import plate from '../plate.png'

const StyledSubHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 5%;
`
const StyledHeader = styled.h1`
  background: #50e379;
  color: white;
  padding: 20px 10px 10px;
  margin: -10px;
  display: flex;
  justify-content: center;
`
const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
`
const FoodBar = styled.div`
  display: flex;
  flex-direction: column;
`

export default class PlanningScreen extends Component {
  static propTypes = {
    selectedNutrition: PropTypes.object,
    addToPlate: PropTypes.func,
  }

  addToPlate() {
    console.log('food to list')
  }

  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    return (
      <React.Fragment>
        <StyledHeader>Plane- {nutriName}</StyledHeader>

        <StyledSubHeader>
          <h5>Kreis</h5>
          <NutritionTile
            nutriName={nutriName}
            nutriValue={nutriValue}
            nutriUnit={nutriUnit}
          />
          <h5 style={{ border: 'solid 1px' }}>Gemüse</h5>
        </StyledSubHeader>

        <StyledMain>
          <img src={plate} alt="plate" />
          <FoodBar>
            {/* <FoodTile onClick={addToPlate()} /> */}
            <FoodTile />
            <FoodTile />
          </FoodBar>
        </StyledMain>
      </React.Fragment>
    )
  }
}
