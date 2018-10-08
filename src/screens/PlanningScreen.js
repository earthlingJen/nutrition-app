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
      <React.Fragment>
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
        <div style={{ paddingTop: '10px' }}>
          Icons made by{' '}
          <a href="http://www.freepik.com" title="Freepik">
            Freepik{' '}
          </a>
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com{' '}
          </a>
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
          >
            CC 3.0 BY
          </a>
        </div>
      </React.Fragment>
    )
  }
}
