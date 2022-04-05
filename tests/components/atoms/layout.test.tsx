import { render, screen } from "@testing-library/react"
import Layout from "-components/atoms/Layout"

test("Button renders correctly", () => {
	render(
		<Layout>
			<div>Some Text</div>
		</Layout>
	)
	expect(screen.queryByText("Some Text")).toBeInTheDocument()
})
