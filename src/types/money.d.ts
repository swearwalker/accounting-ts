export interface IType {
  name: string
  id: number
}

export type TypesState = {
  types: IType[]
  type: {}
}

type TypeAction = {
  type: string
  data: IType
}

type DispatchType = (args: TypeAction) => TypeAction
