export interface ICategory {
  name: string
  id: number
  variationId: number | null
}

export type CategoriesState = {
  categories: ICategory[]
}

type CategoryAction = {
  type: string
  data: ICategory
}

type DispatchType = (args: CategoryAction) => CategoryAction
