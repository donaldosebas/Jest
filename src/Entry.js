import React, { createContext, useReducer } from 'react'
import App from './App'
import reducer from './store/reducer'

export const CalculatorContext = createContext()

const Entry = () => {
  const [store, dispatch] = useReducer(reducer, {
    result: 0,
    data: [],
    operator: 0,
    error: false,
  })
  return (
    <CalculatorContext.Provider value={{ store, dispatch }}>
      <App />
    </CalculatorContext.Provider>
  )
}
export default Entry
