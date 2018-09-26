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
})
