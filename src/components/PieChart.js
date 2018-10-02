import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const SytledPie = styled.div`
  #root {
    padding: 50px;
  }

  circle.top {
    fill: transparent;
    stroke: #50e379;
    stroke-width: 10;
  }
  circle.bottom {
    fill: transparent;
    stroke: gainsboro;
    stroke-width: 8;
  }
  svg {
    transform: rotate(-90deg);
    border-radius: 50%;
  }
`

const StyledDiv = styled.div`
  position: relative;
  top: 43px;
  left: 2px;
  text-align: center;
  z-index: 1;
`

const StyledSpan = styled.span`
  position: relative;
  top: 10px;
  left: 17px;
`

export default class PieChart extends Component {
  static propTypes = {
    size: propTypes.number,
    value: propTypes.string,
    number: propTypes.number,
  }

  render() {
    let value = parseFloat(String(this.props.value))
    let val = value > 0.01 ? value : value * 100
    let strokeDasharray = `${val} 100`
    let containerStyle = {
      display: 'inline-block',
      width: 70,
    }

    return (
      <SytledPie style={containerStyle}>
        <StyledSpan>{this.props.number}</StyledSpan>
        <StyledDiv>{this.props.value}%</StyledDiv>
        <svg viewBox="0 0 32 32">
          <circle className="bottom" r="16" cx="16" cy="16" />
          <circle
            className="top"
            r="16"
            cx="16"
            cy="16"
            style={{ strokeDasharray }}
          />
        </svg>
      </SytledPie>
    )
  }
}
