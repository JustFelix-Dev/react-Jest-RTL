import { render, screen } from "@testing-library/react"
import { Counter } from "./Counter"
import user from "@testing-library/user-event"

describe('Counter',()=>{
    test('renders correctly',()=>{
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button',{name:'Increment'})
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders an initial of 0',()=>{
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })
    test('renders a count of 1 after clicking the Increment button',async()=>{
        user.setup();
        render(<Counter />)
        const buttonElement = screen.getByRole('button',{name:'Increment'})
       await  user.click(buttonElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')

    })
    test('renders a count of 2 after clicking the Increment button',async()=>{
        user.setup();
        render(<Counter />)
        const buttonElement = screen.getByRole('button',{name:'Increment'})
       await  user.dblClick(buttonElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')

    })

})