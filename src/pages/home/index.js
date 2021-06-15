import Link from 'next/link'
import styles from "./styles.module.css"
import { Button, ButtonCollapse, Input, Footer } from '../../components/'
import React from 'react'


const DropDownContext = React.createContext()
DropDownContext.displayName = "ButtonsCollapseProvider"
const Home = () => (
    <div style={{ background: "#222" }}>
        <nav className={styles["home__nav"]}>
            <div className="nx-brand" aria-labelledby="Company name">Netflix</div>
            <Button label="Sign in" variant="red" size="sm" />
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
                <Input inputName="hero-signup" type="email" placeholder="Email Address" autoComplete />
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

                <ul className={styles["home-faq__questions-container"]}>

                
                        <ButtonCollapse label="What is Netflix" dropdownText="
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        " inputName="1" name="faq" />
                        <ButtonCollapse label="What is Netflix" inputName="2" name="faq" />



                        <ButtonCollapse label="What is Netflix" inputName="3" name="faq" />



                        <ButtonCollapse label="What is Netflix" inputName="4" name="faq" />



                        <ButtonCollapse label="What is Netflix" inputName="5" name="faq" />



                        <ButtonCollapse label="What is Netflix" inputName="6" name="faq" />



                        <ButtonCollapse label="What is Netflix" inputName="7" name="faq" />



                        <ButtonCollapse label="What is Netflix" inputName="8" name="faq" />

                </ul>

            </div>

            <form action="submit" className={styles["hero-header__form"]}>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership
                </h3>
                <Input inputName="signup" type="email" placeholder="Email Address" autoComplete />
                <div className={styles["form-btn__container"]}>
                    <Button label="Getting Started" variant="red" size="md" />
                </div>
            </form>
        </section>
        {/* Footer component goes here */}
        <Footer />
    </div>
)

export default Home