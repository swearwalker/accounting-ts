import React, { useState } from 'react'

import TypeModal from './modals/TypeModal'
import CategoryModal from './modals/CategoryModal'
import OperationModal from './modals/OperationModal'
import { Dialog } from 'primereact/dialog'
import { SplitButton } from 'primereact/splitbutton'

import { TypeDTO, CategoryDTO, OperationDTO } from '../types'
import { getGeneratedIntUniqueId } from '../helpers/common'

function Header() {
  const [typeModal, setTypeModal] = useState(false)
  const [categoryModal, setCategoryModal] = useState(false)
  const [operationModal, setOperationModal] = useState(false)
  const [type, setType] = useState<TypeDTO>({
    name: '',
    id: '',
  })
  const [category, setCategory] = useState<CategoryDTO>({
    name: '',
    id: '',
    variationId: '',
  })
  const [operation, setOperation] = useState<OperationDTO>({
    sum: null,
    id: '',
    categoryId: '',
    typeId: '',
    date: new Date(),
  })

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

  const closeTypeModal = () => {
    setTypeModal(false)
    setType({
      name: '',
      id: '',
    })
  }

  const closeCategoryModal = () => {
    setCategoryModal(false)
    setCategory({
      name: '',
      id: '',
      variationId: '',
    })
  }

  const closeOperationModal = () => {
    setOperationModal(false)
    setOperation({
      sum: null,
      id: '',
      categoryId: '',
      typeId: '',
      date: new Date(),
    })
  }

  const addNewType = () => {
    const newType = {
      ...type,
      id: getGeneratedIntUniqueId,
    }
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
        onHide={closeTypeModal}
      >
        <TypeModal type={type} onChange={changeType} />
      </Dialog>
      <Dialog
        header="Додати категорію"
        visible={categoryModal}
        modal={false}
        draggable={false}
        onHide={closeCategoryModal}
      >
        <CategoryModal category={category} onChange={changeCategory} />
      </Dialog>
      <Dialog
        header="Додати операцію"
        visible={operationModal}
        modal={false}
        draggable={false}
        onHide={closeOperationModal}
      >
        <OperationModal operation={operation} onChange={changeOperation} />
      </Dialog>
    </header>
  )
}

export default Header
