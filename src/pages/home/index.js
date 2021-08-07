import styles from "./styles.module.css"
import { Button, Accordion, Input, Footer } from '../../components/'
import React from 'react'
import {homeData} from '../../utilities/constants/static-text'
import Header from './components/Header/Header'
import SubForm from "./components/SubscriptonForm/SubForm"

const Home = () => (
    <div style={{ background: "#222" }}>
        <nav className={styles.nav}>
            <div className="nx-brand"aria-labelledby="Company name">Netflix</div>
            <Button label="Sign in" variant="primary" size="sm" />
        </nav>
        <Header />
        <div className={styles["nx-bottom-space"]}></div>
        {/* Feature 1 */}
        <section className={styles.service}>
           <div className={styles.serviceTitle}>
           <h1>Enjoy on your Tv.</h1>
            <h2>Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,</h2>
           </div>
            <div className={styles.serviceTv}>
                <img src="/images/tv.png" alt="tv" />
                <video autoPlay muted loop playsInline>
                    <source src="/video/video-tv-0819.m4v" type="video/mp4" />
                </video>
            </div>
        </section>
        <div className={styles["nx-bottom-space"]}></div>
        {/* Feature 2 */}
        <section className={styles.service}>
        <div className={styles.serviceTitle}>
            <h1>Download your shows to watch offline</h1>
            <h2>Save your favorites easly and always have something to watch</h2>
            </div>
            <div className={styles.serviceMobile}>
                <img src="/images/mobile.jpeg" alt="mobile" />
                <div className={styles.floatingCard}>
                    <img className={styles.floatingCardImg} src="/images/stcover.png" alt="stanger things movie cover" />
                    <div className={styles.floatingCardText}>
                        <span>
                            Stranger Things
                        </span>
                        <span>
                            Downloading...
                        </span>
                    </div>
                    <div className={styles.floatingCardIconAnimation}></div>
                </div>
            </div>
        </section>
        <div className={styles["nx-bottom-space"]}></div>
        {/* Feature 3 */}
        <section className={styles.service}>
        <div className={styles.serviceTitle}>
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more</h2>
        </div>
            <div className={styles.serviceMac}>
                <img src="/images/imac.png" alt="imac"/>
                {/* <video className={styles["home-feature__video"]} autoPlay muted loop playsInline>
                    <source src="/video/video-tv-0819.m4v" type="video/mp4" />
                </video> */}
            </div>
        </section>
        <div className={styles["nx-bottom-space"]}></div>
        <section className={styles.service}>
        <div className={styles.serviceTitle}>
            <h1>Create profiles for kids.</h1>
            <h2>Send kids on adventures with their favorite characters in a space made just for them--free with your membership.</h2>
        </div>
            <div className={styles.serviceKids}>
                <img src="/images/kids.png" alt="kids" />
            </div>
        </section>
        <section className={styles.faq}>
           <div className={styles.faqTitle}>
             <h1>Frequently Asked Questions.</h1>
           </div>
            <div className={styles.faqQuestions}>
                {/* Buttons with icons go here */}

                <ul className={styles.faqQuestionsContainer}>
                  {
                      homeData.faq.map(({id, question, answer})=>(
                          <li>
                              <Accordion label={question} dropdownText={answer}/>
                          </li>
                      ))
                  }    
                </ul>
            </div>
            <SubForm />
        </section>
        {/* Footer component goes here */}
        <Footer />
    </div>
)

export default Home