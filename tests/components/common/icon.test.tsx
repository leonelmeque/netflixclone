import Icon from "@/components/common/Icon"
import { render, fireEvent } from "@testing-library/react"

describe("<Icon />", () => {
	test("renders successfuly with correct name", () => {
		const { container, getByLabelText } = render(
			<Icon iconName='Play' />
		)
		expect(container).toBeTruthy()
        expect(getByLabelText('Play icon')).toBeTruthy()
		
	})
    
	test("thorws an error when no icon name is provided", () => {
		let errorMessage = ""
		try {
			render(<Icon iconName='' />)
		} catch (error) {
			errorMessage = error.message
		}
		expect(errorMessage).toEqual(
			"Please provide an icon name"
		)
	})

})
