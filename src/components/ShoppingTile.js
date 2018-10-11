/* eslint-disable no-console */
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const size = 70

const StyledTile = styled.div`
  margin: 10px auto; /*5px for Mobile S*/
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
`

export default class ShoppingTile extends Component {
  state = {
    colorChange: 'lightgray',
  }

  static propTypes = {
    onClick: PropTypes.func,
    veggieName: PropTypes.string,
    veggieIcon: PropTypes.string,
    amount: PropTypes.number,
    changeColor: PropTypes.string,
  }

  inBasket() {
    this.state.colorChange === 'lightgray'
      ? this.setState({ colorChange: 'gray' })
      : this.setState({ colorChange: 'lightgray' })
  }

  render() {
    const { veggieName, veggieIcon, amount } = this.props
    return (
      <StyledTile
        onClick={() => this.inBasket()}
        style={{ background: this.state.colorChange }}
      >
        <div>{veggieName}</div>
        <img src={veggieIcon} alt={veggieName} style={{ width: '20px' }} />
        <div>{amount} g</div>
      </StyledTile>
    )
  }
}
