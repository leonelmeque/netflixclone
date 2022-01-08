import CircleButton from "@/components/common/CircleButton"
import { render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
 
describe("<Icon />", () => {
	test("rendes successfuly", () => {
		const { container, getByRole } = render(
			<CircleButton iconName='Activity' />
		)
		expect(container).toBeTruthy()
		fireEvent.click(getByRole('button'))
        
	})
})
