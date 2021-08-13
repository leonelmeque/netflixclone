import React from 'react';
import styles from "./styles.module.css"
import Button from '@/components/Button/Button'
import Input from '@/components/Input'

const SubForm = ({...args}) => {
    return ( 
    <div className={styles.container} {...args}>
        <form action="submit" className={styles.form}>
            <div className={styles.formTitle}>
            <h3>
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            </div>
            <div className={styles.formInput}>
            <Input className={styles.jumboInput} inputName="hero-signup" type="email" placeholder="Email Address" autoComplete="true" />
            </div>
            <div className={styles.formBtn}>
                <Button className={styles.jumboButton} icon="ChevronRight" label="Get Started" variant="primary" size="md" />
            </div>
     </form>
    </div>
     );
}
 
export default SubForm;