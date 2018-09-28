import { connect } from 'react-redux'
import PlanningScreen from '../screens/PlanningScreen'
import { updateNutriSum, updatePickedFood, setSelectFood } from '../actions'

const mapStateToProps = state => ({
  selectedNutrition: state.selectedNutrition,
  veggies: state.veggies,
  nutriSum: state.nutriSum,
  pickedFood: state.pickedFood,
  renderItem: state.renderItem,
})

const mapDispatchToProps = dispatch => ({
  updateNutriSum: value => dispatch(updateNutriSum(value)),
  updatePickedFood: value => dispatch(updatePickedFood(value)),
  setSelectFood: value => dispatch(setSelectFood(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanningScreen)
