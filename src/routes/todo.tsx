import { useState } from 'react'
import TodoActionPanel from '../components/panels/TodoActionPanel'
import TodoTabsHeader from '../components/todo/TodoTabsHeader'
import { TabView, TabPanel } from 'primereact/tabview'
import { useSelector } from 'react-redux'
import { IStore } from '../types/store'
import TodoList from '../components/todo/TodoList'

function TodoPage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const todoState = useSelector((state: IStore) => state.todo)

  const tabs = [
    todoState.list,
    todoState.list.filter(item => item.loop),
    todoState.list.filter(item => !item.loop)
  ]

  return (
    <main className="main">
      <div className="container">
        <TodoActionPanel
          tabs={
            <TodoTabsHeader
              activeTabIndex={activeTabIndex}
              onChange={(index: number) => setActiveTabIndex(index)}
            />
          }
        />
        <TabView
          className='no-header'
          activeIndex={activeTabIndex}
          onTabChange={(e) => setActiveTabIndex(e.index)}
        >
          {
            tabs.map((tab, index) =>
              <TabPanel key={index}>
                <TodoList list={tab} />
              </TabPanel>
            )
          }
        </TabView>
      </div>
    </main>
  )
}

export default TodoPage
