/* global module */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Header from '../components/Header'
import NutritionTile from '../components/NutritionTile'

import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
  }
`

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Header />)

storiesOf('NutritionTile', module)
  .addDecorator(withKnobs)
  .add('with text', () => <NutritionTile />)
