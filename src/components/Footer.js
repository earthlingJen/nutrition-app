import React, { Component } from 'react'
import styled from 'styled-components'
import nutriIcon from '../pics/footerIcons/nutriIcon.svg'
import imprintIcon from '../pics/footerIcons/imprintIcon.svg'
import basketIcon from '../pics/footerIcons/basketIcon.svg'
import plateIcon from '../pics/footerIcons/plateIcon.svg'
import { Link } from 'react-router-dom'

const StyledFooter = styled.footer`
  background: #50e379;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 60px;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Link to="/nutrition">
          <img src={nutriIcon} alt="Link to nutrition screen" />
        </Link>
        <Link to="/planning">
          <img src={plateIcon} alt="Link to planning screen" />
        </Link>
        <Link to="/shopping">
          <img src={basketIcon} alt="Link to shopping screen" />
        </Link>
        <Link to="/imprint">
          <img src={imprintIcon} alt="Link to imprint screen" />
        </Link>
      </StyledFooter>
    )
  }
}
