import HeroSignUpForm from "@/components/HeroSignUpForm"
import {
	fireEvent,
	screen,
	waitFor,
} from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"

describe("<HeroSignupForm />", () => {
	let input: any = null
	beforeEach(() => {
		render(<HeroSignUpForm />)
		input = screen.getByLabelText("Enter email address")
	})
	test("renders succefully", () => {
		expect(
			screen.getByTestId("hero-signup-form")
		).toBeTruthy()
	})
	test("accepts correct user e-mail input", () => {
		userEvent.type(input, "mail@domain.com")

		expect(input.value).toBe("mail@domain.com")
	})
	test("shows an error when user enters invalid email", async () => {
		fireEvent.click(screen.getByRole("button"))

		await waitFor(() => {
			expect(input).toHaveErrorMessage("Invalid email address")
		})
	})
})
