import { createAction } from 'redux-actions'

const ACTIONS = {
  SET_SELECT_SEX: 'SET_SELECT_SEX',
  SET_SELECT_AGE: 'SET_SELECT_AGE',
}

export const setSelectSex = createAction(ACTIONS.SET_SELECT_SEX)
export const setSelectAge = createAction(ACTIONS.SET_SELECT_AGE)

export default ACTIONS
