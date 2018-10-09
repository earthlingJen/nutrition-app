import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 70

const StyledTile = styled.div`
  margin: 10px auto; /*5px for Mobile S*/
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

  &:hover {
    background: grey;
  }
`

export default class ShoppingTile extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    veggieName: PropTypes.string,
    veggieIcon: PropTypes.string,
    veggieAmount: PropTypes.string,
  }
  render() {
    const { veggieName, veggieAmount, veggieIcon, onClick } = this.props
    return (
      <StyledTile onClick={onClick}>
        <div>{veggieName}</div>
        <img src={veggieIcon} alt={veggieName} style={{ width: '20px' }} />
        <div>{veggieAmount}</div>
      </StyledTile>
    )
  }
}
