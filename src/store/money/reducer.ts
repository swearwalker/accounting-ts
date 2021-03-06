import { ActionTypes } from './actionTypes'
import { MoneyState, MoneyAction, IMoney } from '../../types/money'
import { getGeneratedIntUniqueId } from '../../helpers/common'
import { getDataByName } from '../../helpers/localStorage'

const initState: MoneyState = {
  list: [],
  item: {},
}

let updatedList: IMoney[] | [] = []

export const moneyReducer = (state = initState, action: MoneyAction) => {
  switch (action.type) {
    case ActionTypes.GET_MONEY:
      const list: IMoney[] | [] = getDataByName('types')

      return {
        ...state,
        list,
      }
    case ActionTypes.ADD_MONEY:
      const newItem: IMoney = {
        ...action.payload,
        id: getGeneratedIntUniqueId(),
      }

      return {
        ...state,
        list: [...state.list, newItem],
      }
    case ActionTypes.EDIT_MONEY:
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
    case ActionTypes.DELETE_MONEY:
      updatedList = state.list.filter((item) => item.id !== action.payload.id)

      return {
        ...state,
        list: updatedList,
      }
  }

  return state
}
