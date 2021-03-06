import Head from 'next/head'
import styles from '-ui-modules/login/index.module.css'
// import Input from '-components/@ui-elements/Input'
import Button from '-components/atoms/Button'
import FooterWeb  from '-components/organisms/Footer/FooterWeb'
import {useRouter} from 'next/router'

const Login = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Netflix Clone Login</title>
            </Head>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.brandLogo} aria-labelledby="Company name">
                        <img src="/nxlogo.svg" alt="" />
                    </div>

                </nav>
                <div className={styles.login}>
                    <div className={styles.container}>
                        <div className={styles.heading1}>
                            <h1>
                                Sign in
                            </h1>
                        </div>
                        {/* write two input components */}
                        <form onSubmit={(event)=>{event.preventDefault(); router.push("/browse")}} className={styles.loginForm}>
                            {/* <Input inputname="username" aria-autocomplete="inline" value="jonhndoe@domain.com" placeholder="Email or phone number" disabled/> */}
                            {/* <Input inputname="password" aria-autocomplete="inline" value="jodhndoe@domain.com" placeholder="Password" type="password" disabled/> */}
                            <Button type="submit" variant='primary' size='lg' label="Sign in" />
                        </form>
                        <div className={styles.loginSettings}>
                            <div className={styles.checkboxContainer}>
                                <input className={styles.checkbox} type="checkbox" name="remember" id="remember-me" />
                                <label htmlFor="remember-me" className={styles.checkBoxLabel}>
                                    <span className={styles.checkboxText}>Remember me</span>
                                </label>
                            </div>
                            <p>Need help?</p>
                        </div>
                        <div className={styles.info}>
                            <p>
                                Need help?
                            </p>
                            <p>
                                New to Netflix? <strong style={{color:'white', fontWeight:400}}> Sign up now</strong>
                            </p>
                            <p>
                                Well this part was talking about google protection since I won't even allow you to put credentials, no need :-).
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <FooterWeb/>
        </>
    );
}

export async function getStaticProps(context) {
    // There's is nothing to be returned now
    return {
        props: {}
    }
}

export default Login;