export interface ICategory {
  name: string
  id: number
  variationId: number | null
}

export type CategoryState = {
  categories: ICategory[]
}

type CategoryAction = {
  type: string
  data: ICategory
}

type DispatchCategoryType = (args: CategoryAction) => CategoryAction
