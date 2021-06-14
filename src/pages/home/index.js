import Link from 'next/link'
import styles from "./styles.module.css"
import {Button, Input} from '../../components/'
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
                <Input inputName="hero-signup" type="email" placeholder="Email Address" autoComplete/>
               <div className={styles["form-btn__container"]}>
               <Button label="Getting Started" variant="red" size="md" />
               </div>
            </form>
            <img className={styles["hero-header__bg"]} src="/images/home_background.jpeg" alt="movies backdrop" />
        </div>

        {/* Feature 1 */}
        <section className={styles["home-feature"]}>
            <h1>Enjoy on your Tv.</h1>
            <h2>Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,</h2>
            <div className={styles["home-feature__tv"]}>
                <img src="/images/tv.png" alt="tv" />
                <video className={styles["home-feature__video"]} autoPlay muted loop playsInline>
                    <source src="/video/video-tv-0819.m4v" type="video/mp4" />
                </video>
            </div>
        </section>
        {/* Feature 2 */}
        <section className={styles["home-feature"]}>
            <h1>Download your shows to watch offline</h1>
            <h2>Save your favorites easly and always have something to watch</h2>
            <div className={styles["home-feature__image-container"]}>
                <img src="/images/mobile.jpeg" alt="mobile" />
                <div className={styles["home-feature__mobile"]}>
                    <img className="pr-4" src="/images/stcover.png" alt="stanger things movie cover" />
                    <div className={styles["home-feature__card-text"]}>
                        <span>
                            Stranger Things
                        </span>
                        <span>
                            Downloading...
                        </span>
                    </div>
                    <div className={styles["home-feature__card-icon-animation"]}></div>
                </div>
            </div>
        </section>
        {/* Feature 2 */}
        <section className={styles["home-feature"]}>
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more</h2>
            <div className={styles["home-feature__img-container"]}>
                <img src="/images/imac.png" alt="imac" />
            </div>
        </section>

        <section className={styles["home-feature"]}>
            <h1>Create profiles for kids.</h1>
            <h2>Send kids on adventures with their favorite characters in a space made just for them--free with your membership.</h2>
            <div className={styles["home__feature-image-container"]}>
                <img src="/images/kids.png" alt="kids" />
            </div>
        </section>
        <section className={styles["home-faq"]}>
            <div className={styles["home-faq__questions"]}>
            <h1>Frequently Asked Questions.</h1>
                {/* Buttons with icons go here */}
            </div>
            
            <form action="submit" className={styles["hero-header__form"]}>
            <h3>
                Ready to watch? Enter your email to create or restart your membership
            </h3>
                <Input inputName="signup" type="email" placeholder="Email Address" autoComplete/>
               <div className={styles["form-btn__container"]}>
               <Button label="Getting Started" variant="red" size="md" />
               </div>
            </form>
        </section>
        {/* Footer component goes here */}
        <footer className={styles["nx-footer"]}>
            <a href="">
                Questions? Call 1-844-505-2993
            </a>
            <ul className={styles["nx-footer__list"]}>
                <li className={styles["nx-footer__list-item"]}><span>FAQ</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Account</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Investor Relations</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Redeem Gift Cards</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Ways to Watch</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Privacy</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Corporate Information</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Speed Test</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Netflix Originals</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Help Center</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Media Center</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Jobs</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Buy Gift Cards</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Terms of use</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Cookie Preferences</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Contact Us</span></li>
                <li className={styles["nx-footer__list-item"]}><span>Legal Notices</span></li>   
            </ul>
        </footer>
    </div>
)

export default Home