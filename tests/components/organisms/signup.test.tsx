import SignUp from "-components/organisms/Forms/Signup"
import { render, screen } from "@testing-library/react"

describe("<Signup/>", () => {
	test("renders correctly", () => {
		render(<SignUp />)
		expect(screen.queryByTestId("signup-form")).toBeTruthy()
	})

	test.todo("email signup successfull")
	test.todo("accepts correct user e-mail input")
	test.todo("shows an error when user enters invalid email")
})
