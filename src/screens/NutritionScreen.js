/* eslint-disable no-console */
import React, { Component } from 'react'
import styled from 'styled-components'
import NutritionTile from '../components/NutritionTile'
import AgeSelect from '../components/AgeSelect'
import SexSelect from '../components/SexSelect'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyledHeader } from '../components/Header'
import Footer from '../components/Footer'

let tileColor

const StyledBody = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 6fr 1fr;
  height: 100vh;
  overflow: hidden;
`
const StyledDiv = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 127px;
  min-width: 192px;
`

const StyledSpan = styled.span`
  margin: 30px 0 10px;
  display: flex;
  justify-content: center;
`

const NutritonGrid = styled.div`
  display: grid;
  grid-gap: 2px;
  justify-items: center;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  overflow-y: scroll;
  width: 310px;
  margin: auto;
`

export default class NutritionScreen extends Component {
  static propTypes = {
    setSelectSex: PropTypes.func.isRequired,
    setSelectAge: PropTypes.func.isRequired,
    user: PropTypes.object,
    nutriNeeds: PropTypes.arrayOf(PropTypes.object),
    saveValue: PropTypes.func,
    nutriSum: PropTypes.object,
  }

  renderNutriTiles() {
    const { user, nutriNeeds, saveValue } = this.props
    const { sex, age } = user

    return nutriNeeds.map((nutrition, index) => {
      const selectedNutrition = {
        nutriName: nutrition.nutriName,
        nutriValue: nutrition[sex][age],
        nutriUnit: nutrition.unit,
      }

      console.log(
        selectedNutrition.nutriName,
        selectedNutrition.nutriValue <=
          this.props.nutriSum[selectedNutrition.nutriName]
      )

      // selectedNutrition.nutriValue <=
      // this.props.nutriSum[selectedNutrition.nutriName]
      //   ? tileColor === 'green'
      //   : tileColor === 'white'

      return (
        <Link
          to="/planning"
          key={index}
          style={{ color: 'black', textDecoration: 'none' }}
          onClick={() => saveValue(selectedNutrition)}
        >
          <NutritionTile
            key={index}
            nutriName={nutrition.nutriName}
            nutriValue={nutrition[sex][age]}
            nutriUnit={nutrition.unit}
            tileColor={tileColor}
          />
        </Link>
      )
    })
  }

  render() {
    const { setSelectAge, setSelectSex } = this.props
    return (
      <StyledBody>
        <StyledHeader>Bedarf</StyledHeader>
        <StyledDiv>
          <SexSelect setSelectSex={setSelectSex} />
          <AgeSelect setSelectAge={setSelectAge} />
        </StyledDiv>
        <StyledSpan>Empfohlene Tagesdosis:</StyledSpan>
        <NutritonGrid>{this.renderNutriTiles()}</NutritonGrid>
        <Footer />
      </StyledBody>
    )
  }
}
