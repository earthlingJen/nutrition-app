import { createAction } from 'redux-actions'

const ACTIONS = {
  SET_SELECT_SEX: 'SET_SELECT_SEX',
  SET_SELECT_AGE: 'SET_SELECT_AGE',
  SAVE_VALUE: 'SAVE_VALUE',
}

export const setSelectSex = createAction(ACTIONS.SET_SELECT_SEX)
export const setSelectAge = createAction(ACTIONS.SET_SELECT_AGE)
export const saveValue = createAction(ACTIONS.SAVE_VALUE)

export default ACTIONS
