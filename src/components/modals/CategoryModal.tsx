import { SyntheticEvent, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { ICategory, IVariation } from '../../types'

import { variations } from '../../mocks/variations'

function CategoryModal(props: { onChange: any; category: ICategory; editMode?: boolean }) {
  const [category, setCategory] = useState(props.category)

  const changeValue = (event: SyntheticEvent<HTMLInputElement>) => {
    const currentValue: string = event.currentTarget.value
    setCategory({
      ...category,
      name: currentValue,
    })

    props.onChange({
      ...category,
      name: currentValue,
    })
  }

  const changeVariation = (e: { value: IVariation }) => {
    setCategory({
      ...category,
      variationId: e.value.id,
    })

    props.onChange({
      ...category,
      variationId: e.value.id,
    })
  }

  return (
    <div className="content">
      <div className="content__wrapper">
        <span className="content__label">Введіть назву</span>
        <InputText value={category.name} onChange={changeValue} />
      </div>
      <div className="content__wrapper">
        <span className="content__label">Оберіть варіацію</span>
        <Dropdown
          value={category.variationId}
          options={variations}
          onChange={changeVariation}
          optionLabel="name"
        />
      </div>
    </div>
  )
}

export default CategoryModal
