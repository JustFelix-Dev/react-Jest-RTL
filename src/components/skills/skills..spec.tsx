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

    test('renders login button',()=>{
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole('button',{name:'LogIn'})
        expect(loginButton).toBeInTheDocument()
    })
    test('does not render start Learning Button',()=>{
        render(<Skills skills={skills}/>)
        const startButton = screen.queryByRole('button',{name:'Start Learning'})
        expect(startButton).not.toBeInTheDocument()
    })
})