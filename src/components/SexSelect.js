import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSelect = styled.select`
  border: solid 1px lightblue;
  font-size: 15px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 0 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

export default class SexSelect extends Component {
  static propTypes = {
    setSelectSex: PropTypes.func.isRequired,
  }

  render() {
    const { setSelectSex } = this.props
    return (
      <React.Fragment>
        <label htmlFor="sex">biologisches Geschlecht:</label>
        <StyledSelect
          defaultValue="female"
          id="sex"
          onChange={event => setSelectSex(event.target.value)}
        >
          <option value="female">weiblich</option>
          <option value="male">männlich</option>
        </StyledSelect>
      </React.Fragment>
    )
  }
}
