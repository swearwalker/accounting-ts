import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexPage from './routes'
import Header from './components/Header'
import TodoPage from './routes/todo'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="todo" element={<TodoPage />} />
        {/*<Route path="variables" element={<Variables />} />*/}
        {/*<Route path="categories" element={<Types />} />*/}
        {/*<Route path="tables" element={<Tables />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
