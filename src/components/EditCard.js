import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PointButtonBar from './PointButtonBar'
import PlayerHeader from './PlayerHeader'

const Wrapper = styled.section`
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`

export default class EditCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    onUpdate: PropTypes.func,
  }

  render() {
    const { title, score, onUpdate } = this.props
    return (
      <Wrapper>
        <PlayerHeader title={title} score={score} />
        <PointButtonBar onClick={onUpdate} />
      </Wrapper>
    )
  }
}
