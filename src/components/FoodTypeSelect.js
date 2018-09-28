import React, { Component } from 'react'
import { StyledSelect } from './AgeSelect'
import PropTypes from 'prop-types'

export default class FoodTypeSelect extends Component {
  static propTypes = {
    setSelectFood: PropTypes.func,
  }

  render() {
    return (
      <React.Fragment>
        <StyledSelect
          id="food"
          onChange={this.props.setSelectFood}
          defaultValue="veggies"
        >
          <option value="veggies">Gemüse</option>
          <option value="fruits">Obst</option>
          <option value="nuts">Nüsse</option>
        </StyledSelect>
      </React.Fragment>
    )
  }
}
