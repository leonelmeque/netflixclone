import {render,fireEvent} from '@testing-library/react'
import Login from '@/pages/login'
import * as nextRouter from 'next/router'

describe("@pages/login test suit",()=>{
    beforeEach(()=>{
        // let mockedRouter = nextRouter.useRouter
         // mockedRouter = <jest.Mock
        // nextRouter.useRouter.mockImplementation(()=>({route:'/', push(){
        //     history.pushState({},'','/login')
        // }}))

        (nextRouter.useRouter as jest.MockedFunction<any>).mockReturnedValueOnce({
            router:'/',
            push(){
                history.pushState({},'','/login')                
            }
        })

    })
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