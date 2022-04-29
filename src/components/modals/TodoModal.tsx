import { SyntheticEvent, useState } from 'react'

import { ITodoItem } from '../../types/todo'

import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';

function TodoModal(props: { onChange: any; todoItem: ITodoItem; editMode?: boolean }) {
  const [todoItem, setTodoItem] = useState(props.todoItem)

  const changeName = (event: SyntheticEvent<HTMLInputElement>) => {
    const currentValue: string = event.currentTarget.value
    setTodoItem({
      ...todoItem,
      name: currentValue,
    })

    props.onChange({
      ...todoItem,
      name: currentValue,
    })
  }

  const toggleLoop = (value: boolean) => {
    setTodoItem({
      ...todoItem,
      loop: value,
    })

    props.onChange({
      ...todoItem,
      loop: value,
    })
  }

  return (
    <div className="content">
      <div className="content__wrapper">
        <span className="content__label">Повторювати</span>
        <InputSwitch checked={todoItem.loop} onChange={(e) => toggleLoop(e.value)} />
      </div>
      <div className="content__wrapper">
        <span className="content__label">Введіть назву</span>
        <InputText value={todoItem.name} onChange={changeName} />
      </div>
    </div>
  )
}

export default TodoModal
