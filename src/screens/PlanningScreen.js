/* eslint-disable no-console */
import React, { Component } from 'react'
import NutritionTile from '../components/NutritionTile'
import FoodTile from '../components/FoodTile'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import plate from '../pics/plate.svg'
import FoodTypeSelect from '../components/FoodTypeSelect'
import PieChart from '../components/PieChart'
import { StyledHeader } from '../components/Header'
import Footer from '../components/Footer'

const StyledBody = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 6fr 1fr;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`
const StyledSubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
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
  justify-content: center;
  margin-top: -40px;
`
const StyledPlate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 42px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledList = styled.ul`
  overflow-y: scroll;
  height: 30vh;
  width: 55vw;
  box-shadow: 0 2px 10px grey;
`
const FoodBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 400px;
`
export default class PlanningScreen extends Component {
  static propTypes = {
    selectedNutrition: PropTypes.object,
    veggies: PropTypes.array,
    fruits: PropTypes.array,
    nuts: PropTypes.array,
    nutriSum: PropTypes.object,
    updateNutriSum: PropTypes.func.isRequired,
    pickedFood: PropTypes.array,
    updatePickedFood: PropTypes.func.isRequired,
    setSelectFood: PropTypes.func.isRequired,
    pickedFoodType: PropTypes.string,
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
      fruits,
      nuts,
      selectedNutrition,
      updateNutriSum,
      updatePickedFood,
    } = this.props

    switch (this.props.pickedFoodType) {
    case 'veggies':
      return veggies
        .sort(
          (a, b) =>
            b[selectedNutrition.nutriName].veggieValue -
              a[selectedNutrition.nutriName].veggieValue
        )
        .map((veggie, index) => {
          const mappedVeggie = veggie[selectedNutrition.nutriName]

          return (
            <FoodTile
              key={index}
              veggieName={veggie.veggieName}
              veggieIcon={veggie.veggieIcon}
              veggieValue={mappedVeggie.veggieValue + ' ' + mappedVeggie.unit}
              onClick={() => {
                updateNutriSum(veggie)
                updatePickedFood(veggie.veggieName)
              }}
            />
          )
        })

    case 'fruits': //rename fruits and veggies in food!
      return fruits
        .sort(
          (a, b) =>
            b[selectedNutrition.nutriName].veggieValue -
              a[selectedNutrition.nutriName].veggieValue
        )
        .map((veggie, index) => {
          const mappedFruit = veggie[selectedNutrition.nutriName]

          return (
            <FoodTile
              key={index}
              veggieName={veggie.veggieName}
              veggieIcon={veggie.veggieIcon}
              veggieValue={mappedFruit.veggieValue + ' ' + mappedFruit.unit}
              onClick={() => {
                updateNutriSum(veggie)
                updatePickedFood(veggie.veggieName)
              }}
            />
          )
        })

    case 'nuts': //rename fruits and veggies in food!
      return nuts
        .sort(
          (a, b) =>
            b[selectedNutrition.nutriName].veggieValue -
              a[selectedNutrition.nutriName].veggieValue
        )
        .map((veggie, index) => {
          const mappedFruit = veggie[selectedNutrition.nutriName]

          return (
            <FoodTile
              key={index}
              veggieName={veggie.veggieName}
              veggieIcon={veggie.veggieIcon}
              veggieValue={mappedFruit.veggieValue + ' ' + mappedFruit.unit}
              onClick={() => {
                updateNutriSum(veggie)
                updatePickedFood(veggie.veggieName)
              }}
            />
          )
        })

    default:
      return console.log('no valid select value')
    }
  }

  calculatePie() {
    const { nutriName, nutriValue } = this.props.selectedNutrition

    return Number.parseFloat(
      (this.props.nutriSum[nutriName] / nutriValue) * 100
    ).toFixed(0)
  }

  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    const { nutriSum, setSelectFood } = this.props

    return (
      <StyledBody>
        <StyledHeader>Plane - {nutriName}</StyledHeader>

        <StyledSubHeader>
          <PieChart
            number={nutriValue}
            value={this.calculatePie()}
            unit={nutriUnit}
          />
          <NutritionTile
            nutriName={nutriName}
            nutriValue={
              Number.parseFloat(nutriSum[nutriName]).toFixed(2)
              // +
              // ' / ' +
              // nutriValue
            }
            nutriUnit={nutriUnit}
          />

          <FoodTypeSelect setSelectFood={setSelectFood} />
        </StyledSubHeader>

        <StyledP>pro 100g</StyledP>

        <StyledMain>
          <div>
            <StyledPlate>
              <img src={plate} alt="plate" style={{ width: '80%' }} />
            </StyledPlate>
            <StyledContainer>
              <StyledList>{this.renderList()}</StyledList>
            </StyledContainer>
          </div>
          <FoodBar>
            <div>{this.renderFoodTiles()}</div>
          </FoodBar>
        </StyledMain>

        <Footer />
      </StyledBody>
    )
  }
}
