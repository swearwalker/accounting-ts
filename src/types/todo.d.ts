export interface ITodoItem {
  id: number
  name: string
  done: boolean
  loop: boolean
  loopDone: boolean
  startDate?: Date | Date[]
  endDate?: Date | Date[]
}

export type TodoState = {
  list: ITodoItem[]
  item: ITodoItem | {}
}

type TodoAction = {
  type: string
  payload: ITodoItem
}

type DispatchType = (args: TodoAction) => TodoAction
