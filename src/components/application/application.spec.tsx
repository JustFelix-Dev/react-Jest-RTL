import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application',()=>{
  test('renders correctly',()=>{
    render(<Application/>)

    const pageElement = screen.getByRole('heading',{level:1})
    expect(pageElement).toBeInTheDocument()

    const screenElement = screen.getByRole('heading',{level:2})
    expect(screenElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox',{name:'Name'})
    expect(nameElement).toBeInTheDocument()
    const nameElement2 = screen.getByLabelText('Name',{selector:'input'})
    expect(nameElement2).toBeInTheDocument()
    
    const joblocationElement = screen.getByRole('combobox')
    expect(joblocationElement).toBeInTheDocument()
  
    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
  
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})