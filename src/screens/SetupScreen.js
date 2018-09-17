import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PlayerInputContainer from '../containers/PlayerInputContainer'
import Button from '../components/Button'

const LinkButton = styled.small`
  color: #666;
  cursor: default;
  display: inline-block;
  margin-left: 10px;

  &:hover {
    color: crimson;
    text-decoration: underline;
  }
`

const Delete = styled.span`
  display: inline-block;
  margin-left: 10px;
  color: crimson;
`

export default class SetupScreen extends Component {
  static propTypes = {
    onDeletePlayer: PropTypes.func.isRequired,
    onDeleteAllPlayers: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    gameTitle: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <h1>{this.props.gameTitle}</h1>
        {this.renderPlayers()}
        <PlayerInputContainer />
        {this.renderWarningOrPlayButton()}
        <Link to="/">Home</Link>
      </div>
    )
  }

  renderPlayers() {
    const { onDeletePlayer } = this.props

    return this.props.players.map((player, i) => (
      <div data-test-id="StartScreen-player" key={i}>
        <span>{player.name}</span>
        <Delete onClick={() => onDeletePlayer(i)}>&times;</Delete>
      </div>
    ))
  }

  renderWarningOrPlayButton() {
    const { players, onDeleteAllPlayers } = this.props
    return players.length ? (
      <footer data-test-id="Startscreen-footer">
        <Link to="/summary">
          <Button>Play!</Button>
        </Link>
        <LinkButton onClick={onDeleteAllPlayers}>
          or delete all players
        </LinkButton>
      </footer>
    ) : (
      <div data-test-id="StartScreen-hint">Please add some players.</div>
    )
  }
}
