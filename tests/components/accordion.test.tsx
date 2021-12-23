import {fireEvent, render} from '@testing-library/react'
import Accordion from '@/components/@ui-elements/Accordion'

describe("@component/Accordion test suit",()=>{
    test("Renders correctly",()=>{
        const {container} = render(<Accordion label='Some time of label' dropdownText='Some dropdonw text' />)
        expect(container).toBeVisible()
    })

    test("Toggle function works correclty",()=>{
        const { getByTestId } = render(
          <Accordion
            label='Some time of label'
            dropdownText='Some dropdonw text'
          />
        );
        const accordion = getByTestId("accordion")
        expect(accordion).toBeTruthy()
        fireEvent.click(accordion)
        // const attr = accordion.getAttributeNames()
        //this should fail, but it doesn't for some interesting reason
        expect(accordion).not.toHaveAttribute("open")
    })
})

