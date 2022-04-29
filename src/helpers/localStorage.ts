import { ICategory, IOperation, IMoney } from '../types'

const getDataByName = <CurrentType extends IMoney[] | ICategory[] | IOperation[] | []>(
  name: string
): CurrentType => {
  return JSON.parse(localStorage.getItem(name) || '[]')
}

const setDataByName = (name: string, data: IMoney[] | ICategory[] | IOperation[]) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export { getDataByName, setDataByName }
