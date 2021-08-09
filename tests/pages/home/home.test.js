import {render} from '@testing-library/react'
import Home from "@/pages/home"

describe("@pages/home test suit",()=>{
    test("Renders corretly",()=>{
        const {container} = render(<Home />)
        expect(container).toBeVisible()
    })
})