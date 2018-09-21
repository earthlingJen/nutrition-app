import React, { Component } from 'react'
import styled from 'styled-components'

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
  font-size: 10px;

  &:hover {
    background: grey;
  }
`

export default class FoodTile extends Component {
  static propTypes = {}
  render() {
    return (
      <StyledTile>
        <div>Brokkoli</div>
        <div>icon</div>
        <div>300 mg</div>
      </StyledTile>
    )
  }
}
