const Reducer = (state, action) => {
  const valueUpdate = (value) => {
    if (typeof (state.operator) === 'string') return `${state.operator}${value}`
    const operator = state.operator * 10
    const intValue = parseInt(value, 10)
    return state.operator >= 0 ? operator + intValue : operator - intValue
  }
  const digitCheck = (value) => value.toString().length < 9
  const operation = (result) => {
    const data = [result, state.data[3]]
    if (!digitCheck(result)) {
      return {
        error: true,
        result: 0,
        operator: 0,
        data: [],
      }
    }
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
      if (!digitCheck(state.operator)) return { ...state }
      return {
        ...state,
        result: valueUpdate(action.value),
        operator: valueUpdate(action.value),
      }
    case 'OPERATOR':
      if (action.value === 'AC') {
        return {
          data: [],
          result: 0,
          operator: 0,
          error: false,
        }
      }
      if (action.value === '±') {
        return {
          ...state,
          result: state.result * -1,
          operator: state.result * -1,
        }
      }
      if (action.value === '.') {
        return {
          ...state,
          result: `${state.result}.`,
          operator: `${state.result}.`,
        }
      }
      state.data.push(parseFloat(state.operator, 10))
      state.data.push(action.value)
      return { ...state, result: 0, operator: 0 }
    default:
      return state
  }
}
export default Reducer
