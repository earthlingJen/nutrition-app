import React, { Component } from 'react'
import styled from 'styled-components'
import NutritionTile from '../components/NutritionTile'
import AgeSelect from '../components/AgeSelect'
import SexSelect from '../components/SexSelect'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StyledHeader = styled.h1`
  background: #50e379;
  color: white;
  padding: 20px 10px 10px;
  margin: -10px;
  display: flex;
  justify-content: center;
`

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
`

const StyledSpan = styled.span`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const NutritonGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`

export default class NutritionScreen extends Component {
  static propTypes = {
    setSelectSex: PropTypes.func.isRequired,
    setSelectAge: PropTypes.func.isRequired,
    user: PropTypes.object,
    nutriNeeds: PropTypes.arrayOf(PropTypes.object),
    saveValue: PropTypes.func,
  }

  render() {
    const { setSelectAge, setSelectSex } = this.props
    return (
      <React.Fragment>
        <StyledHeader>Bedarf</StyledHeader>
        <StyledDiv>
          <SexSelect setSelectSex={setSelectSex} />
          <AgeSelect setSelectAge={setSelectAge} />
        </StyledDiv>
        <StyledSpan>Empfohlene Tagesdosis:</StyledSpan>
        <NutritonGrid>{this.renderNutriTiles()}</NutritonGrid>
      </React.Fragment>
    )
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
          />
        </Link>
      )
    })
  }
}
