import { load } from './services'

const initialState = load('app') || {}

export default function reducer(state = initialState) {
  return state
}
