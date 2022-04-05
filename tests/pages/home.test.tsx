import {render} from '@testing-library/react'
import Home from "-pages/index"

describe("@pages/home test suit",()=>{
    test("Renders corretly",()=>{
        const {container} = render(<Home />)
        expect(container).toBeTruthy()
    })
})