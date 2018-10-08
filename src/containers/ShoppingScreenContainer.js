import { connect } from 'react-redux'
import ShoppingScreen from '../screens/ShoppingScreen'

const mapStateToProps = state => ({
  pickedFood: state.pickedFood,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingScreen)
