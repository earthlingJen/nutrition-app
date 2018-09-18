import { load } from './services'
import ACTIONS from './actions'
import { nutriNeeds } from './data/NutriNeeds'

const initialState = load('app') || {
  nutriNeeds: nutriNeeds,
  user: {
    sex: null,
    age: null,
  },
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

  default:
    return state
  }
}
