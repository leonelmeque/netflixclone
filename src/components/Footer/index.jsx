import styles from "./index.module.css"

const Footer = ()=> (
    <footer className={styles.footer}>
    <a href="">
        Questions? Call 1-844-505-2993
    </a>
    <ul className={styles.list}>
        <li className={styles.listItem}><span>FAQ</span></li>
        <li className={styles.listItem}><span>Account</span></li>
        <li className={styles.listItem}><span>Investor Relations</span></li>
        <li className={styles.listItem}><span>Redeem Gift Cards</span></li>
        <li className={styles.listItem}><span>Ways to Watch</span></li>
        <li className={styles.listItem}><span>Privacy</span></li>
        <li className={styles.listItem}><span>Corporate Information</span></li>
        <li className={styles.listItem}><span>Speed Test</span></li>
        <li className={styles.listItem}><span>Netflix Originals</span></li>
        <li className={styles.listItem}><span>Help Center</span></li>
        <li className={styles.listItem}><span>Media Center</span></li>
        <li className={styles.listItem}><span>Jobs</span></li>
        <li className={styles.listItem}><span>Buy Gift Cards</span></li>
        <li className={styles.listItem}><span>Terms of use</span></li>
        <li className={styles.listItem}><span>Cookie Preferences</span></li>
        <li className={styles.listItem}><span>Contact Us</span></li>
        <li className={styles.listItem}><span>Legal Notices</span></li>   
    </ul>
</footer>
)

export default Footer