import {render,fireEvent} from '@testing-library/react'
import Home from "@/pages/home"
import Login from '@/pages/login'

describe("@pages/login test suit",()=>{
    test("Renders correctly", ()=>{
        const {container} = render(<Login />)
        expect(container).toBeVisible()
    })

    test("Submit button test", ()=>{
        const {container, getAllByText} = render(<Login />)
        expect(container).toBeVisible()
        const elements = getAllByText("Sign in")
        expect(elements[1]).toHaveTextContent("Sign in")
        fireEvent.click(elements[1])
    })
})