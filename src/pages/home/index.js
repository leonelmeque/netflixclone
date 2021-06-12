import Link from 'next/link'
import styles from "./styles.module.css"
const Home = () => (
    <div style={{background: "#222"}}>
        <nav className={styles["home__nav"]}>
            <div className="home__nav-brand" aria-labelledby="Company name">Netflix</div>
            <div className="home__nav-item" aria-labelled="Sign in">Sign in</div>
        </nav>
        {/* Hero header */}
        <div className={styles["hero-header"]}>
            <div className={styles["hero-header__container"]}>
                <h1>
                    Ultimate movies, Tv shows, and more.
                </h1>
                <h2>
                    Watch anywhere. Cancel anytime.
                </h2>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
            </div>
            <form action="submit" className={styles["hero-header__form"]}>
                <label className={styles["nx-input"]}>
                    <input type="text" placeholder="Email address"/>
                    <label htmlFor="">
                        
                    </label>
                </label>
                <button>Get Started</button>
            </form>
            <img className={styles["hero-header__bg"]} src="/images/home_background.jpeg" alt="movies backdrop" />
        </div>

        {/* Feature 1 */}
        <section className={styles.home__feature}>
            <h1>Enjoy on your Tv.</h1>
            <h2>Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,</h2>
            <div className={styles["home__feature-image-container"]}>
                <img src="/images/tv.png" alt="tv" />
            </div>
        </section>
        {/* Feature 2 */}
        <section className={styles.home__feature}>
            <h1>Download your shows to watch offline</h1>
            <h2>Save your favorites easly and always have something to watch</h2>
            <div className={styles["home__feat-image-container"]}>
                <img src="/images/mobile.jpeg" alt="mobile" />
                <div className={styles["home__feature-image-container"]}>
                    <img className="pr-4" src="/images/stcover.png" alt="stanger things movie cover" />
                    <div className={styles["home__feature-card-text"]}>
                        <span>
                            Stranger Things
                        </span>
                        <span>
                            Downloading...
                        </span>
                    </div>
                    <div className={styles["home__feature-card-icon-animation"]}></div>
                </div>
            </div>
        </section>
        {/* Feature 2 */}
        <section className={styles.home__feature}>
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more</h2>
            <div className={styles["home__feature-image-container"]}>
                <img src="/images/imac.png" alt="imac" />
            </div>
        </section>

        <section className={styles.home__feature}>
            <h1>Create profiles for kids.</h1>
            <h2>Send kids on adventures with their favorite characters in a space made just for them--free with your membership.</h2>
            <div className={styles["home__feature-image-container"]}>
                <img src="/images/kids.png" alt="kids" />
            </div>
        </section>
        <section className="home__faq">
            <h1>Frequently Asked Questions.</h1>
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

    </div>
)

export default Home