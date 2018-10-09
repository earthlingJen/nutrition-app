/* eslint-disable no-console */
import React, { Component } from 'react'
import { StyledHeader } from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import spinach from '../pics/spinach.svg'
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
  }
  render() {
    console.log(this.props.pickedFood)

    return (
      <StyledBody>
        <StyledHeader>Einkaufen</StyledHeader>
        <StyledList>
          <ShoppingTile
            key={0}
            veggieName="Spinat"
            veggieIcon={spinach}
            veggieAmount="100 g"
          />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile />
          <ShoppingTile
            key={1}
            veggieName="Spinat"
            veggieIcon={spinach}
            veggieAmount="100 g"
          />
        </StyledList>
        <img
          src={basket}
          alt="shopping basket"
          style={{ alignItems: 'center', margin: '7px auto', width: '30%' }}
        />
        <Footer />
      </StyledBody>
    )
  }
}
