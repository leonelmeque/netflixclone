import {render} from '@testing-library/react'
import Button from '@/components/Button'

test("Divider renders correctly",()=>{
    const {container} = render(<Button />)
    expect(container).toBeVisible()
})