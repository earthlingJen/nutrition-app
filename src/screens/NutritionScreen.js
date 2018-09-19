import React, { Component } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import NutritionTile from '../components/NutritionTile'
import AgeSelect from '../components/AgeSelect'
import SexSelect from '../components/SexSelect'

import PropTypes from 'prop-types'

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
  }

  render() {
    const { setSelectAge, setSelectSex } = this.props
    return (
      <React.Fragment>
        <Header />
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
    const { user, nutriNeeds } = this.props

    //console.log(nutriNeeds)
    //console.log(user)
    const { sex, age } = user

    return nutriNeeds.map((nutrition, index) => {
      return (
        <NutritionTile
          key={index}
          nutriName={nutrition.nutriName}
          nutriValue={nutrition[sex][age]}
          nutriUnit={nutrition.unit}
        />
      )
    })
  }
}
