import Button from "-components/atoms/Button"
import { VoidFunctionComponent } from "react"

interface SignUpProps {}

const SignUp: VoidFunctionComponent<SignUpProps> = () => {
	return (
		<div className='text-white py-8'>
			<h6 className='text-center mr-3 text-base py-4'>
				Ready to watch? Enter your email to create or restart
				your membership.
			</h6>
			<form
				action='submit'
				className='flex gap-2 sm:gap-1 flex-col md:flex-row mx-auto'
			>
				<input
					type='email'
					placeholder='mail@domain.com'
					autoComplete='off'
					className='bg-white h-16 p-4 flex-1 flex-shrink basis-2/3 text-black'
				/>
				<Button
					variant='primary'
					size='lg'
					label='Get Started'
				/>
			</form>
		</div>
	)
}

export default SignUp
