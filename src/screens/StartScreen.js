import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GameInputContainer from '../containers/GameInputContainer'
import Button from '../components/Button'

export default class StartScreen extends Component {
  static propTypes = {
    previousGamesTitles: PropTypes.arrayOf(PropTypes.string),
    gameTitle: PropTypes.string,
    onStartGame: PropTypes.func.isRequired,
    onResetGame: PropTypes.func.isRequired,
  }

  render() {
    const { gameTitle, onStartGame, onResetGame } = this.props
    return (
      <div>
        <h1>{gameTitle || 'Welcome'}</h1>
        {this.renderGameList()}
        <GameInputContainer />
        <Link to="/setup">
          <Button onClick={onStartGame}>Start game</Button>
        </Link>
        <Button onClick={onResetGame}>Reset game</Button>
      </div>
    )
  }

  renderGameList() {
    const { previousGamesTitles } = this.props
    return (
      <ul>
        {previousGamesTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    )
  }
}
