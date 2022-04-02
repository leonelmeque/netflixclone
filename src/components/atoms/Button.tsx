import { ComponentProps, FunctionComponent } from "react"

interface ButtonProps extends ComponentProps<"button"> {
	variant: keyof typeof variants
	label: string
	size: keyof typeof sizes
	fluid?: boolean
	className?: string
	icon?: string
}

const baseStyles =
	"outline-transparent text-center inline-flex font-semibold"

const variants = {
	primary: "bg-red text-white bg-red hover:bg-red",
	secondary: "black text-white",
	tertiary: "border text-white",
}

const sizes = {
	lg: "p-3.5 text-lg",
	md: "p-3.5 text-md",
	sm: "p-3.5 text-sm",
}

const Button: FunctionComponent<ButtonProps> = ({
	label,
	variant,
	size,
	fluid,
	...rest
}) => {
	const _variant = variants[variant]
	const _size = sizes[size]
	return (
		<button
			className={`${baseStyles} ${_variant} ${_size} ${
				fluid && "w-full"
			}`.trim()}
			{...rest}
		>
			{label}
		</button>
	)
}

export default Button
