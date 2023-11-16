import { render,screen } from '@testing-library/react'
import Greet from "./Greet"

test('Greet renders correctly',()=>{
    render(<Greet/>)
    const greeting = screen.getByText('Hello World')
    expect(greeting).toBeInTheDocument()
    
})