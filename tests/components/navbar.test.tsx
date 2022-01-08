import Navbar from "@/components/Navbar"
import { render } from "@testing-library/react"
import { screen } from "@testing-library/dom"

describe("<Navbar />", () => {
	test("renders correctly", () => {
		render(<Navbar />)
		expect(screen.getByTestId("navbar")).toBeTruthy()
        expect(screen.getByTestId('navbar-brand')).toBeTruthy()
	})
	test("renders with sign in button", () => {
		render(<Navbar />)
		expect(screen.getByRole("button")).toBeTruthy()
	})
})
