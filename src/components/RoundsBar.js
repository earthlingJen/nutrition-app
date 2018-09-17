import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  height: 32px;
  background: #eee;
`

const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  &:first-child {
    margin-left: auto;
  }
  &:not(:first-child) {
    border-left: 1px solid #ddd;
  }
`
export default class RoundsBar extends Component {
  static propTypes = {
    scores: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  scrollerRef = React.createRef()

  componentDidMount() {
    const scroller = this.scrollerRef.current
    scroller.scrollLeft = scroller.scrollWidth
  }

  render() {
    let { scores } = this.props
    scores = scores.length ? scores : [0]
    return (
      <Scroller innerRef={this.scrollerRef}>
        {scores.map((score, i) => (
          <Score key={i}>{score}</Score>
        ))}
      </Scroller>
    )
  }
}
