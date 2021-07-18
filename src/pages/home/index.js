import styles from "./styles.module.css"
import { Button, ButtonCollapse, Input, Footer } from '../../components/'
import React from 'react'
import {homeData} from '../../utilities/constants/static-text'


const Home = () => (
    <div style={{ background: "#222" }}>
        <nav className={styles["home__nav"]}>
            <div className="nx-brand" aria-labelledby="Company name">Netflix</div>
            <Button label="Sign in" variant="red" size="sm" />
        </nav>
        {/* Hero header */}
        <div className={styles["hero-header"]}>
            <div className={styles["hero-header-container"]}>
            <div className={styles["hero-header-content"]}>
                <h1>
                    Ultimate movies, Tv shows, and more.
                </h1>
                <h2>
                    Watch anywhere. Cancel anytime.
                </h2>
            </div>
            <form action="submit" className={styles["nx-form"]}>
                <div className={styles['nx-form-title']}>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
                </div>
                <div className={styles['nx-form-input']}>
                  <Input inputName="hero-signup" type="email" placeholder="Email Address" autoComplete />
                </div>
                <div className={styles["nx-form-btn"]}>
                    <Button label="Get Started" variant="red" size="md" />
                </div>
            </form>
            </div>
            <img className={styles["hero-header-bg"]} src="/images/home_background.jpeg" alt="movies backdrop" />
        </div>

        {/* Feature 1 */}
        <section className={styles["home-feature"]}>
           <div className={styles["home-feature-title"]}>
           <h1>Enjoy on your Tv.</h1>
            <h2>Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,</h2>
           </div>
            <div className={styles["home-feature-tv"]}>
                <img src="/images/tv.png" alt="tv" />
                <video className={styles["home-feature__video"]} autoPlay muted loop playsInline>
                    <source src="/video/video-tv-0819.m4v" type="video/mp4" />
                </video>
            </div>
        </section>
        {/* Feature 2 */}
        <section className={styles["home-feature"]}>
        <div className={styles["home-feature-title"]}>
            <h1>Download your shows to watch offline</h1>
            <h2>Save your favorites easly and always have something to watch</h2>
            </div>
            <div className={styles["home-feature-mobile"]}>
                <img src="/images/mobile.jpeg" alt="mobile" />
                <div className={styles["home-feature-mobile-card"]}>
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
            <div className={styles["home-feature-image-container"]}>
                <img src="/images/kids.png" alt="kids" />
            </div>
        </section>
        <section className={styles["home-faq"]}>
           <div className={styles['home-faq__title']}>
             <h1>Frequently Asked Questions.</h1>
           </div>
            <div className={styles["home-faq__questions"]}>
                {/* Buttons with icons go here */}

                <ul className={styles["home-faq__questions-container"]}>
                  {
                      homeData.faq.map(({id, question, answer})=>(
                          <li>
                              <ButtonCollapse label={question} dropdownText={answer}/>
                          </li>
                      ))
                  }    
                </ul>

            </div>

    
        </section>
        {/* Footer component goes here */}
        <Footer />
    </div>
)

export default Home