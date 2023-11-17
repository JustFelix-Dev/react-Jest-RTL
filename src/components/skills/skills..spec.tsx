import { render, screen } from "@testing-library/react"
import { Skills } from "./skills"

describe('Skills',()=>{
    test('renders correctly',()=>{
        const skills = ['HTML','CSS','Javascript']
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })
})