import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import * as React from 'react'

import { BrowserRouter, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import { Form } from '../src/pages/Form/Form'

describe('The form require six input text', () => {
    beforeEach(async() => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form />
                    <Link to='/form' >linkForm</Link>
                </BrowserRouter>
            </Provider>
        )
        
        const link = screen.getByText(/linkForm/i);
        await userEvent.click(link)
    })

    it('Input to the Name', async () => {
        const input = screen.getByTitle('Input Name')
        expect(input).toBeInTheDocument()
    })
    it('Input to the Surname', async () => {
        const input = screen.getByTitle('Input Surname')
        expect(input).toBeInTheDocument()
    })
    it('Input to the DOB', async () => {
        const input = screen.getByTitle('Input DOB')
        expect(input).toBeInTheDocument()
    })
    it('Input to the Nationality', async () => {
        const input = screen.getByTitle('Input Nationality')
        expect(input).toBeInTheDocument()
    })
    it('Input to the Image', async () => {
        const input = screen.getByTitle('Input Image')
        expect(input).toBeInTheDocument()
    })
    it('Input to the Description', async () => {
        const input = screen.getByTitle('Input Description')
        expect(input).toBeInTheDocument()
    })
})

describe('The form require two Buttons', () => {

    beforeEach(async() => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form />
                    <Link to='/form' >linkForm</Link>
                </BrowserRouter>
            </Provider>
        )
        
        const link = screen.getByText(/linkForm/i);
        await userEvent.click(link)
    })

    it('Button CANCEL', () => {
        const button = screen.getByTitle('Button CANCEL');
        expect(button).toBeInTheDocument()
    })
    it('Button SUBMIT', () => {
        const button = screen.getByTitle('Button SUBMIT');
        expect(button).toBeInTheDocument()
    })

})