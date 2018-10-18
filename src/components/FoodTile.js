import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 70

const StyledTile = styled.div`
  margin: 5px auto;
  background: lightgrey;
  border: solid grey 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${size}px;
  height: ${size}px;
  padding: 2px;
  font-size: 9px;

  /* overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;*/

  &:hover {
    background: grey;
  }
`

export default class FoodTile extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    foodName: PropTypes.string,
    foodIcon: PropTypes.string,
    veggieValue: PropTypes.string,
  }
  render() {
    const { foodName, veggieValue, foodIcon, onClick } = this.props
    return (
      <StyledTile onClick={onClick}>
        <div>{foodName}</div>
        <img src={foodIcon} alt={foodName} style={{ width: '20px' }} />
        <div>{veggieValue}</div>
      </StyledTile>
    )
  }
}
