import Link from 'next/link'

const Home = () => (
    <>
        <nav className="home__nav">
            <div className="home__nav-brand" aria-labelledby="Company name"></div>
            <div className="home__nav-item" aria-labelled="Sign in"></div>
        </nav>
        <div className="home__hero">
            <h1>
                Ultimate movies, Tv shows, and more.
            </h1>
            <p>
                Watch anywhere. Cancel anytime.
            </p>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
        </div>

        <section className="home__feature">
            <h1>Enjoy on your Tv.</h1>
            <p>Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,</p>
            <img src="" alt="" />
        </section>
        <section className="home__feature">
            <h1>Download your shows to watch offline</h1>
            <p>Save your favorites easly and always have something to watch</p>
            <img src="" alt="" />
        </section>
        <section className="home__feature">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more</p>
            <img src="" alt="" />
        </section>

        <section className="home__feature">
            <h1>Create profiles for kids.</h1>
            <p>Send kids on adventures with their favorite characters in a space made just for them--free with your membership.</p>
            <img src="" alt="" />
        </section>
        <section className="home__faq">
            <h1>Frequently Asked Questions</h1>
            <div className="faq__container">
                {/* Buttons with icons go here */}
            </div>
            <h3>
                Ready to watch? Enter your email to create or restart your membership
            </h3>
            {/* Input goes here */}
            {/* inline button goes here */}
        </section>
        {/* Footer component goes here */}
    </>
)

export default Home