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

const StyledList = styled.ul`
  position: relative;
  bottom: 50px;
`

let sum = 0

export default class PlanningScreen extends Component {
  static propTypes = {
    selectedNutrition: PropTypes.object,
    addToPlate: PropTypes.func,
    veggies: PropTypes.array,
    nutriSum: PropTypes.object,
    updateNutriSum: PropTypes.func,
    pickedFood: PropTypes.array,
    updatePickedFood: PropTypes.func,
  }

  addValue() {
    // const startValue = 0
    // console.log(startValue)
  }

  renderList() {
    return this.props.pickedFood.map((food, index) => {
      return <li key={index}>100g {food}</li>
    })
  }

  renderFoodTiles() {
    const { veggies } = this.props

    return veggies.map((veggie, index) => {
      const mappedVeggie = veggie[this.props.selectedNutrition.nutriName]

      return (
        <FoodTile
          key={index}
          veggieName={veggie.veggieName}
          veggieIcon="icon"
          veggieValue={mappedVeggie.veggieValue + ' ' + mappedVeggie.unit}
          onClick={() => {
            console.log('angeklickt: ' + veggie.veggieName)
            console.log('addiert: ' + (sum = sum + mappedVeggie.veggieValue))

            this.props.updateNutriSum(veggie)
            this.props.updatePickedFood(veggie.veggieName)
          }}
        />
      )
    })
  }

  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    return (
      <React.Fragment>
        <StyledHeader>Plane - {nutriName}</StyledHeader>

        <StyledSubHeader>
          <h5>Kreis</h5>
          <NutritionTile
            nutriName={nutriName}
            nutriValue={this.props.nutriSum[nutriName] + ' / ' + nutriValue}
            nutriUnit={nutriUnit}
          />
          <h5 style={{ border: 'solid 1px' }}>Gemüse</h5>
        </StyledSubHeader>

        <StyledMain>
          <img src={plate} style={{ margin: 'auto' }} alt="plate" />

          <FoodBar>{this.renderFoodTiles()}</FoodBar>
        </StyledMain>
        <StyledList>{this.renderList()}</StyledList>
      </React.Fragment>
    )
  }
}
