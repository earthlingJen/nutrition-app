import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 102

const StyledTile = styled.div`
  margin: 5px auto;
  border: solid grey 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${size}px;
  height: ${size}px;
  padding: 2px;

  &:hover {
    background: grey;
  }
`

export default class NutritionTile extends Component {
  static propTypes = {
    nutriName: PropTypes.string,
    nutriValue: PropTypes.string,
    nutriUnit: PropTypes.string,
  }
  render() {
    //console.log(this.props.nutriName)
    return (
      <StyledTile>
        <div>{this.props.nutriName}</div>
        <div>{this.props.nutriValue}</div>
        <div>{this.props.nutriUnit}</div>
      </StyledTile>
    )
  }
}
