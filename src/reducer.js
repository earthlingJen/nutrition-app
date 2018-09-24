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
  selectedNutrition: {},
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
    console.log('food to list')
    return {
      ...state,
      selectedNutrition: action.payload,
    }

  default:
    return state
  }
}
