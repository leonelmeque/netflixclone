import {
	Box,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Text,
	Button,
	Input,
	Heading,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Icon } from "@/components/common"
const HeroSignUpForm = (): JSX.Element => {
	const [input, setInput] = useState<string>("")
	const [isError, setIsError] = useState<boolean>(false)
	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		if (isError) {
			setIsError(!isError)
		}
		setInput(e.target.value)
	}
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (input === "") {
			setIsError(true)
		}
	}

	return (
		<Box color={"brand.white"}>
			<Heading
				as='h6'
				fontSize={"16px"}
				textAlign={"center"}
				marginBottom={"12px"}
			>
				Ready to watch? Enter your email to create or restart
				your membership.
			</Heading>
			<Box
				as='form'
				onSubmit={handleSubmit}
				data-testid='hero-signup-form'
				margin={"0 auto"}
				display={"flex"}
				style={{ gap: ".5rem" }}
				flexFlow={{ base: "column", lg: "row" }}
			>
				<FormControl
					height={"48px"}
					isInvalid={isError}
					autoComplete='off'
				>
					<FormLabel display={"none"} htmlFor='email' />
					<Input
						minH={"100%"}
						id='email'
						type={"email"}
						aria-label='Enter email address'
						value={input}
						autoComplete='off'
						onChange={handleInputChange}
						onInvalid={() => setIsError(!isError)}
						background={"brand.white"}
						aria-errormessage='emailErrorMessage'
						borderRadius={0}
						placeholder='Email'
					/>
					{isError && (
						<FormErrorMessage>
							<Text
								id='emailErrorMessage'
								color='brand.yellow'
								aria-label='Invalid email address'
							>
								Invalid email address
							</Text>
						</FormErrorMessage>
					)}
				</FormControl>
				<Button
					height={"48px"}
					variant='primary'
					type='submit'
					role={"button"}
					minWidth={"auto"}
					// width={"50%"}
					alignSelf={"center"}
					borderRadius={0}
				>
					<Icon iconName='ChevronRight' />
					<Text textTransform={"uppercase"}>Get Started</Text>
				</Button>
			</Box>
		</Box>
	)
}

export default HeroSignUpForm
