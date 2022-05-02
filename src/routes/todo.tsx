import { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import TodoActionPanel from '../components/panels/TodoActionPanel'
import TodoTabsHeader from '../components/todo/TodoTabsHeader'
import { TabView, TabPanel } from 'primereact/tabview'
import { IStore } from '../types/store'
import TodoList from '../components/todo/TodoList'
import * as actionCreators from '../store/todo/actionCreators'

const mapStateToProps = (state: IStore) => ({
  ...state.todo
})

function TodoPage(props: any) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const todoState = useSelector((state: IStore) => state.todo)

  const tabs = [
    todoState.list,
    todoState.list.filter(item => item.loop),
    todoState.list.filter(item => !item.loop)
  ]

  useEffect(() => {
    async function setTodoData() {
      await props.setTodo(JSON.parse(localStorage.getItem('todo') || '[]'))
    }

    setTodoData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

export default connect(mapStateToProps, actionCreators)(TodoPage)
