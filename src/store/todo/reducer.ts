import { ActionTypes } from './actionTypes'
import { TodoState, TodoAction, ITodoItem } from '../../types/todo'
import { getGeneratedIntUniqueId } from '../../helpers/common'

const initState: TodoState = {
  list: [],
  item: {},
}

let updatedList: ITodoItem[] | [] = []

export const todoReducer = (state = initState, action: TodoAction) => {
  switch (action.type) {
    case ActionTypes.SET_TODO:
      return {
        ...state,
        list: action.payload,
      }
    case ActionTypes.ADD_TODO:
      const newItem: ITodoItem = {
        ...action.payload,
        id: getGeneratedIntUniqueId(),
      }
      const list = JSON.parse(localStorage.getItem('todo') || '[]')

      localStorage.setItem('todo', JSON.stringify([...list, newItem]))

      return {
        ...state,
        list: [...state.list, newItem],
      }
    case ActionTypes.EDIT_TODO:
      updatedList = state.list.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          }
        }

        return item
      })

      return {
        ...state,
        list: updatedList,
      }
    case ActionTypes.DELETE_TODO:
      updatedList = state.list.filter((item) => item.id !== action.payload.id)

      return {
        ...state,
        list: updatedList,
      }
  }

  return state
}
