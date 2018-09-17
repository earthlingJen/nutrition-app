import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  background: #50e379;
  color: white;
  padding: 12px;
  margin: -10px;
  display: flex;
  justify-content: center;
`

export default class Header extends Component {
  render() {
    return (
      <div>
        <StyledHeader>Bedarf</StyledHeader>
      </div>
    )
  }
}
