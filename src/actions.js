import { createAction } from 'redux-actions'

const ACTIONS = {
  SET_SELECT_SEX: 'SET_SELECT_SEX',
  SET_SELECT_AGE: 'SET_SELECT_AGE',
  SAVE_VALUE: 'SAVE_VALUE',
  ADD_TO_PLATE: 'ADD_TO_PLATE',
  UPDATE_NUTRI_SUM: 'UPDATE_NUTRI_SUM',
}

export const setSelectSex = createAction(ACTIONS.SET_SELECT_SEX)
export const setSelectAge = createAction(ACTIONS.SET_SELECT_AGE)
export const saveValue = createAction(ACTIONS.SAVE_VALUE)
export const addToPlate = createAction(ACTIONS.ADD_TO_PLATE)
export const updateNutriSum = createAction(ACTIONS.UPDATE_NUTRI_SUM)

export default ACTIONS
