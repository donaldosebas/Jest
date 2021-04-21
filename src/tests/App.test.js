import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Entry from '../Entry'

describe('General Calculator Test Functions', () => {
  test('simple addition test', () => {
    render(<Entry />)
    const result = screen.getByDisplayValue('0', { selector: 'input' })
    const button2 = screen.getByText('2', { selector: 'button' })
    const button6 = screen.getByText('6', { selector: 'button' })
    const buttonEquals = screen.getByText('=', { selector: 'button' })
    const ButtonPlus = screen.getByText('+', { selector: 'button' })
    userEvent.click(button2)
    userEvent.click(ButtonPlus)
    userEvent.click(button6)
    userEvent.click(buttonEquals)
    expect(result).toHaveValue('8')
  })
  test('negative number test', () => {
    render(<Entry />)
    const result = screen.getByDisplayValue('0', { selector: 'input' })
    const button2 = screen.getByText('2', { selector: 'button' })
    const buttonPlusLess = screen.getByText('±', { selector: 'button' })
    userEvent.click(button2)
    userEvent.click(button2)
    userEvent.click(buttonPlusLess)
    expect(result).toHaveValue('-22')
  })
  test('more than 9 digits test', () => {
    render(<Entry />)
    const result = screen.getByDisplayValue('0', { selector: 'input' })
    const button2 = screen.getByText('2', { selector: 'button' })
    for (let i = 0; i < 10; i++) {
      userEvent.click(button2)
    }
    expect(result).toHaveValue('222222222')
  })
  test('Error with answers greater than 9 digits', () => {
    render(<Entry />)
    const result = screen.getByDisplayValue('0', { selector: 'input' })
    const button2 = screen.getByText('2', { selector: 'button' })
    const buttonMultiply = screen.getByText('×', { selector: 'button' })
    const button7 = screen.getByText('7', { selector: 'button' })
    const buttonEquals = screen.getByText('=', { selector: 'button' })
    for (let i = 0; i < 8; i++) {
      userEvent.click(button2)
    }
    userEvent.click(buttonMultiply)
    for (let i = 0; i < 8; i++) {
      userEvent.click(button7)
    }
    userEvent.click(buttonEquals)
    expect(result).toHaveValue('ERROR')
  })
})
