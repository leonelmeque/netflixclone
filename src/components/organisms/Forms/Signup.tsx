import Button from "-components/atoms/Button"
import { VoidFunctionComponent } from "react"

interface SignUpProps {}

const SignUp: VoidFunctionComponent<SignUpProps> = () => {
	return (
		<div className='text-white'>
			<h6 className='text-center mr-3 text-base py-4'>
				Ready to watch? Enter your email to create or restart
				your membership.
			</h6>
			<form
				action='submit'
				className='flex gap-2 flex-col md:flex-row mx-auto'
			>
				<input
					type='email'
					placeholder='mail@domain.com'
					autoComplete='off'
					className='bg-white h-14 p-4 flex-1 text-black'
				/>
				<Button variant='primary' size='lg' label='Sign Up' />
			</form>
		</div>
	)
}

export default SignUp
