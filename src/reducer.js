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
      nutriSum: {
        Magnesium:
            state.nutriSum.Magnesium + action.payload.Magnesium.veggieValue,
        Kalzium: state.nutriSum.Kalzium + action.payload.Kalzium.veggieValue,
        Eisen: state.nutriSum.Eisen + action.payload.Eisen.veggieValue,
        Zink: state.nutriSum.Zink + action.payload.Zink.veggieValue,
        Jod: state.nutriSum.Jod + action.payload.Jod.veggieValue,
        Selen: state.nutriSum.Selen + action.payload.Selen.veggieValue,
        VitA: state.nutriSum.VitA + action.payload.VitA.veggieValue,
        VitB2: state.nutriSum.VitB2 + action.payload.VitB2.veggieValue,
        Folsäure:
            state.nutriSum.Folsäure + action.payload.Folsäure.veggieValue,
      },
    }

  case ACTIONS.UPDATE_PICKED_FOOD:
    return {
      ...state,
      pickedFood: [...state.pickedFood, action.payload],
    }

  default:
    return state
  }
}
