import {render} from '@testing-library/react'
import Divider from '@/components/Divider'

test("Divider renders correctly",()=>{
    const {container} = render(<Divider />)
    expect(container).toBeVisible()
})