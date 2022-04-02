import {
	Box,
	Button,
	Container,
	Image,
} from "@chakra-ui/react"
import Link from "next/link"

const Navbar = (): JSX.Element => {
	return (
		<Box as='nav' data-testid='navbar' padding='2rem 0'>
			<Container
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
				maxW={"container.xl"}
			>
				<Image
					height={"36px"}
					src='/nxlogo.svg'
					data-testid='navbar-brand'
				/>
				<Link href="/login" passHref>
					<Button
						variant={"primary"}
						role='button'
						data-testid='signin-btn'
					>
						Sign in
					</Button>
				</Link>
			</Container>
		</Box>
	)
}
export default Navbar
