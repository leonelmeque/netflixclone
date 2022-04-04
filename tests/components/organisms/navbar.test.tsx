import Navbar from "-components/organisms/Navbar/NavbarWeb"
import { render } from "@testing-library/react"
import { screen } from "@testing-library/dom"

describe("<Navbar />", () => {
	test("renders correctly", () => {
		render(<Navbar />)
		expect(screen.getByTestId("navbar-web")).toBeTruthy()
	})

	test("renders with sign in button", () => {
		render(<Navbar />)
		expect(screen.getByRole("button")).toBeTruthy()
	})
})
