import styles from './index.module.css';

type FooterProps = {
  showOnLogin?: boolean;
  showOnRoot?: boolean;
};

const Footer = ({
  showOnLogin,
  showOnRoot,
}: FooterProps): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <a href=''>
        {showOnRoot && 'Questions? Call 1-844-505-2993'}
        {showOnLogin && 'Questions? Conctact us.'}
      </a>

      {showOnLogin && (
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>FAQ</span>
          </li>
          <li className={styles.listItem}>
            <span>Help Center</span>
          </li>
          <li className={styles.listItem}>
            <span>Terms of use</span>
          </li>
          <li className={styles.listItem}>
            <span>Privacy</span>
          </li>
          <li className={styles.listItem}>
            <span>Cookie Preferences</span>
          </li>
          <li className={styles.listItem}>
            <span>Corporate Information</span>
          </li>
        </ul>
      )}

      {showOnRoot && (
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>FAQ</span>
          </li>
          <li className={styles.listItem}>
            <span>Help Center</span>
          </li>
          <li className={styles.listItem}>
            <span>Account</span>
          </li>
          <li className={styles.listItem}>
            <span>Media Center</span>
          </li>
          <li className={styles.listItem}>
            <span>Investor Relations</span>
          </li>
          <li className={styles.listItem}>
            <span>Jobs</span>
          </li>
          <li className={styles.listItem}>
            <span>Ways to Watch</span>
          </li>
          <li className={styles.listItem}>
            <span>Terms of use</span>
          </li>
          <li className={styles.listItem}>
            <span>Privacy</span>
          </li>
          <li className={styles.listItem}>
            <span>Cookie Preferences</span>
          </li>
          <li className={styles.listItem}>
            <span>Corporate Information</span>
          </li>
          <li className={styles.listItem}>
            <span>Contact Us</span>
          </li>
          <li className={styles.listItem}>
            <span>Speed Test</span>
          </li>
          <li className={styles.listItem}>
            <span>Legal Notices</span>
          </li>
          <li className={styles.listItem}>
            <span>Only on Netflix</span>
          </li>
          {/* <li className={styles.listItem}><span>Redeem Gift Cards</span></li>
        <li className={styles.listItem}><span>Netflix Originals</span></li> */}
        </ul>
      )}
    </div>
  </footer>
);

export default Footer;
