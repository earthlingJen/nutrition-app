/* eslint-disable no-console */
import React, { Component } from 'react'
import NutritionTile from '../components/NutritionTile'
import FoodTile from '../components/FoodTile'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import plate from '../plate.png'
import FoodSelect from '../components/FoodSelect'

const StyledHeader = styled.h1`
  background: #50e379;
  color: white;
  padding: 20px 10px 10px;
  margin: -10px;
  display: flex;
  justify-content: center;
`
const StyledSubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px 0;
`

const StyledP = styled.p`
  text-align: right;
  margin: 0 20px;
  position: relative;
  bottom: 20px;
`

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 70vh;
  justify-content: center;
`
const StyledPlate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledList = styled.ul`
  overflow-y: scroll;
  height: 42vh;
  width: 55vw;
  box-shadow: 0 2px 10px grey;
`
const FoodBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

let sum = 0

export default class PlanningScreen extends Component {
  static propTypes = {
    selectedNutrition: PropTypes.object,
    veggies: PropTypes.array,
    fruits: PropTypes.array,
    nutriSum: PropTypes.object,
    updateNutriSum: PropTypes.func,
    pickedFood: PropTypes.array,
    updatePickedFood: PropTypes.func,
    setSelectFood: PropTypes.func,
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
      //friuts,
      selectedNutrition,
      updateNutriSum,
      updatePickedFood,
    } = this.props

    // switch (foodType === veggies) {
    // case veggie:
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
    //}
  }

  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    const { nutriSum, setSelectFood } = this.props
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

          <FoodSelect setSelectFood={setSelectFood} />
        </StyledSubHeader>
        <StyledP>pro 100g</StyledP>
        <StyledMain>
          <div>
            <StyledPlate>
              <img src={plate} alt="plate" style={{ width: '80%' }} />
            </StyledPlate>
            <StyledContainer>
              <StyledList>
                {this.renderList()}
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
                <li>bla</li>
              </StyledList>
            </StyledContainer>
          </div>
          <FoodBar>
            <div>
              {this.renderFoodTiles()}
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile />
              <FoodTile veggieName="test" />
            </div>
          </FoodBar>
        </StyledMain>
      </React.Fragment>
    )
  }
}
