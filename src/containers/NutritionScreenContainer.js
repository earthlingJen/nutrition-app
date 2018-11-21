import { connect } from 'react-redux'
import NutritionScreen from '../screens/NutritionScreen'
import {
  setSelectSex,
  setSelectAge,
  saveValue,
  seleniumOverdose,
} from '../actions'

const mapStateToProps = state => ({
  user: state.user,
  nutriNeeds: state.nutriNeeds,
  nutriSum: state.nutriSum,
  seleniumTooHigh: state.seleniumTooHigh,
})

const mapDispatchToProps = dispatch => ({
  setSelectSex: value => dispatch(setSelectSex(value)),
  setSelectAge: value => dispatch(setSelectAge(value)),
  saveValue: value => dispatch(saveValue(value)),
  seleniumOverdose: value => dispatch(seleniumOverdose(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NutritionScreen)
