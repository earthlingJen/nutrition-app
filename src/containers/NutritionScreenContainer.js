import { connect } from 'react-redux'
import NutritionScreen from '../screens/NutritionScreen'
import { setSelectSex, setSelectAge } from '../actions'

const mapStateToProps = state => ({
  user: state.user,
  nutriNeeds: state.nutriNeeds,
})

const mapDispatchToProps = dispatch => ({
  setSelectSex: value => dispatch(setSelectSex(value)),
  setSelectAge: value => dispatch(setSelectAge(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NutritionScreen)
