import {render} from '@testing-library/react'
import Button from '-components/atoms/Button'

test("Button renders correctly",()=>{
    const {container} = render(<Button label='button' size='lg' variant='primary' />)
    expect(container).toBeVisible()
})