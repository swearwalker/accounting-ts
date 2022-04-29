import { useState } from 'react'

import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import TodoModal from '../modals/TodoModal'

import { ITodoItem } from '../../types/todo'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todo/actionCreators'

const emptyTodoItem: ITodoItem = {
  name: '',
  id: 0,
  done: false,
  loop: false,
  loopDone: false
}

function TodoActionPanel(props: any) {
  const [todoItem, setTodoItem] = useState<ITodoItem>(emptyTodoItem)
  const [addModal, setAddModal] = useState(false)

  const dispatch = useDispatch()

  const editMode = false

  const openAddModal = () => setAddModal(true)

  const closeAddModal = () => setAddModal(false)

  const addNewTodoItem = () => {
    // dispatch(addMoney(type))
    dispatch(addTodo(todoItem))
  }

  const changeTodoItem = (value: ITodoItem) => {
    setTodoItem(value)
  }

  const renderFooter = (add: any) => {
    return (
      <div>
        <Button
          label="Відміна"
          icon="pi pi-times"
          onClick={closeAddModal}
          className="p-button-danger"
        />
        <Button
          label={editMode ? "Зберегти" : "Створити"}
          icon="pi pi-check"
          onClick={add}
          autoFocus={true}
        />
      </div>
    )
  }

  return (
    <div className="action-panel flex items-center justify-between w-full rounded shadow px-4 bg-white sticky top-16">
      {props.tabs}
      <Button onClick={openAddModal} label="Додати" icon="pi pi-plus" className='p-button-sm p-button-info' />
      <Dialog
        header="Додати пункт"
        visible={addModal}
        modal={false}
        draggable={false}
        style={{ width: '25vw' }}
        onHide={closeAddModal}
        footer={renderFooter(() => addNewTodoItem())}
      >
        <TodoModal todoItem={todoItem} onChange={changeTodoItem} />
      </Dialog>
    </div>
  )
}

export default TodoActionPanel
