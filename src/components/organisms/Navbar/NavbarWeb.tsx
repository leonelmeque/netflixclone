import { FunctionComponent } from "react"
import Link from "next/link"
import Button from "-components/atoms/Button"
import Layout from "-components/atoms/Layout"
interface NavbarWebProps {}

const NavbarWeb: FunctionComponent<NavbarWebProps> = () => {
	return (
		<nav data-testid='navbar-web' className='py-8'>
			<Layout className='max-w-6xl mx-auto'>
				<div className='flex justify-between align-center w-full'>
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
			</Layout>
		</nav>
	)
}

export default NavbarWeb
