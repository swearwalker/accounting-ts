import { IType, ICategory, IOperation } from '../../types'
import { getDataByName } from '../../helpers/localStorage'
import { TypesState } from '../../types/money'

export const getTypes = (state = ): TypesState => {
  return {
    types: getDataByName('types'),
  }
}

export const getTypeById = (): TypesState => {
  return {
    types: getDataByName('types'),
  }
}

export const addType = (newItem: IType[]): TypesState => {
  const types: IType[] | [] = getDataByName('types')

  // @ts-ignore
  types.push(newItem)
  return {
    types,
  }
}

export const removeType

export const getComments = (postId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_COMMENTS_PENDING,
    })

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )

      dispatch({
        type: ActionType.GET_POST_COMMENTS_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: ActionType.GET_POST_COMMENTS_FAIL,
        payload: err.message,
      })
    }
  }
}
