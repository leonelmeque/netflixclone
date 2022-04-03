import {
	ComponentProps,
	DetailedHTMLProps,
	DetailsHTMLAttributes,
	FunctionComponent,
	MouseEventHandler,
	ReactHTMLElement,
	useEffect,
	useRef,
	VoidFunctionComponent,
} from "react"
import { Minus, Plus } from "react-feather"

interface AccordionProps extends ComponentProps<"details"> {
	label: string
	content: string
}

const Accordion: VoidFunctionComponent<AccordionProps> = ({
	label,
	content,
	...rest
}) => {
	const detailsRef = useRef<any>(null)
	const plusRef = useRef<HTMLElement>(null)
	const minusRef = useRef<HTMLElement>(null)

	const controller = () => {
		if (detailsRef.current.open) {
			plusRef.current.classList.toggle("hidden")
			minusRef.current.classList.toggle("hidden")
		} else {
			plusRef.current.classList.toggle("hidden")
			minusRef.current.classList.toggle("hidden")
		}
	}

	return (
		<details
			ref={detailsRef}
			data-testid='accordion-container'
			className=' w-full bg-[#333]'
			onClick={(e) => {
				controller()
			}}
			{...rest}
		>
			<summary className='flex justify-between px-5 py-3 outline-none w-full text-3xl cursor-pointer'>
				{label}
				<div className='flex flex-col justify-center'>
					<span ref={plusRef}>
						<Plus />
					</span>
					<span className='hidden' ref={minusRef}>
						<Minus />
					</span>
				</div>
			</summary>
			<p className='pt-2 pb-6 px-5 text-lg pointer-events-none'>
				{content}
			</p>
		</details>
	)
}

export default Accordion
