import { fireEvent, render } from "@testing-library/react"
import Footer from "-components/organisms/Footer/FooterWeb"

test("Footer Renders correctly", () => {
	const { container } = render(<Footer />)
	expect(container).toBeVisible()
})
