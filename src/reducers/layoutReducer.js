import {SHOW_SPINNER, HIDE_SPINNER} from '../actions/constants'

const initState = {
  isSpinnerShowing: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {...state, isSpinnerShowing: true}
    case HIDE_SPINNER:
      return {...state, isSpinnerShowing: false}
    default:
      return state
  }
}
