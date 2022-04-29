import { MoneyState } from './money'
import { TodoState } from './todo'

export interface IStore {
  money: MoneyState
  todo: TodoState
}
