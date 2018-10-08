/* eslint-disable no-console */
import React, { Component } from 'react'
import { StyledHeader } from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import spinach from '../pics/spinach.svg'
import ShoppingTile from '../components/ShoppingTile'

const StyledBody = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
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

        <ShoppingTile
          key={0}
          veggieName="Spinat"
          veggieIcon={spinach}
          veggieAmount="100 g"
        />
        <Footer />
      </StyledBody>
    )
  }
}
