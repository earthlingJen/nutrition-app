import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FlexWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background: teal;
  color: white;
  padding: 4px;
`

export default class PlayerHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
  }
  render() {
    const { title, score } = this.props
    return (
      <FlexWrapper>
        <span>{title}</span>
        <span>{score}</span>
      </FlexWrapper>
    )
  }
}
