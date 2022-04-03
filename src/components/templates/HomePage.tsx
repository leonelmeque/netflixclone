import Layout from "-components/atoms/Layout"
import Accordion from "-components/molecules/Accordion"
import HeaderWeb from "-components/organisms/Header/HeaderWeb"
import FeatureSection from "-components/organisms/Sections/FeatureSection"
import { homeData } from "-utilities/constants/static-text"
import Head from "next/head"
import { VoidFunctionComponent } from "react"

const HomePage: VoidFunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Netflix Clone Home Page</title>
				<meta name='description' content='Netflix clone' />
			</Head>
			<HeaderWeb />
			<main className='bg-[#191919] bg-opacity-8'>
				<FeatureSection
					heading='Enjoy on yoyr Tv.'
					description='Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more'
					direction='rtl'
					component={() => (
						<div className='relative'>
							<img
								src='/images/tv.png'
								alt='Tv streaming'
								className='relative z-10'
							/>
							<video
								muted
								loop
								playsInline
								className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
							>
								<source
									src='/video/video-tv-0819.m4v'
									type='video/mp4'
								/>
							</video>
						</div>
					)}
				/>
				<FeatureSection
					heading='Download your shows to watch offline'
					description='Save your favorites easly and always have something to watch'
					direction='ltr'
					component={() => (
						<>
							<img
								src='/images/mobile.jpeg'
								alt='Mobile streaming'
								className='relative z-0'
							/>
							<div className='flex h-16 rounded-[.7rem] border-2 border-solid border-brown p-1 mx-auto w-1/2 bg-black absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
								<img
									className='mx-3 my-0'
									src='/images/stcover.png'
									alt='Stranger Things movie cover'
								/>
								<div className='text-white flex flex-col justify-center'>
									<span className='text-[.85rem]'>
										Stranger Things
									</span>
									<span className='text-sm text-blue'>
										Downloading...
									</span>
								</div>
								<img
									className='bg-contain bg-no-repeat bg-center w-[50px] mt-0 mr-4 mb-0 ml-auto'
									src='/images/icon-animation.gif'
									alt=''
								/>
							</div>
						</>
					)}
				/>
				<FeatureSection
					heading='Watch everywhere.'
					description='Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more'
					direction='rtl'
					component={() => (
						<>
							<img
								src='/images/imac.png'
								alt='Steaming devices'
								className='relative z-10'
							/>
							<video
								muted
								loop
								playsInline
								className=' w-[65%] absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2'
							>
								<source
									src='/video/video-tv-0819.m4v'
									type='video/mp4'
								/>
							</video>
						</>
					)}
				/>
				<FeatureSection
					heading='Create profiles for kids.'
					description='Send kids on adventures with their favorite characters in a space made just for them--free with your membership.'
					direction='ltr'
					component={() => (
						<>
							<img
								src='/images/kids.png'
								alt='Profile account for kids'
								className='z-10 relative'
							/>
						</>
					)}
				/>
				<section
					about='Frequently Asked Questions'
					className='bg-black text-white'
				>
					<h2 className='text-4xl text-center font-bold py-7'>
						Frequently Asked Questions
					</h2>
					<Layout className={`max-w-3xl mx-auto`}>
						<ul className='flex flex-col justify-center gap-4'>
							{homeData.faq.map(({ id, question, answer }) => (
								<li className='flex-1' key={id}>
									<Accordion
										title={question}
										label={question}
										content={answer}
									/>
								</li>
							))}
						</ul>
					</Layout>
				</section>
			</main>
		</>
	)
}

export default HomePage
