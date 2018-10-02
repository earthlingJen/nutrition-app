/* eslint-disable no-console */
import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

let pieColor = 'red'

const SytledPie = styled.div`
  #root {
    padding: 50px;
  }

  circle.top {
    fill: transparent;
    stroke: ${props => props.pieColor};
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
  margin-bottom: -17px;
`

export default class PieChart extends Component {
  static propTypes = {
    size: propTypes.number,
    value: propTypes.string,
    number: propTypes.number,
    unit: propTypes.string,
  }

  render() {
    let value = parseFloat(String(this.props.value))
    let val = value > 0.01 ? value : value * 100

    this.props.value >= 90
      ? (pieColor = '#50e379')
      : this.props.value >= 50
        ? (pieColor = 'orange')
        : (pieColor = 'red')

    let strokeDasharray = `${val} 100`
    let containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 70,
      textAlign: 'center',
    }

    return (
      <SytledPie style={containerStyle} pieColor={pieColor}>
        <StyledSpan>
          {this.props.number} {this.props.unit}
        </StyledSpan>

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
