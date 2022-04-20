import { CategoryDTO, OperationDTO, TypeDTO } from '../types'

const getDataByName = (name: string): TypeDTO[] | CategoryDTO[] | OperationDTO[] | [] => {
  return JSON.parse(localStorage.getItem(name) || '[]')
}

const setDataByName = (name: string, data: TypeDTO[] | CategoryDTO[] | OperationDTO[]) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export { getDataByName, setDataByName }
