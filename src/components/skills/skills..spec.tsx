import { render, screen } from "@testing-library/react"
import { Skills } from "./skills"

describe('Skills',()=>{
    const skills = ['HTML','CSS','Javascript']

    test('renders correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('renders list elements',()=>{
        render(<Skills skills={skills}/>)
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
    })
})