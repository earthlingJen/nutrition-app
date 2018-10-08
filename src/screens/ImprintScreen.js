import React, { Component } from 'react'
import { StyledHeader } from '../components/Header'
import styled from 'styled-components'

const Container = styled.main`
  background: #9e9e9e24;
  margin: 17px;
  border-radius: 5px;
  padding: 10px;
`

export default class ImprintScreen extends Component {
  render() {
    return (
      <div>
        <StyledHeader>Impressum</StyledHeader>
        <Container>
          <h4>Anmerkungen:</h4>
          <p>* = es liegen keine Daten vor</p>
          <p>Alle Angaben ohne Gewähr.</p>
          <br />
          <h4>Quellen: </h4>
          <p>
            <a href="">Die große vegane Nährwerttabelle</a> von Katharina Petter
            und Tobias Pohlmann von 2014{' '}
          </p>
          <p>
            Nahrungsmittelicons stammen zum Großteil von{' '}
            <a href="http://www.freepik.com" title="Freepik">
              Freepik
            </a>{' '}
            von der Website{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            und sind lizensiert durch{' '}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
            >
              CC 3.0 BY
            </a>
          </p>
        </Container>
      </div>
    )
  }
}