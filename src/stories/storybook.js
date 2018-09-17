/* global module */

import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, array } from '@storybook/addon-knobs/react'

import Button from '../components/Button'
import EditCard from '../components/EditCard'
import PointButtonBar from '../components/PointButtonBar'
import GameScreen from '../components/GameScreen'
import StartScreen from '../components/StartScreen'
import PlayerHeader from '../components/PlayerHeader'
import RoundsBar from '../components/RoundsBar'
import SummaryCard from '../components/SummaryCard'
import SummaryScreen from '../components/SummaryScreen'

const Wrapper = styled.section`
  width: ${props => (props.width ? props.width : '360')}px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
`

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      {text('Button text', 'Click me')}
    </Button>
  ))

storiesOf('PointButtonBar', module).add('default', () => (
  <Wrapper>
    <PointButtonBar onClick={action('onClick')} />
  </Wrapper>
))

storiesOf('RoundsBar', module)
  .add('no scores', () => (
    <Wrapper>
      <RoundsBar scores={[]} />
    </Wrapper>
  ))
  .add('some scores', () => (
    <Wrapper>
      <RoundsBar scores={[0, 20, 15, 10]} />
    </Wrapper>
  ))
  .add('many scores', () => (
    <Wrapper width={200}>
      <RoundsBar scores={[0, 20, 15, 10, 10, 0, -5, 60, 10, 30]} />
    </Wrapper>
  ))

storiesOf('PlayerHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <PlayerHeader
      title={text('Title', 'John Doe')}
      score={number('Score', 0)}
    />
  ))

storiesOf('Cards/SummaryCard', module)
  .addDecorator(withKnobs)
  .add('no scores', () => (
    <SummaryCard
      title={text('Name', 'John Doe')}
      scores={array('Scores', [0])}
    />
  ))
  .add('some scores', () => (
    <SummaryCard
      title={text('Title', 'John Doe')}
      scores={array('Scores', [10, 20, 30, 40, 10, -5, 20, 15])}
    />
  ))
  .add('lots of scores', () => (
    <Wrapper width={200}>
      <SummaryCard
        title={text('Title', 'John Doe')}
        scores={array('Scores', [10, 20, 30, 40, 10, -5, 20, 15])}
      />
    </Wrapper>
  ))

storiesOf('Screens/SummaryScreen', module)
  .addDecorator(withKnobs)
  .add('no players', () => (
    <SummaryScreen
      players={[]}
      onAddRound={action('onAddRound')}
      onBack={action('onBack')}
    />
  ))
  .add('some players', () => (
    <SummaryScreen
      players={[
        { name: 'John', scores: [10, 20, 30] },
        { name: 'Jane', scores: [20, 30, -3] },
      ]}
      onAddRound={action('onAddRound')}
      onBack={action('onBack')}
    />
  ))

storiesOf('Cards/EditCard', module)
  .addDecorator(withKnobs)
  .add('with no points', () => (
    <EditCard
      title={text('Title', 'Some text')}
      score={number('Score', 0, {
        range: true,
        min: 0,
        max: 50,
        step: 1,
      })}
      onUpdate={action('onUpdate')}
    />
  ))
  .add('with many points', () => {
    return (
      <EditCard
        title="Some title"
        score={99999999}
        onUpdate={action('onUpdate')}
      />
    )
  })
  .add('with extra long title', () => (
    <EditCard
      title="Some suuuuuuuuuuper looooooooong title here"
      score={20}
      onUpdate={action('onUpdate')}
    />
  ))

storiesOf('Screens/StartScreen', module)
  .add('no players', () => (
    <StartScreen
      players={[]}
      onStartGame={action('onStartGame')}
      onDeleteAllPlayers={action('onDeleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      onDeletePlayer={action('onDeletePlayer')}
    />
  ))
  .add('default', () => (
    <StartScreen
      players={[{ name: 'John', score: 100 }]}
      onStartGame={action('onStartGame')}
      onDeleteAllPlayers={action('onDeleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      onDeletePlayer={action('onDeletePlayer')}
    />
  ))

storiesOf('Screens/GameScreen', module)
  .add('single user', () => (
    <GameScreen
      players={[{ name: 'John', score: 0 }]}
      onUpdateScore={action('onUpdateScore')}
      onBack={action('onBack')}
      onResetScores={action('onResetScores')}
    />
  ))
  .add('multiple users', () => (
    <GameScreen
      players={[{ name: 'John', score: 0 }, { name: 'Jane', score: 10 }]}
      onUpdateScore={action('onUpdateScore')}
      onBack={action('onBack')}
      onResetScores={action('onResetScores')}
    />
  ))
