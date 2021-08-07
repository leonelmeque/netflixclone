import {render} from '@testing-library/react'
import Button from '@/components/Button'

test("Button renders correctly",()=>{
    const {container} = render(<Button />)
    expect(container).toBeVisible()
})