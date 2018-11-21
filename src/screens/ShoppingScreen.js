/* eslint-disable no-console */
import React, { Component } from 'react'
import { StyledHeader } from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import ShoppingTile from '../components/ShoppingTile'
import basket from '../pics/coloredBasket.svg'

const StyledBody = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  overflow-y: scroll;
`

export default class ShoppingScreen extends Component {
  static propTypes = {
    pickedFood: PropTypes.array,
    amount: PropTypes.number,
  }

  render() {
    return (
      <StyledBody>
        <StyledHeader>Einkaufen</StyledHeader>

        <StyledList>
          {this.props.pickedFood.map((veggie, index) => {
            return (
              <ShoppingTile
                key={index}
                foodName={veggie.name}
                foodIcon={veggie.icon}
                amount={this.props.amount}
              />
            )
          })}
        </StyledList>
        <img
          src={basket}
          alt="shopping basket"
          style={{ alignItems: 'center', margin: '7px auto', width: '102px' }}
        />
        <Footer />
      </StyledBody>
    )
  }
}
