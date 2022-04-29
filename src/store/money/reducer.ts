import { ActionTypes } from './actionTypes'
import { TypesState, TypeAction } from '../../types/money'

const initState: TypesState = {
  types: [],
  type: {},
}

export const reducer = (state = initState, action: TypeAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TYPE:
      return {}
    case ActionTypes.EDIT_TYPE:
      return {}
    case ActionTypes.REMOVE_TYPE:
      return {}
  }
}
