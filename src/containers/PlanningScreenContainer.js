import { connect } from 'react-redux'
import PlanningScreen from '../screens/PlanningScreen'
import {
  updateNutriSum,
  updatePickedFood,
  setSelectFood,
  renderFoodOnPlate,
} from '../actions'

const mapStateToProps = state => ({
  selectedNutrition: state.selectedNutrition,
  veggies: state.veggies,
  fruits: state.fruits,
  nuts: state.nuts,
  nutriSum: state.nutriSum,
  pickedFood: state.pickedFood,
  pickedFoodType: state.pickedFoodType,
  foodOnPlate: state.foodOnPlate,
  amount: state.amount,
})

const mapDispatchToProps = dispatch => ({
  updateNutriSum: value => dispatch(updateNutriSum(value)),
  updatePickedFood: value => dispatch(updatePickedFood(value)),
  setSelectFood: value => dispatch(setSelectFood(value)),
  renderFoodOnPlate: value => dispatch(renderFoodOnPlate(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanningScreen)
