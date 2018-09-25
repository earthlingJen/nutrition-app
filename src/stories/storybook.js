/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs/react'
import AgeSelect from '../components/AgeSelect'
import FoodTile from '../components/FoodTile'
import NutritionTile from '../components/NutritionTile'
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
storiesOf('AgeSelect', module).add('with text', () => <AgeSelect />)

storiesOf('FoodTile', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <FoodTile
      veggieName={text('Veggie', 'Spinat')}
      veggieIcon="icon"
      veggieValue={number('VeggieValue: ', 300) + text('unit', ' mg')}
    />
  ))

storiesOf('NutritionTile', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <NutritionTile
      nutriName={text('NutritionName: ', 'Magnesium')}
      nutriValue={number('NutritionValue: ', 300)}
      nutriUnit={text('NutritionUnit: ', 'mg')}
    />
  ))

storiesOf('SexSelect', module).add('with text', () => <SexSelect />)
