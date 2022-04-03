import {
	memo,
	VoidFunctionComponent,
} from "react"
import Layout from "-components/atoms/Layout"

interface FeatureSectionProps {
	heading: string
	description: string
	component?: JSX.Element | string | (() => JSX.Element)
	direction?: keyof typeof contentDirection
}

const contentDirection = {
	ltr: "md:flex-row-reverse",
	rtl: "md:flex-row",
}

const FeatureSection: VoidFunctionComponent<FeatureSectionProps> =
	({ heading, description, direction, component }) => {
		const _direction = contentDirection[direction]

		return (
			<section about={heading} className='bg-black border-t-[16px] border-[#282828] '>
				<Layout
					className={`max-w-6xl mx-auto flex flex-col ${_direction}`}
				>
					<div className='text-white text-center md:text-left flex flex-col flex-1 justify-center'>
						<h2
							className='mb-4 xxs:text-[2rem] md:text-5xl '
							aria-label={heading}
						>
							{heading}
						</h2>
						<p className='xxs:text[1.25rem] lg:text-lg'>
							{description}
						</p>
					</div>
					<div className='flex-1 relative'>
						{typeof component === "function"
							? component()
							: component}
					</div>
				</Layout>
			</section>
		)
	}

const MemoizedFeatureSection = memo(FeatureSection)

MemoizedFeatureSection.displayName = "FeatureSection"

export default MemoizedFeatureSection
