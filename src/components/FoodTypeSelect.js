import React, { Component } from 'react'
import { StyledSelect } from './AgeSelect'
import PropTypes from 'prop-types'

export default class FoodTypeSelect extends Component {
  static propTypes = {
    setSelectFood: PropTypes.func.isRequired,
  }

  render() {
    const { setSelectFood } = this.props
    return (
      <React.Fragment>
        <StyledSelect
          id="food"
          onChange={event => setSelectFood(event.target.value)}
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
