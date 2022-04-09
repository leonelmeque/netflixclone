import { Button } from "-components/atoms"
import Layout from "-components/atoms/Layout"
import { VoidFunctionComponent } from "react"

interface BillboardProps {}

const Billboard: VoidFunctionComponent<BillboardProps> =
	() => {
		return (
			<header
				data-testid='billboard'
				className='bg-white h-52 md:h-[95%] relative'
			>
				<img
					src='https://images.unsplash.com/photo-1505925456693-124134d66749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt='Movie Poster for ${movie_name}'
					className='object-cover absolute -z-0 w-full h-full'
				/>

				{/* Billboard Movie Information */}
				<Layout className='max-w-7xl mx-auto h-full grid  place-items-center justify-start'>
					<div className='flex flex-col relative z-0 max-w-lg'>
						<img
							src='https://logos-world.net/wp-content/uploads/2020/11/Spider-Man-Logo.png'
							className='max-w-60 max-h-60 object-cover'
							alt=''
						/>
						<p className='text-white text-2xl'>
							Spider-Man is a 2002 American superhero film based on
							the Marvel Comics character of the same name.
						</p>
						<div className='flex my-9'>
							<Button variant='primary' size='lg' label='Play' />
							<Button
								variant='secondary'
								size='lg'
								label='More info'
							/>
						</div>
					</div>
				</Layout>

				{/* Parental advisory */}
				<div className="bottom-[22%] right-0 absolute text-white text-lg">
					<div className="py-2 px-3 border-l-[2.5px] border-x-white min-w-[7rem] bg-[rgba(52,52,52,0.50)]">
						<p>16+</p>
					</div>
				</div>
			</header>
		)
	}

export default Billboard
