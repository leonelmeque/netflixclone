import React from 'react';
import styles from "./styles.module.css"
import { Button, Input } from '../../../components/'

const SubForm = () => {
    return ( 
        <div className={styles["subscribe-form"]}>
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
     );
}
 
export default SubForm;