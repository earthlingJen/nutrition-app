import reducer from './reducer'
import ACTIONS from './actions'

describe('reducer', () => {
  it('returns the original state again', () => {
    const state = { foo: 'bar' }
    const someAction = { type: 'something unknown' }

    expect(reducer(state, someAction)).toBe(state)
  })

  describe(ACTIONS.SET_SELECT_SEX, () => {
    it('changes the sex', () => {
      const state = {
        user: {
          sex: 'female',
          age: '25to50',
        },
      }

      const action = {
        type: ACTIONS.SET_SELECT_SEX,
        payload: 'male',
      }

      expect(reducer(state, action)).toEqual({
        user: {
          sex: 'male',
          age: '25to50',
        },
      })
    })
  })

  describe(ACTIONS.SET_SELECT_AGE, () => {
    it('changes the age', () => {
      const state = {
        user: {
          sex: 'female',
          age: '25to50',
        },
      }

      const action = {
        type: ACTIONS.SET_SELECT_AGE,
        payload: '15to18',
      }

      expect(reducer(state, action)).toEqual({
        user: {
          sex: 'female',
          age: '15to18',
        },
      })
    })
  })

  describe(ACTIONS.SAVE_VALUE, () => {
    it('saves the value', () => {
      const state = {
        selectedNutrition: {
          nutriName: 'Magnesium',
          nutriValue: 300,
          nutriUnit: 'mg',
        },
      }

      const action = {
        type: ACTIONS.SAVE_VALUE,
        payload: {
          nutriName: 'Eisen',
          nutriValue: 15,
          nutriUnit: 'mg',
        },
      }

      expect(reducer(state, action)).toEqual({
        selectedNutrition: {
          nutriName: 'Eisen',
          nutriValue: 15,
          nutriUnit: 'mg',
        },
      })
    })
  })

  describe(ACTIONS.UPDATE_NUTRI_SUM, () => {
    it('changes nutriSum', () => {
      const state = {
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
      }

      const action = {
        type: ACTIONS.UPDATE_NUTRI_SUM,
        payload: {
          Magnesium: {
            foodValue: 0,
          },
          Kalzium: {
            foodValue: 0,
          },
          Eisen: {
            foodValue: 12,
          },
          Zink: {
            foodValue: 0,
          },
          Jod: {
            foodValue: 0,
          },
          Selen: {
            foodValue: 0,
          },
          VitA: {
            foodValue: 0,
          },
          VitB2: {
            foodValue: 0,
          },
          Folsäure: {
            foodValue: 0,
          },
        },
      }
      expect(reducer(state, action)).toEqual({
        nutriSum: {
          Magnesium: 0,
          Kalzium: 0,
          Eisen: 12,
          Zink: 0,
          Jod: 0,
          Selen: 0,
          VitA: 0,
          VitB2: 0,
          Folsäure: 0,
        },
      })
    })
  })

  describe(ACTIONS.UPDATE_PICKED_FOOD, () => {
    it('updates picked food', () => {
      const state = {
        pickedFood: ['Brokkoli'],
      }

      const action = {
        type: ACTIONS.UPDATE_PICKED_FOOD,
        payload: 'Spinat',
      }

      expect(reducer(state, action)).toEqual({
        pickedFood: ['Spinat', 'Brokkoli'],
      })
    })
  })

  describe(ACTIONS.SET_SELECT_FOOD, () => {
    it('selectes food type', () => {
      const state = {
        pickedFoodType: 'Obst',
      }

      const action = {
        type: ACTIONS.SET_SELECT_FOOD,
        payload: 'Gemüse',
      }

      expect(reducer(state, action)).toEqual({
        pickedFoodType: 'Gemüse',
      })
    })
  })

  describe(ACTIONS.FOOD_ON_PLATE, () => {
    it('puts picked food in foodOnPlate', () => {
      const state = {
        foodOnPlate: null,
      }

      const action = {
        type: ACTIONS.FOOD_ON_PLATE,
        payload: { foodIcon: 'spinach' },
      }

      expect(reducer(state, action)).toEqual({
        foodOnPlate: { foodIcon: 'spinach' },
      })
    })
  })
})
