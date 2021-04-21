import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Entry from '../Entry'

describe('General Calculator Test Functions', () => {
  test('simple addition test', () => {
    render(<Entry />)
    const pantalla = screen.getByDisplayValue('0', { selector: 'input' })
    const boton1 = screen.getByText('2', { selector: 'button' })
    const boton2 = screen.getByText('6', { selector: 'button' })
    const boton3 = screen.getByText('=', { selector: 'button' })
    const boton4 = screen.getByText('+', { selector: 'button' })
    userEvent.click(boton1)
    userEvent.click(boton4)
    userEvent.click(boton2)
    userEvent.click(boton3)
    expect(pantalla).toHaveValue('8')
  })
  test('negative number test', () => {
    render(<Entry />)
    const pantalla = screen.getByDisplayValue('0', { selector: 'input' })
    const boton1 = screen.getByText('2', { selector: 'button' })
    const boton2 = screen.getByText('±', { selector: 'button' })
    userEvent.click(boton1)
    userEvent.click(boton1)
    userEvent.click(boton2)
    expect(pantalla).toHaveValue('-22')
  })
})
