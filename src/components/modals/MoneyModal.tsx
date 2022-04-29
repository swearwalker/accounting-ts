import { SyntheticEvent, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { IType } from '../../types'

function TypeModal(props: { onChange: any; type: IType; editMode?: boolean }) {
  const [type, setValue] = useState(props.type)

  const changeValue = (event: SyntheticEvent<HTMLInputElement>) => {
    const currentValue: string = event.currentTarget.value
    setValue({
      ...type,
      name: currentValue,
    })

    props.onChange({
      ...type,
      name: currentValue,
    })
  }

  return (
    <div className="content">
      <div className="content__wrapper">
        <span className="content__label">Введіть назву</span>
        <InputText value={type.name} onChange={changeValue} />
      </div>
    </div>
  )
}

export default TypeModal
