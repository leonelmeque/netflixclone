import { FunctionComponent } from "react"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({
	children,
}) => {
	return <div>{children}</div>
}

export default Layout
