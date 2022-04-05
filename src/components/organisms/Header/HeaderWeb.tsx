import { FunctionComponent } from "react"
import SignUp from "../Forms/Signup"
import NavbarWeb from "../Navbar/NavbarWeb"

interface HeaderWebProps {}

const baseStyles =
	"h-[50rem] md:h-[37rem] lg:h-[43.7rem] relative"

const HeaderWeb: FunctionComponent<HeaderWebProps> = () => {
	return (
		<header
			data-testid='header-web'
			role='banner'
			className={`${baseStyles} before:z-10 before:overlay before:content-[""] before:bg-black before:bg-opacity-30`}
		>
			<img
				src='/images/hero-img.jpeg'
				alt='Banner image'
				className='object-cover z-0 overlay'
			/>
			<div className="z-30 relative">
				<NavbarWeb />
			</div>
			<div className='px-4 lg:max-w-2xl w-full mx-auto z-20 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
				<div className='text-white text-center mb-3'>
					<h1 className='text-[2rem] md:text-5xl lg:text-6xl'>
						Ultimate movies, Tv shows, and more.
					</h1>
					<p className='text-2xl'>
						Watch anywhere. Cancel anytime
					</p>
				</div>
				<SignUp />
			</div>
		</header>
	)
}

export default HeaderWeb
