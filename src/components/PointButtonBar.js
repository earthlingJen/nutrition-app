import React, { Component } from 'react'
import Button from './Button'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  display: flex;
  background: #eee;
`

const FlexButton = styled(Button)`
  flex: 0 1 auto;
`

export default class PointButtonBar extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  }
  render() {
    const { onClick } = this.props
    return (
      <Wrapper>
        <FlexButton onClick={() => onClick(-10)}>-10</FlexButton>
        <FlexButton onClick={() => onClick(-5)}>-5</FlexButton>
        <FlexButton onClick={() => onClick(-1)}>-1</FlexButton>
        <FlexButton onClick={() => onClick(+1)}>+1</FlexButton>
        <FlexButton onClick={() => onClick(+5)}>+5</FlexButton>
        <FlexButton onClick={() => onClick(+10)}>+10</FlexButton>
      </Wrapper>
    )
  }
}
