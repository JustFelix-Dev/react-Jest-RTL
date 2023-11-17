import { render, screen } from "@testing-library/react"
import { CounterTwo } from "./CounterTwo"
import  user  from "@testing-library/user-event"

describe('CounterTwo',()=>{
    test('renders correctly',()=>{
      render(<CounterTwo count={0}/>)
      const textElement = screen.getByText('Counter Two')
      expect(textElement).toBeInTheDocument()
    })

    test('handlers are called',async()=>{
        user.setup()
        const Increment = jest.fn()
        const Decrement = jest.fn()
        render(<CounterTwo count={0} handleIncrement={Increment} handleDecrement={Decrement}/>)
        const incrementButton = screen.getByRole('button',{name:'Increment'})
        const decrementButton = screen.getByRole('button',{name:'Decrement'})
       await user.click(incrementButton)
       await user.click(decrementButton)
       expect(Increment).toHaveBeenCalledTimes(1)
       expect(Decrement).toHaveBeenCalledTimes(1)

    })
})