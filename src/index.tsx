import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import 'primereact/resources/themes/tailwind-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './styles/tailwind.scss'
import './styles/index.scss'
import { moneyReducer } from './store/money/reducer'
import { todoReducer } from './store/todo/reducer'

const store = configureStore({
  reducer: {
    // @ts-ignore
    money: moneyReducer,
    // @ts-ignore
    todo: todoReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
