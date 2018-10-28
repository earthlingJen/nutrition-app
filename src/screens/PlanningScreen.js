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
  grid-template-rows: 1fr 2fr 0fr 1fr;
  flex-direction: column;
`
const StyledSubHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
  max-width: 355px;
`
const StyledSpan = styled.span`
  text-align: center;
  color: red;
  margin-top: 10px;
  opacity: ${props => props.opacity};
`

const StyledP = styled.p`
  text-align: right;
  margin: 0 20px;
  position: relative;
  bottom: 52px;
`
// const StyledInput = styled.input`
//   width: 42px;
//   font-size: 20px;
//   border: solid 1px;
// `
const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
`
const StyledPlate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const StyledImg = styled.img`
  position: absolute;
  bottom: 32px;
  height: 60px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledList = styled.ul`
  overflow-y: scroll;
  height: 30vh;
  width: 182px;
  box-shadow: 0 2px 10px grey;
`
// const StyledButton = styled.button`
//   border: solid 1px;
// `
const FoodBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 345px;
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
    amount: PropTypes.number,
    foodOnPlate: PropTypes.any,
    renderFoodOnPlate: PropTypes.func,
    seleniumTooHigh: PropTypes.bool,
    deleteFood: PropTypes.func,
  }

  renderList() {
    const { pickedFood, amount /*deleteFood*/ } = this.props
    return pickedFood.map((food, index) => {
      return (
        <span
          key={index}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <li>
            {amount}g {food.name}
          </li>
          {/* <StyledButton onClick={() => deleteFood(index)}>&times;</StyledButton> */}
        </span>
      )
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
      pickedFoodType,
      amount,
      renderFoodOnPlate,
    } = this.props

    switch (pickedFoodType) {
    case 'veggies':
      return veggies
        .sort(
          (a, b) =>
            b[selectedNutrition.nutriName].foodValue -
              a[selectedNutrition.nutriName].foodValue
        )
        .map((food, index) => {
          const mappedFood = food[selectedNutrition.nutriName]
          const foodForList = {
            name: food.foodName,
            icon: food.foodIcon,
            amount: amount,
          }

          return (
            <FoodTile
              key={index}
              foodName={food.foodName}
              foodIcon={food.foodIcon}
              foodValue={mappedFood.foodValue + ' ' + mappedFood.unit}
              onClick={() => {
                updateNutriSum(food)
                updatePickedFood(foodForList)
                renderFoodOnPlate(food.foodIcon)
              }}
            />
          )
        })

    case 'fruits':
      return fruits
        .sort(
          (a, b) =>
            b[selectedNutrition.nutriName].foodValue -
              a[selectedNutrition.nutriName].foodValue
        )
        .map((food, index) => {
          const mappedFood = food[selectedNutrition.nutriName]

          const foodForList = {
            name: food.foodName,
            icon: food.foodIcon,
            amount: amount,
          }
          return (
            <FoodTile
              key={index}
              foodName={food.foodName}
              foodIcon={food.foodIcon}
              foodValue={mappedFood.foodValue + ' ' + mappedFood.unit}
              onClick={() => {
                updateNutriSum(food)
                updatePickedFood(foodForList)
                renderFoodOnPlate(food.foodIcon)
              }}
            />
          )
        })

    case 'nuts':
      return nuts
        .sort(
          (a, b) =>
            b[selectedNutrition.nutriName].foodValue -
              a[selectedNutrition.nutriName].foodValue
        )
        .map((food, index) => {
          const mappedFood = food[selectedNutrition.nutriName]

          const foodForList = {
            name: food.foodName,
            icon: food.foodIcon,
            amount: amount,
          }
          return (
            <FoodTile
              key={index}
              foodName={food.foodName}
              foodIcon={food.foodIcon}
              foodValue={mappedFood.foodValue + ' ' + mappedFood.unit}
              onClick={() => {
                updateNutriSum(food)
                updatePickedFood(foodForList)
                renderFoodOnPlate(food.foodIcon)
              }}
            />
          )
        })

    default:
      return null
    }
  }

  calculateAmount() {
    console.log('test')
  }

  calculatePie() {
    const { nutriName, nutriValue } = this.props.selectedNutrition

    return Number.parseFloat(
      (this.props.nutriSum[nutriName] / nutriValue) * 100
    ).toFixed(0)
  }

  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    const { nutriSum, setSelectFood, foodOnPlate, seleniumTooHigh } = this.props

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
            nutriValue={Number.parseFloat(nutriSum[nutriName]).toFixed(2)}
            nutriUnit={nutriUnit}
          />

          <FoodTypeSelect setSelectFood={setSelectFood} />
        </StyledSubHeader>
        <StyledSpan opacity={seleniumTooHigh ? 1 : 0}>
          Achtung! Selen/Jod überschritten!
        </StyledSpan>
        <StyledP>
          pro 100
          {/* {' '}
          <StyledInput
            type="text"
            placeholder="100"
            onChange={() => this.calculateAmount()}
          />{' '} */}
          g
        </StyledP>

        <StyledMain>
          <div>
            <StyledPlate>
              {foodOnPlate && <StyledImg src={foodOnPlate} alt="foodOnPlate" />}

              <img src={plate} alt="plate" />
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
