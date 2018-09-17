import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  height: 48px;
  background: ${props => (props.color ? props.color : 'hotpink')};
  color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;

  &:hover {
    background: teal;
  }
`

export default class Button extends Component {
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.node,
    ]),
    dataTestId: PropTypes.string,
    onClick: PropTypes.func,
  }

  render() {
    const { color, dataTestId } = this.props
    return (
      <StyledButton
        data-test-id={dataTestId}
        color={color}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    )
  }
}
