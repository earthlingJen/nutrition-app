import { connect } from 'react-redux'
import StartScreen from '../screens/StartScreen'
import { startGame, resetGame } from '../actions'

const mapStateToProps = state => ({
  gameTitle: state.gameTitle,
  previousGamesTitles: state.previousGamesTitles,
})

const mapDispatchToProps = dispatch => ({
  onStartGame: () => dispatch(startGame()),
  onResetGame: () => dispatch(resetGame()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
