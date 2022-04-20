import { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { CategoryDTO, OperationDTO, TypeDTO } from '../../types'

function OperationModal(props: { onChange: any; operation: OperationDTO; editMode?: boolean }) {
  const [operation, setOperation] = useState(props.operation)

  const changeDate = (e: { value: Date | Date[] | undefined }) => {
    setOperation({
      ...operation,
      date: e.value,
    })

    props.onChange({
      ...operation,
      date: e.value,
    })
  }

  const changeSum = (e: { value: number | null }) => {
    setOperation({
      ...operation,
      sum: e.value,
    })

    props.onChange({
      ...operation,
      sum: e.value,
    })
  }

  const changeTypeId = (e: { value: TypeDTO }) => {
    setOperation({
      ...operation,
      typeId: e.value.id,
    })

    props.onChange({
      ...operation,
      typeId: e.value.id,
    })
  }

  const changeCategoryId = (e: { value: CategoryDTO }) => {
    setOperation({
      ...operation,
      categoryId: e.value.id,
    })

    props.onChange({
      ...operation,
      categoryId: e.value.id,
    })
  }

  return (
    <div className="content">
      <div className="content__wrapper">
        <span className="content__label">Введіть суму</span>
        <InputNumber
          value={operation.sum}
          useGrouping={false}
          mode="currency"
          currency="UAH"
          onValueChange={changeSum}
        />
      </div>
      <div className="content__wrapper">
        <span className="content__label">Оберіть тип</span>
        <Dropdown
          value={operation.typeId}
          options={[]}
          onChange={changeTypeId}
          optionLabel="name"
        />
      </div>
      <div className="content__wrapper">
        <span className="content__label">Оберіть категорію</span>
        <Dropdown
          value={operation.categoryId}
          options={[]}
          onChange={changeCategoryId}
          optionLabel="name"
        />
      </div>
      <div className="content__wrapper">
        <span className="content__label">Оберіть дату</span>
        <Calendar
          dateFormat="d/m/yy"
          value={operation.date}
          onChange={changeDate}
          showIcon={true}
        />
      </div>
    </div>
  )
}

export default OperationModal
