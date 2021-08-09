import Head from 'next/head'
import styles from './index.module.css'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Footer  from '@/components/Footer'
const Login = () => {
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
                        <form onSubmit={(event)=>{event.preventDefault()}} className={styles.loginForm}>
                            <Input inputName="username" autoComplete="true" value="jonhndoe@domain.com" placeholder="Email or phone number" disabled/>
                            <Input inputName="password" autoComplete="true" value="jodhndoe@domain.com" placeholder="Password" type="password" disabled/>
                            <Button type="submit" label="Sign in" />
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
            <Footer showOnLogin/>
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