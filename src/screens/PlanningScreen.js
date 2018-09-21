import React, { Component } from 'react'

import NutritionTile from '../components/NutritionTile'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeaderTile = styled.div`
  margin-top: 20px;
`
const StyledHeader = styled.h1`
  background: #50e379;
  color: white;
  padding: 20px 10px 10px;
  margin: -10px;
  display: flex;
  justify-content: center;
`

export default class PlanningScreen extends Component {
  static propTypes = {
    selectedNutrition: PropTypes.object,
  }
  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props.selectedNutrition
    return (
      <React.Fragment>
        <StyledHeader>Plane</StyledHeader>
        <StyledHeaderTile>
          <NutritionTile
            nutriName={nutriName}
            nutriValue={nutriValue}
            nutriUnit={nutriUnit}
          />
        </StyledHeaderTile>
      </React.Fragment>
    )
  }
}
