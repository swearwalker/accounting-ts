export interface IOperation {
  sum: number | null
  id: number
  date: Date | Date[] | undefined
  categoryId: number | null
  typeId: number | null
}

export type OperationsState = {
  operations: IOperation[]
}

type OperationAction = {
  type: string
  data: IOperation
}

type DispatchType = (args: OperationAction) => OperationAction
