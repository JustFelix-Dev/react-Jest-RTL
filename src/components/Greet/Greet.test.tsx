import { render, screen } from "@testing-library/react"
import Greet from "./Greet"


describe('Greet',()=>{
    test('renders correctly',()=>{
        render(<Greet/>)
        const greeting = screen.getByText('Hello World')
        expect(greeting).toBeInTheDocument()
    })
    
    test('renders name',()=>{
        render(<Greet name='Felix'/>)
        const greeting = screen.getByText('Hello World Felix')
        expect(greeting).toBeInTheDocument()
    })
})