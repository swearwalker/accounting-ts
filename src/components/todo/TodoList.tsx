import { ITodoItem } from "../../types/todo"

function TodoList(props: {
  list: ITodoItem[] | []
}) {

  return (
    <ul className="list">
      {
        props.list.length > 0
        ? props.list.map((item: ITodoItem) =>
          <li key={item.id} className="list__item">{item.name}</li>
        )
        : <li className="list__item">Немає записів</li>
      }
    </ul>
  )
}

export default TodoList
