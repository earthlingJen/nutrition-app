import { connect } from 'react-redux'
import PlanningScreen from '../screens/PlanningScreen'

const mapStateToProps = state => ({
  selectedNutrition: state.selectedNutrition,
})

//const mapDispatchToProps = () => ({})

export default connect(mapStateToProps)(PlanningScreen)
