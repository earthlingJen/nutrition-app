import { deletePlayer, deleteAllPlayers } from '../actions'
import { connect } from 'react-redux'
import SetupScreen from '../screens/SetupScreen'

const mapStateToProps = state => ({
  players: state.players,
  gameTitle: state.gameTitle,
})

const mapDispatchToProps = dispatch => ({
  onDeletePlayer: index => dispatch(deletePlayer({ index })),
  onDeleteAllPlayers: () => dispatch(deleteAllPlayers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen)
