export interface IMoney {
  name: string
  id: number
}

export type MoneyState = {
  list: IMoney[]
  item: {}
}

type MoneyAction = {
  type: string
  payload: IMoney
}

type DispatchType = (args: MoneyAction) => MoneyAction
