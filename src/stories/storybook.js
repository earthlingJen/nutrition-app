/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs/react'
import AgeSelect from '../components/AgeSelect'
import FoodTile from '../components/FoodTile'
import NutritionTile from '../components/NutritionTile'
import SexSelect from '../components/SexSelect'
import { injectGlobal } from 'styled-components'
import { action } from '@storybook/addon-actions'
import FoodTypeSelect from '../components/FoodTypeSelect'
import spinach from '../pics/spinach.svg'
import PieChart from '../components/PieChart'
import AnimatedLogo from '../components/AnimatedLogo'
import Footer from '../components/Footer'

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
storiesOf('AgeSelect', module).add('with text', () => (
  <AgeSelect setSelectAge={action('setSelectAge(event.target.value)')} />
))

storiesOf('FoodTile', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <FoodTile
      veggieName={text('Veggie', 'Spinat')}
      veggieIcon={spinach}
      veggieValue={number('VeggieValue ', 300) + text('unit', ' mg')}
    />
  ))

storiesOf('FoodTypeSelect', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <FoodTypeSelect
      setSelectFood={action('setSelectFood(event.target.value)')}
    />
  ))

storiesOf('NutritionTile', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <NutritionTile
      nutriName={text('NutritionName', 'Magnesium')}
      nutriValue={number('NutritionValue', 300)}
      nutriUnit={text('NutritionUnit', 'mg')}
    />
  ))

storiesOf('PieChart', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <PieChart
      number={number('nutriValue', 300)}
      value={number('Prozent', '50%')}
      unit={text('nutriUnit', 'mg')}
    />
  ))

storiesOf('SexSelect', module).add('with text', () => (
  <SexSelect setSelectSex={action('setSelectSex(event.target.value)')} />
))

storiesOf('Logo', module).add('with animation', () => (
  <div style={{ position: 'absolute', marginTop: '50px' }}>
    <AnimatedLogo />
  </div>
))

storiesOf('Footer', module).add('with icons', () => <Footer />)
