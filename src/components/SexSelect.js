import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledSelect } from './AgeSelect'

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
