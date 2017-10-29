import {combineReducers} from 'redux'

import transactionsReducer from './transactionsReducer'
import layoutReducer from './layoutReducer'

export const reducer = combineReducers({
    transactions: transactionsReducer,
    layout: layoutReducer
  })