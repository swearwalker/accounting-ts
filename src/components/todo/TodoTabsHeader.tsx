import { useState } from 'react'

function TodoTabsHeader(props: any) {
  const [tabIndex, setTabIndex] = useState(props.activeTabIndex)

  const tabs = ['Усі', 'Повторюванні', 'Одноразові']

  const checkActiveTab = (index: number) => tabIndex === index ? 'text-blue-500 border-b-blue-500' : ''

  const changeTabIndex = (index: number) => {
    setTabIndex(index)
    props.onChange(index)
  }

  return (
    <ul className="tabs flex items-center list-none">
      {
        tabs.map((item, index) => 
          <li
            key={index}
            onClick={() => changeTabIndex(index)}
            className={`tabs-tab border-transparent border-b-4 font-semibold p-4 cursor-pointer ${checkActiveTab(index)}`}
          >
            {item}
          </li>
        )
      }
    </ul>
  )
}

export default TodoTabsHeader
