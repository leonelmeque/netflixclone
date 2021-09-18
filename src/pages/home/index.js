import styles from "./styles.module.css"
import Button from '@/components/@ui-elements/Button/Button'
import Accordion from "@/components/@ui-elements/Accordion"
import Footer from "@/components/@ui-elements/Footer"
import React from 'react'
import { homeData } from '../../utilities/constants/static-text'
import Header from './components/Header/Header'
import SubForm from "./components/SubscriptonForm/SubForm"
import Head from 'next/head'
import Link from 'next/link'
const Home = () => (
    <div>
        <Head>
            <title>Netflix Clone Home Page</title>
            <meta name="description" content="Netflix clone" />
        </Head>
        <div style={{ background: "#222" }}>
            <nav className={styles.nav}>
                <div className={styles.brandLogo} aria-labelledby="Company name">
                    <img src="/nxlogo.svg" alt="" />
                </div>
                <Link href="/login" passHref>
                    <Button label="Sign in" variant="primary" size="md" />
                </Link>
            </nav>
            <Header />
            <div className={styles["nx-bottom-space"]}></div>
            {/* Feature 1 */}
            <section data-service className={styles.service} >
                <div className={styles.container}>
                    <div className={styles.serviceTitle} style={{ paddingRight: 'var(--title-pl)' }}>
                        <h1>Enjoy on your Tv.</h1>
                        <h2>Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,</h2>
                    </div>
                    <div className={styles.serviceTv}>
                        <img src="/images/tv.png" alt="tv" />
                        <video muted loop playsInline>
                            <source src="/video/video-tv-0819.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
            <div className={styles["nx-bottom-space"]}></div>
            {/* Feature 2 */}
            <section data-service className={styles.service}>
                <div className={styles.container}>
                    <div className={styles.serviceTitle} style={{ paddingLeft: 'var(--title-pl)' }}>
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
                </div>
            </section>
            <div className={styles["nx-bottom-space"]}></div>
            {/* Feature 3 */}
            <section data-service className={styles.service} >
                <div className={styles.container}>
                    <div className={styles.serviceTitle} style={{ paddingRight: 'var(--title-pr)' }}>
                        <h1>Watch everywhere.</h1>
                        <h2>Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more</h2>
                    </div>
                    <div className={styles.serviceMac}>
                        <img src="/images/imac.png" alt="imac" />
                        {/* <video className={styles["home-feature__video"]} autoPlay muted loop playsInline>
                    <source src="/video/video-tv-0819.m4v" type="video/mp4" />
                </video> */}
                    </div>
                </div>
            </section>
            <div className={styles["nx-bottom-space"]}></div>
            <section className={styles.service} >
                <div className={styles.container} >
                    <div className={styles.serviceTitle} style={{ paddingLeft: 'var(--title-pl)' }}>
                        <h1>Create profiles for kids.</h1>
                        <h2>Send kids on adventures with their favorite characters in a space made just for them--free with your membership.</h2>
                    </div>
                    <div className={styles.serviceKids}>
                        <img src="/images/kids.png" alt="kids" />
                    </div>
                </div>
            </section>
            <section className={styles.faq}>
                <div className={styles.faqTitle}>
                    <h1 className={styles.h3}>Frequently Asked Questions.</h1>
                </div>
                <div className={styles.faqQuestions}>
                    {/* Buttons with icons go here */}

                    <ul className={styles.faqQuestionsContainer}>
                        {
                            homeData.faq.map(({ id, question, answer }) => (
                                <li key={id}>
                                    <Accordion label={question} dropdownText={answer} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <SubForm />
            </section>
            {/* Footer component goes here */}
            <Footer showOnRoot />
        </div>
    </div>
)

export async function getStaticProps(context) {
    // There's is nothing to be returned now
    return {
        props: {}
    }
}

export default Home