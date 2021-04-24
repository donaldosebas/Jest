import React from 'react'

const styles = {
  container: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
  },
  grey: {
    backgroundColor: 'grey',
  },
  lightGrey: {
    backgroundColor: '#E1E1E1',
  },
  orange: {
    backgroundColor: '#F3B65D',
  },
}

const Button = ({
  value,
  color,
  dispatch,
}) => {
  const styleColor = () => {
    switch (color) {
      case 'orange':
        return styles.orange
      case 'grey':
        return styles.grey
      default:
        return styles.lightGrey
    }
  }
  const onClick = () => {
    dispatch({ action: typeof (value) === 'string' ? 'OPERATOR' : 'VALUE', value })
  }
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...styles.container, ...styleColor() }}
    >
      {value}
    </button>
  )
}
export default Button
