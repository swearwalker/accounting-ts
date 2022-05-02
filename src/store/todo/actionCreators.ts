import { ITodoItem, TodoAction } from '../../types/todo'
import { ActionTypes } from './actionTypes'

export function setTodo(payload: ITodoItem) {
  const action: TodoAction = {
    type: ActionTypes.SET_TODO,
    payload,
  }

  return action
}

export function addTodo(payload: ITodoItem) {
  const action: TodoAction = {
    type: ActionTypes.ADD_TODO,
    payload,
  }

  return action
}

export function editTodo(payload: ITodoItem) {
  const action: TodoAction = {
    type: ActionTypes.EDIT_TODO,
    payload,
  }

  return action
}

export function deleteTodo(payload: ITodoItem) {
  const action: TodoAction = {
    type: ActionTypes.DELETE_TODO,
    payload,
  }

  return action
}
