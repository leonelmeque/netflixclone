import {render} from '@testing-library/react'
<<<<<<< HEAD:tests/pages/home/home.test.js
import Home from "@/pages/home"
=======
import Home from "@/pages/index"
>>>>>>> story/browse:tests/pages/home/home.test.tsx

describe("@pages/home test suit",()=>{
    test("Renders corretly",()=>{
        const {container} = render(<Home />)
        expect(container).toBeVisible()
    })
})