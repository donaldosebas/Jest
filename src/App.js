import React, { useContext, useEffect } from 'react'
import Button from './components/buttons'
import { CalculatorContext } from './store/StoreProvider'

const values = [
  ['AC', '±', '%', '<'],
  [7, 8, 9, '÷'],
  [4, 5, 6, '×'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+'],
]

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  screen: {
    width: '320px',
    height: '160px',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'right',
    fontSize: '80px',
    textSizeAdjust: 'auto',
  },
}
const App = () => {
  const { store, dispatch } = useContext(CalculatorContext)
  useEffect(() => {
    if (store.data.length === 4 && !store.error) {
      dispatch({ action: store.data[1] })
    }
  }, [store])
  return (
    <div style={styles.container}>
      <input
        readOnly
        value={store.error ? 'ERROR' : store.result}
        style={styles.screen}
      />
      {values.map((item, i) => (
        <div key={item} style={styles.row}>
          {item.map((value, j) => {
            if (j === 3) {
              return <Button value={value} color="orange" dispatch={dispatch} />
            }
            if (i === 0) {
              return <Button value={value} color="grey" dispatch={dispatch} />
            }
            return <Button value={value} color="lightgrey" dispatch={dispatch} />
          })}
        </div>
      ))}
    </div>
  )
}

export default App
