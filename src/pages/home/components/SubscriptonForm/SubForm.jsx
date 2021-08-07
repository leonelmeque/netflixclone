import React from 'react';
import styles from "./styles.module.css"
import { Button, Input } from '../../../../components/'

const SubForm = () => {
    return ( 
        <div className={styles.container}>
        <form action="submit" className={styles.form}>
        <div className={styles.formTitle}>
        <h3>
            Ready to watch? Enter your email to create or restart your membership.
        </h3>
        </div>
        <div className={styles.formInput}>
          <Input inputName="hero-signup" type="email" placeholder="Email Address" autoComplete />
        </div>
        <div className={styles.formBtn}>
            <Button label="Get Started" variant="primary" size="md" />
        </div>
    </form>
    </div>
     );
}
 
export default SubForm;