/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import NutritionTile from '../components/NutritionTile'
import AgeSelect from '../components/AgeSelect'
import SexSelect from '../components/SexSelect'

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

storiesOf('NutritionTile', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <NutritionTile nutriName="Magnesium" nutriValue="300" nutriUnit="mg" />
  ))

storiesOf('AgeSelect', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AgeSelect />)

storiesOf('SexSelect', module)
  .addDecorator(withKnobs)
  .add('with text', () => <SexSelect />)
