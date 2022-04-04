import { ComponentProps, FunctionComponent } from "react"

interface LayoutProps extends ComponentProps<"div"> {}

const Layout: FunctionComponent<LayoutProps> = ({
	className,
	children,
	...rest
}) => {
	return (
		<div className={`p-4 ${className ? className : ''}`.trim()} {...rest}>
			{children}
		</div>
	)
}

export default Layout
