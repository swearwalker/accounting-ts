import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexPage from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/*<Route path="operations" element={<Operations />} />*/}
        {/*<Route path="variables" element={<Variables />} />*/}
        {/*<Route path="types" element={<Types />} />*/}
        {/*<Route path="tables" element={<Tables />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
