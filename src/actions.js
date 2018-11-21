import { createAction } from 'redux-actions'

const ACTIONS = {
  SET_SELECT_SEX: 'SET_SELECT_SEX',
  SET_SELECT_AGE: 'SET_SELECT_AGE',
  SAVE_VALUE: 'SAVE_VALUE',
  UPDATE_NUTRI_SUM: 'UPDATE_NUTRI_SUM',
  UPDATE_PICKED_FOOD: 'UPDATE_PICKED_FOOD',
  SET_SELECT_FOOD: 'SET_SELECT_FOOD',
  FOOD_ON_PLATE: 'FOOD_ON_PLATE',
  SELENIUM_OVERDOSE: 'SELENIUM_OVERDOSE',
  DELETE_FOOD: 'DELETE_FOOD',
}

export const setSelectSex = createAction(ACTIONS.SET_SELECT_SEX)
export const setSelectAge = createAction(ACTIONS.SET_SELECT_AGE)
export const saveValue = createAction(ACTIONS.SAVE_VALUE)
export const updateNutriSum = createAction(ACTIONS.UPDATE_NUTRI_SUM)
export const updatePickedFood = createAction(ACTIONS.UPDATE_PICKED_FOOD)
export const setSelectFood = createAction(ACTIONS.SET_SELECT_FOOD)
export const renderFoodOnPlate = createAction(ACTIONS.FOOD_ON_PLATE)
export const seleniumOverdose = createAction(ACTIONS.SELENIUM_OVERDOSE)
export const deleteFood = createAction(ACTIONS.DELETE_FOOD)

export default ACTIONS
