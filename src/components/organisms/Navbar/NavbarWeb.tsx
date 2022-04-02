import { FunctionComponent } from "react"
import Link from "next/link"
import Button from "-components/atoms/Button"
interface NavbarWebProps {}

const NavbarWeb: FunctionComponent<NavbarWebProps> = () => {
	return (
		<nav data-testid='nav' className='py-8'>
			<div className='flex justify-between align-center max-w-6xl mx-auto'>
				<img
					src='/nxlogo.svg'
					className='h-9 relative top-4'
					alt='Netflix Logo'
				/>
				<Link href='/login' passHref>
					<Button
						variant='primary'
						label='Sign In'
						size='lg'
						style={{ borderRadius: "4px" }}
					/>
				</Link>
			</div>
		</nav>
	)
}

export default NavbarWeb
