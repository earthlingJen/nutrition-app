import React, { Component } from 'react'
import styled from 'styled-components'

const size = 80

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
`

export default class NutritionTile extends Component {
  render() {
    return (
      <StyledTile>
        <div>Eisen</div>
        <div> 15</div>
        <div> mg</div>
      </StyledTile>
    )
  }
}
