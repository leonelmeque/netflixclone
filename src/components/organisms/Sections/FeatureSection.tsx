import {
	FunctionComponent,
	ReactNode,
	VoidFunctionComponent,
} from "react"
import Layout from "-components/atoms/Layout"

interface FeatureSectionProps {
	heading: string
	description: string
	component?: ReactNode
}

const FeatureSection: VoidFunctionComponent<FeatureSectionProps> =
	({ heading, description, component }) => {
		return (
			<Layout>
				<div>
					<h2
						className='mb-4 xxs:text-[2rem] xxs:text-center lg:text-5xl lg:text-left'
						aria-label={heading}
					>
						{heading}
					</h2>
					<p className='xxs:text[1.25rem] lg:text-lg'>
						{description}
					</p>
				</div>
				<div>{component}</div>
			</Layout>
		)
	}

export default FeatureSection
