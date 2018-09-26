/* eslint-disable no-console */
import React, { Component } from 'react'
import NutritionTile from '../components/NutritionTile'
import FoodTile from '../components/FoodTile'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import plate from '../plate.png'

const StyledSubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px 0;
`

//test
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
  grid-template-columns: 2fr 1fr;
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
    veggies: PropTypes.array,
    nutriSum: PropTypes.object,
    updateNutriSum: PropTypes.func,
    pickedFood: PropTypes.array,
    updatePickedFood: PropTypes.func,
  }

  renderList() {
    const { pickedFood } = this.props
    return pickedFood.map((food, index) => {
      return <li key={index}>100g {food}</li>
    })
  }

  renderFoodTiles() {
    const {
      veggies,
      selectedNutrition,
      updateNutriSum,
      updatePickedFood,
    } = this.props

    return veggies.map((veggie, index) => {
      const mappedVeggie = veggie[selectedNutrition.nutriName]

      return (
        <FoodTile
          key={index}
          veggieName={veggie.veggieName}
          veggieIcon="icon"
          veggieValue={mappedVeggie.veggieValue + ' ' + mappedVeggie.unit}
          onClick={() => {
            console.log('angeklickt: ' + veggie.veggieName)
            console.log(
              'addiert in einfache Konstante: ' +
                (sum = sum + mappedVeggie.veggieValue)
            )

            updateNutriSum(veggie)
            updatePickedFood(veggie.veggieName)
          }}
        />
      )
    })
  }

  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    const { nutriSum } = this.props
    return (
      <React.Fragment>
        <StyledHeader>Plane - {nutriName}</StyledHeader>
        <StyledSubHeader>
          <h5>Kreis</h5>
          <NutritionTile
            nutriName={nutriName}
            nutriValue={
              Number.parseFloat(nutriSum[nutriName]).toFixed(2) +
              ' / ' +
              nutriValue
            }
            nutriUnit={nutriUnit}
          />
          <h5 style={{ border: 'solid 1px' }}>Gemüse</h5>
        </StyledSubHeader>

        <StyledMain>
          <img src={plate} style={{ margin: 'auto' }} alt="plate" />

          <FoodBar>
            <p style={{ textAlign: 'center' }}>pro 100g</p>
            {this.renderFoodTiles()}
          </FoodBar>
        </StyledMain>
        <StyledList>{this.renderList()}</StyledList>
      </React.Fragment>
    )
  }
}
