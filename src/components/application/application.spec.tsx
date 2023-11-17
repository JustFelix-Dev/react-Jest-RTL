import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application',()=>{
  test('renders correctly',()=>{
    render(<Application/>)

    const pageElement = screen.getByRole('heading',{level:1})
    expect(pageElement).toBeInTheDocument()

    const screenElement = screen.getByRole('heading',{level:2})
    expect(screenElement).toBeInTheDocument()

    const paragraphElement = screen.getByText('All Fields are Mandatory')
    expect(paragraphElement).toBeInTheDocument()

    const spanElement = screen.getByTitle('close')
    expect(spanElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const imgElement = screen.getByAltText('Alternate text')
    expect(imgElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox',{name:'Name'})
    expect(nameElement).toBeInTheDocument()
    const nameElement2 = screen.getByLabelText('Name',{selector:'input'})
    expect(nameElement2).toBeInTheDocument()
    const nameElement3 = screen.getByPlaceholderText('FullName')
    expect(nameElement3).toBeInTheDocument()
    const nameElement4 = screen.getByDisplayValue('Felix')
    expect(nameElement4).toBeInTheDocument()
    
    const joblocationElement = screen.getByRole('combobox')
    expect(joblocationElement).toBeInTheDocument()
  
    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
  
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})