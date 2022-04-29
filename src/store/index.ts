import { combineReducers } from 'redux'
import { moneyReducer } from './money/reducer'
import { todoReducer } from './todo/reducer'

export default combineReducers({
  money: moneyReducer,
  todo: todoReducer,
})
