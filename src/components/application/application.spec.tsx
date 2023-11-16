import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application',()=>{
  test('renders correctly',()=>{
    render(<Application/>)
    const nameElement = screen.getByRole('textbox')
    expect(nameElement).toBeInTheDocument()

    const joblocationElement = screen.getByRole('combobox')
    expect(joblocationElement).toBeInTheDocument()
  
    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
  
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})