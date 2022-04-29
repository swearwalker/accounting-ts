import { IMoney, MoneyAction } from '../../types/money'
import { ActionTypes } from './actionTypes'

export function getMoney(payload: IMoney) {
  const action: MoneyAction = {
    type: ActionTypes.GET_MONEY,
    payload,
  }

  return action
}

export function editMoney(payload: IMoney) {
  const action: MoneyAction = {
    type: ActionTypes.EDIT_MONEY,
    payload,
  }

  return action
}

export function addMoney(payload: IMoney) {
  const action: MoneyAction = {
    type: ActionTypes.ADD_MONEY,
    payload,
  }

  return action
}

export function deleteMoney(payload: IMoney) {
  const action: MoneyAction = {
    type: ActionTypes.DELETE_MONEY,
    payload,
  }

  return action
}
