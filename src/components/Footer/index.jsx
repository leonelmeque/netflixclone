import styles from "./index.module.css"

const Footer = ()=> (
    <footer className={styles["nx-footer"]}>
    <a href="">
        Questions? Call 1-844-505-2993
    </a>
    <ul className={styles["nx-footer__list"]}>
        <li className={styles["nx-footer__list-item"]}><span>FAQ</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Account</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Investor Relations</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Redeem Gift Cards</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Ways to Watch</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Privacy</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Corporate Information</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Speed Test</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Netflix Originals</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Help Center</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Media Center</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Jobs</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Buy Gift Cards</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Terms of use</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Cookie Preferences</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Contact Us</span></li>
        <li className={styles["nx-footer__list-item"]}><span>Legal Notices</span></li>   
    </ul>
</footer>
)

export default Footer