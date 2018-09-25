import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 102

const StyledTile = styled.div`
  margin: 5px 2px;
  border: solid grey 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: ${size}px;
  height: ${size}px;
  padding: 2px;

  &:hover {
    background: grey;
  }
`

export default class NutritionTile extends Component {
  static propTypes = {
    nutriName: PropTypes.string,
    nutriValue: PropTypes.any,
    nutriUnit: PropTypes.string,
  }
  render() {
    const { nutriName, nutriValue, nutriUnit } = this.props
    return (
      <StyledTile>
        <div>{nutriName}</div>
        <div>{nutriValue}</div>
        <div>{nutriUnit}</div>
      </StyledTile>
    )
  }
}
