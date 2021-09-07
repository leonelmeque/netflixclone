import Head from 'next/head'
import React from 'react'
import styles from './styles.module.css'
import Button from '@/components/Button/Button'
import { PlusCircle } from 'react-feather'
import {useRouter} from 'next/router'

const Browse = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Netflix Clone | Browse</title>
            </Head>

            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.brandLogo} aria-labelledby="Company name">
                        <img src="/nxlogo.svg" alt="" />
                    </div>
                    {/* <Button label="Sign in" variant="primary" size="md" /> */}
                </nav>
                {/* Navigation */}
                <div className={styles.profilesContainer}>
                    <div className={styles.profileContainerTitle}>
                        <h1 className={styles.h1}>
                            Who's watching?
                        </h1>
                    </div>
                    <ul className={styles.profiles}>
                        <li onClick={(e)=>{
                            e.preventDefault();
                            router.push("/app")
                        }} className={styles.account}>
                            <div className={styles.accountAvatar}>
                                <img src="/images/changes.png" alt="" />
                            </div>
                            <span className={styles.accountName}>
                                John Doe
                            </span>
                        </li>
                        <li className={styles.addProfile}>
                            <div className={styles.addProfileIcon}>
                                <PlusCircle size={64} />
                            </div>
                            <span className={styles.addProfileTitle}>
                                Add Profile
                            </span>
                        </li>
                    </ul>
                    <div className={styles.manageProfileContainer}>
                        <Button variant="tertiary" label="MANAGE PROFILES" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Browse;