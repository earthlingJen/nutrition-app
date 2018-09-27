import React, { Component } from 'react'
import { StyledSelect } from './AgeSelect'
import propTypes from 'prop-types'

export default class FoodSelect extends Component {
  static propTypes = {
    setSelectFood: propTypes.func,
  }
  render() {
    const { setSelectFood } = this.props
    return (
      <React.Fragment>
        <StyledSelect
          id="food"
          onChange={event => setSelectFood(event.target.value)}
          defaultValue="Gemüse"
        >
          <option value="veggies">Gemüse</option>
          <option value="fruits">Obst</option>
          <option value="nuts">Nüsse</option>
        </StyledSelect>
      </React.Fragment>
    )
  }
}
