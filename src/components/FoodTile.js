import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 70

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
  font-size: 9px;

  &:hover {
    background: grey;
  }
`

export default class FoodTile extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    veggieName: PropTypes.string,
    veggieIcon: PropTypes.string,
    veggieValue: PropTypes.string,
  }
  render() {
    const { veggieName, veggieValue, veggieIcon, onClick } = this.props
    return (
      <StyledTile onClick={onClick}>
        <div>{veggieName}</div>
        <div>{veggieIcon}</div>
        <div>{veggieValue}</div>
      </StyledTile>
    )
  }
}
