import {render} from '@testing-library/react'
import Button from '@/components/@ui-elements/Button/Button'

test("Button renders correctly",()=>{
    const {container} = render(<Button label='button' size='lg' variant='primary' />)
    expect(container).toBeVisible()
})