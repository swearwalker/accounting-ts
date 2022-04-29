import { useState } from 'react'
// import { useSelector } from 'react-redux'

import MoneyModal from './modals/MoneyModal'
import CategoryModal from './modals/CategoryModal'
import OperationModal from './modals/OperationModal'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { SplitButton } from 'primereact/splitbutton'

import { IMoney, ICategory, IOperation } from '../types'
import { useDispatch } from 'react-redux'
import { addMoney } from '../store/money/actionCreators'
// import { MoneyState } from '../types/money'
// import { IStore } from '../types/store'
import { Link } from 'react-router-dom'

const emptyType: IMoney = {
  name: '',
  id: 0,
}

const emptyCategory: ICategory = {
  name: '',
  id: 0,
  variationId: null,
}

const emptyOperation: IOperation = {
  sum: null,
  id: 0,
  categoryId: null,
  typeId: null,
  date: new Date(),
}

function Header(props: any) {
  const [typeModal, setTypeModal] = useState(false)
  const [categoryModal, setCategoryModal] = useState(false)
  const [operationModal, setOperationModal] = useState(false)
  const [type, setType] = useState<IMoney>(emptyType)
  const [category, setCategory] = useState<ICategory>(emptyCategory)
  const [operation, setOperation] = useState<IOperation>(emptyOperation)

  const dispatch = useDispatch()

  // const money: MoneyState = useSelector((state: IStore) => state.money)

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

  const changeType = (value: IMoney) => {
    setType(value)
  }

  const changeCategory = (value: ICategory) => {
    setCategory(value)
  }

  const changeOperation = (value: IOperation) => {
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

  const addNewMoney = () => {
    dispatch(addMoney(type))
    closeModals()
  }

  const addNewCategory = () => {
    // dispatch(createCategory(category))
    closeModals()
  }

  const addNewOperation = () => {
    // dispatch(createOperation(operation))
    closeModals()
  }

  const renderFooter = (add: any) => {
    return (
      <div>
        <Button
          label="Відміна"
          icon="pi pi-times"
          onClick={closeModals}
          className="p-button-danger"
        />
        <Button
          label="Зберегти"
          icon="pi pi-check"
          onClick={add}
          autoFocus={true}
        />
      </div>
    )
  }

  return (
    <header className="header fixed top-0 left-0 z-40 shadow w-full py-2">
      <div className="container flex justify-between items-center">
        <nav className="header__nav nav">
            <Link className="nav__link mr-8" to="/">Головна</Link>
            <Link className="nav__link" to="/todo">Todo</Link>
        </nav>
        <SplitButton label="Оберіть дію" icon="pi pi-plus" className='p-button-sm' model={actions} />
      </div>
      <Dialog
        header="Додати тип"
        visible={typeModal}
        modal={false}
        draggable={false}
        style={{ width: '25vw' }}
        onHide={closeModals}
        footer={renderFooter(() => addNewMoney())}
      >
        <MoneyModal type={type} onChange={changeType} />
      </Dialog>
      <Dialog
        header="Додати категорію"
        visible={categoryModal}
        modal={false}
        draggable={false}
        style={{ width: '25vw' }}
        onHide={closeModals}
        footer={renderFooter(() => addNewCategory())}
      >
        <CategoryModal category={category} onChange={changeCategory} />
      </Dialog>
      <Dialog
        header="Додати операцію"
        visible={operationModal}
        modal={false}
        draggable={false}
        style={{ width: '25vw' }}
        onHide={closeModals}
        footer={renderFooter(() => addNewOperation())}
      >
        <OperationModal operation={operation} onChange={changeOperation} />
      </Dialog>
    </header>
  )
}

export default Header
