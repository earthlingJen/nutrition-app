import React, { Component } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import NutritionTile from '../components/NutritionTile'
import { nutriNeeds } from '../data/NutriNeeds'
import propTypes from 'prop-types'

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

const StyledSelect = styled.select`
  border: solid 1px lightblue;
  font-size: 15px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-left: 5%;
`

export default class NutritionScreen extends Component {
  static propTypes = {
    setSelectSex: propTypes.func.isRequired,
    setSelectAge: propTypes.func.isRequired,
    user: propTypes.object,
  }

  renderNutriTiles() {
    console.log(nutriNeeds.iron.female['15'])
    console.log(this.props.user)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <StyledDiv>
          <label htmlFor="sex">biologisches Geschlecht:</label>
          <StyledSelect
            id="sex"
            onChange={event => this.props.setSelectSex(event.target.value)}
          >
            <option value="female">weiblich</option>
            <option value="male">männlich</option>
          </StyledSelect>

          <label htmlFor="age">Altersspanne:</label>
          <StyledSelect
            id="age"
            onChange={event => this.props.setSelectAge(event.target.value)}
          >
            <option value="15to18">15 bis unter 19</option>
            <option value="19to24">19 bis unter 25</option>
            <option value="25to50">25 bis unter 51</option>
          </StyledSelect>
        </StyledDiv>
        <StyledSpan>Empfohlene Tagesdosis:</StyledSpan>

        <NutritonGrid>
          <NutritionTile />
          {this.renderNutriTiles()}
        </NutritonGrid>
      </React.Fragment>
    )
  }
}
