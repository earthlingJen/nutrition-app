//import { load } from './services'
import ACTIONS from './actions'
import { nutriNeeds } from './data/NutriNeeds'
import { veggies } from './data/Veggies'

const initialState = /*load('app') ||*/ {
  nutriNeeds: nutriNeeds,
  veggies: veggies,
  user: {
    sex: 'female',
    age: '25to50',
  },
  selectedNutrition: {
    nutriName: 'Magnesium',
    nutriValue: 1000,
    nutriUnit: 'mg',
  },
  nutriSum: 0,
}

export default function reducer(state = initialState, action = {}) {
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

  case ACTIONS.ADD_TO_PLATE:
    // console.log('food to list')
    return {
      ...state,
      selectedNutrition: action.payload,
    }

  case ACTIONS.UPDATE_NUTRI_SUM:
    return {
      ...state,
      nutriSum: state.nutriSum + action.payload,
    }

  default:
    return state
  }
}
