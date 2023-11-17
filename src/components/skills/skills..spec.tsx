import { render } from "@testing-library/react"
import { Skills } from "./skills"

describe('Skills',()=>{
    test('renders correctly',()=>{
        const skills = ['HTML','CSS','Javascript']
        render(<Skills skills={skills}/>)
    })
})