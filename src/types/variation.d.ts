export interface IVariation {
  name: string
  id: number
}

export type VariationsState = {
  variations: IVariation[]
}

type VariationAction = {
  type: string
  data: IVariation
}

type DispatchVariation = (args: VariationAction) => VariationAction
