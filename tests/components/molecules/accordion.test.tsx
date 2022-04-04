import Accordion from "-components/molecules/Accordion"
import { render, screen } from "@testing-library/react"

describe("<Accordion />", () => {
	test("renders correctly", () => {
		render(
			<Accordion
				content='Some type of content'
				label='Accordion 1'
			/>
		)
		expect(screen.queryByText("Accordion 1")).toBeTruthy()
	})
})
