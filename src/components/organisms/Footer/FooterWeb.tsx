import Layout from "-components/atoms/Layout"

const listItemStyles =
	"flex-grow flex-shrink basis-[45%] md:basis-[23.3%] md:max-w-[23.3%] pb-4 ml-3 text-sm"

const FooterWeb = (): JSX.Element => (
	<>
		<footer className='bg-black'>
			<Layout className='max-w-3xl mx-auto flex flex-col text-[#333]'>
				<ul className='flex flex-row flex-wrap justify-start text-sm py-11'>
					<li className='flex-grow basis-full pb-4 ml-3'>
						<a href=''>Questions? Call 1-844-505-2993</a>
					</li>
					<li className={listItemStyles}>
						<span>FAQ</span>
					</li>
					<li className={listItemStyles}>
						<span>Help Center</span>
					</li>
					<li className={listItemStyles}>
						<span>Account</span>
					</li>
					<li className={listItemStyles}>
						<span>Media Center</span>
					</li>
					<li className={listItemStyles}>
						<span>Investor Relations</span>
					</li>
					<li className={listItemStyles}>
						<span>Jobs</span>
					</li>
					<li className={listItemStyles}>
						<span>Ways to Watch</span>
					</li>
					<li className={listItemStyles}>
						<span>Terms of use</span>
					</li>
					<li className={listItemStyles}>
						<span>Privacy</span>
					</li>
					<li className={listItemStyles}>
						<span>Cookie Preferences</span>
					</li>
					<li className={listItemStyles}>
						<span>Corporate Information</span>
					</li>
					<li className={listItemStyles}>
						<span>Contact Us</span>
					</li>
					<li className={listItemStyles}>
						<span>Speed Test</span>
					</li>
					<li className={listItemStyles}>
						<span>Legal Notices</span>
					</li>
					<li className={listItemStyles}>
						<span>Only on Netflix</span>
					</li>
				</ul>
			</Layout>
		</footer>
	</>
)

export default FooterWeb
