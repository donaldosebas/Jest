const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const Reducer = (state, action) => {
  const digitCheck = (value) => value.toString().length < 9
  const operation = (result) => {
    const data = [result, state.data[3]]
    if (!digitCheck(result)) return { error: true, result: 0, operator: 0, data: [] }
    if (state.data[3] === '=') {
      return {
        ...state,
        result,
        data: [],
        operator: result,
      }
    }
    return { result, data, operator: 0 }
  }
  switch (action.action) {
    case '+':
      return operation(state.data[0] + state.data[2])
    case '-':
      return operation(state.data[0] - state.data[2])
    case '×':
      return operation(state.data[0] * state.data[2])
    case '÷':
      return operation(state.data[0] / state.data[2])
    case '%':
      return operation(state.data[0] % state.data[2])
    case 'VALUE':
      if (numbers.includes(action.value)) {
        const value = state.operator >= 0 ? (state.operator * 10) + parseInt(action.value) : (state.operator * 10) - parseInt(action.value)
        if (!digitCheck(state.operator)) return { ...state }
        return { ...state, result: value, operator: value }
      }
      if (action.value === 'AC') return { data: [], result: 0, operator: 0 }
      if (action.value === '±') {
        return {
          ...state,
          result: state.result * -1,
          operator: state.result * -1,
        }
      }
      state.data.push(state.operator)
      state.data.push(action.value)
      return { ...state, result: 0, operator: 0 }
    default:
      return state
  }
}
export default Reducer
