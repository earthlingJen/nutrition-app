import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

export const StyledSelect = styled.select`
  border: solid 1px lightblue;
  font-size: 15px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export default class AgeSelect extends Component {
  static propTypes = {
    setSelectAge: propTypes.func.isRequired,
  }
  render() {
    const { setSelectAge } = this.props

    return (
      <React.Fragment>
        <label htmlFor="age">Altersspanne:</label>
        <StyledSelect
          id="age"
          onChange={event => setSelectAge(event.target.value)}
          defaultValue="25to50"
        >
          <option value="15to18">15 bis unter 19</option>
          <option value="19to24">19 bis unter 25</option>
          <option value="25to50">25 bis unter 51</option>
        </StyledSelect>
      </React.Fragment>
    )
  }
}
