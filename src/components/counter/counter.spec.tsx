import { render, screen } from "@testing-library/react"
import { Counter } from "./Counter"

describe('Counter',()=>{
    test('renders correctly',()=>{
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button',{name:'Increment'})
        expect(buttonElement).toBeInTheDocument()
    })
})