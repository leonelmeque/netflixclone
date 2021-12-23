import {render} from '@testing-library/react'
import Divider from '@/components/@ui-elements/Divider/Index'

test("Divider renders correctly",()=>{
    const {container} = render(<Divider size={32} />)
    expect(container).toBeVisible()
})