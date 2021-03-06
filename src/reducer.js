/* eslint-disable no-console */
//import { load } from './services'
import ACTIONS from './actions'
import { nutriNeeds } from './data/NutriNeeds'
import { veggies } from './data/Veggies'
import { fruits } from './data/Fruits'
import { nuts } from './data/Nuts'

const initialState = /*load('app') ||*/ {
  nutriNeeds: nutriNeeds,
  veggies: veggies,
  fruits: fruits,
  nuts: nuts,
  user: {
    sex: 'female',
    age: '25to50',
  },
  selectedNutrition: {
    nutriName: 'Magnesium',
    nutriValue: 300,
    nutriUnit: 'mg',
  },
  nutriSum: {
    Magnesium: 0,
    Kalzium: 0,
    Eisen: 0,
    Zink: 0,
    Jod: 0,
    Selen: 0,
    VitA: 0,
    VitB2: 0,
    Folsäure: 0,
  },
  pickedFood: [],
  pickedFoodType: 'veggies',
  foodOnPlate: null,
  amount: 100,
  seleniumTooHigh: false,
  // iodineOverdose: false,
}

export default function reducer(state = initialState, action = {}) {
  let index
  switch (action.type) {
  case ACTIONS.SET_SELECT_SEX:
    return {
      ...state,
      user: {
        ...state.user,
        sex: action.payload,
      },
    }

  case ACTIONS.SET_SELECT_AGE:
    return {
      ...state,
      user: {
        ...state.user,
        age: action.payload,
      },
    }

  case ACTIONS.SAVE_VALUE:
    return {
      ...state,
      selectedNutrition: action.payload,
    }

  case ACTIONS.UPDATE_NUTRI_SUM:
    return {
      ...state,
      nutriSum: {
        Magnesium:
            state.nutriSum.Magnesium + action.payload.Magnesium.foodValue,
        Kalzium: state.nutriSum.Kalzium + action.payload.Kalzium.foodValue,
        Eisen: state.nutriSum.Eisen + action.payload.Eisen.foodValue,
        Zink: state.nutriSum.Zink + action.payload.Zink.foodValue / 1000,
        Jod: state.nutriSum.Jod + action.payload.Jod.foodValue / 1000,
        Selen: state.nutriSum.Selen + action.payload.Selen.foodValue,
        VitA: state.nutriSum.VitA + action.payload.VitA.foodValue / 1000,
        VitB2: state.nutriSum.VitB2 + action.payload.VitB2.foodValue / 1000,
        Folsäure: state.nutriSum.Folsäure + action.payload.Folsäure.foodValue,
      },
    }

  case ACTIONS.UPDATE_PICKED_FOOD:
    return {
      ...state,
      pickedFood: [action.payload, ...state.pickedFood],
    }

  case ACTIONS.SET_SELECT_FOOD:
    return {
      ...state,
      pickedFoodType: action.payload,
    }

  case ACTIONS.FOOD_ON_PLATE:
    return {
      ...state,
      foodOnPlate: action.payload,
    }

  case ACTIONS.SELENIUM_OVERDOSE:
    return {
      ...state,
      seleniumTooHigh: true,
    }

  case ACTIONS.DELETE_FOOD:
    index = action.payload
    return {
      ...state,
      pickedFood: [
        ...state.pickedFood.slice(0, index),
        ...state.pickedFood.slice(index + 1),
      ],
    }

  default:
    return state
  }
}
