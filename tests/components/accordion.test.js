import {fireEvent, render} from '@testing-library/react'
import Accordion from '@/components/Accordion'

describe("@component/Accordion test suit",()=>{
    test("Renders correctly",()=>{
        const {container} = render(<Accordion />)
        expect(container).toBeVisible()
    })

    test("Toggle function works correclty",()=>{
        const {getByTestId } = render(<Accordion />)
        const accordion = getByTestId("accordion")
        expect(accordion).toBeTruthy()
        fireEvent.click(accordion)
        // const attr = accordion.getAttributeNames()
        //this should fail, but it doesn't for some interesting reason
        expect(accordion).not.toHaveAttribute("open")
    })
})

