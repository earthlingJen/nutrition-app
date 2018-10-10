import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 102

const StyledTile = styled.div`
  border: solid grey 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${size}px;
  height: ${size}px;

  &:hover {
    background: grey;
  }
`

export default class NutritionTile extends Component {
  static propTypes = {
    nutriName: PropTypes.string,
    nutriValue: PropTypes.any,
    nutriUnit: PropTypes.string,
    tileColor: PropTypes.string,
  }
  render() {
    const { nutriName, nutriValue, nutriUnit, tileColor } = this.props
    return (
      <StyledTile style={{ background: tileColor }}>
        <div>{nutriName}</div>
        <div>{nutriValue}</div>
        <div>{nutriUnit}</div>
      </StyledTile>
    )
  }
}
