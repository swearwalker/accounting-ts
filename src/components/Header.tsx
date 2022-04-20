import React, { useState } from 'react'

import TypeModal from './modals/TypeModal'
import CategoryModal from './modals/CategoryModal'
import OperationModal from './modals/OperationModal'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { SplitButton } from 'primereact/splitbutton'

import { TypeDTO, CategoryDTO, OperationDTO } from '../types'
import { getGeneratedIntUniqueId } from '../helpers/common'
import { getDataByName, setDataByName } from '../helpers/localStorage'

const emptyType: TypeDTO = {
  name: '',
  id: 0,
}

const emptyCategory: CategoryDTO = {
  name: '',
  id: 0,
  variationId: null,
}

const emptyOperation: OperationDTO = {
  sum: null,
  id: 0,
  categoryId: null,
  typeId: null,
  date: new Date(),
}

function Header() {
  const [typeModal, setTypeModal] = useState(false)
  const [categoryModal, setCategoryModal] = useState(false)
  const [operationModal, setOperationModal] = useState(false)
  const [type, setType] = useState<TypeDTO>(emptyType)
  const [category, setCategory] = useState<CategoryDTO>(emptyCategory)
  const [operation, setOperation] = useState<OperationDTO>(emptyOperation)

  const actions = [
    {
      label: 'Тип',
      icon: 'pi pi-здгі',
      command: () => setTypeModal(true),
    },
    {
      label: 'Категорія',
      icon: 'pi pi-здгі',
      command: () => setCategoryModal(true),
    },
    {
      label: 'Операція',
      icon: 'pi pi-здгі',
      command: () => setOperationModal(true),
    },
  ]

  const changeType = (value: TypeDTO) => {
    setType(value)
  }

  const changeCategory = (value: CategoryDTO) => {
    setCategory(value)
  }

  const changeOperation = (value: OperationDTO) => {
    setOperation(value)
  }

  const cleanModals = () => {
    setType(emptyType)
    setCategory(emptyCategory)
    setOperation(emptyOperation)
  }

  const closeModals = () => {
    setTypeModal(false)
    setCategoryModal(false)
    setOperationModal(false)
    cleanModals()
  }

  const addNewItem = (name: string, state: TypeDTO | CategoryDTO | OperationDTO) => {
    const newItem = {
      ...state,
      id: getGeneratedIntUniqueId(),
    }

    const lsData = getDataByName(name)

    // @ts-ignore
    lsData.push(newItem)

    setDataByName(name, lsData)
    closeModals()
  }

  const renderFooter = (name: string, state: TypeDTO | CategoryDTO | OperationDTO) => {
    return (
      <div>
        <Button
          label="Відміна"
          icon="pi pi-times"
          onClick={closeModals}
          className="p-button-text"
        />
        <Button
          label="Зберегти"
          icon="pi pi-check"
          onClick={() => addNewItem(name, state)}
          autoFocus={true}
        />
      </div>
    )
  }

  return (
    <header className="header">
      <div className="container">
        <SplitButton label="Оберіть дію" icon="pi pi-plus" model={actions} />
      </div>
      <Dialog
        header="Додати тип"
        visible={typeModal}
        modal={false}
        draggable={false}
        onHide={closeModals}
        footer={renderFooter('types', type)}
      >
        <TypeModal type={type} onChange={changeType} />
      </Dialog>
      <Dialog
        header="Додати категорію"
        visible={categoryModal}
        modal={false}
        draggable={false}
        onHide={closeModals}
        footer={renderFooter('categories', category)}
      >
        <CategoryModal category={category} onChange={changeCategory} />
      </Dialog>
      <Dialog
        header="Додати операцію"
        visible={operationModal}
        modal={false}
        draggable={false}
        onHide={closeModals}
        footer={renderFooter('operations', operation)}
      >
        <OperationModal operation={operation} onChange={changeOperation} />
      </Dialog>
    </header>
  )
}

export default Header
