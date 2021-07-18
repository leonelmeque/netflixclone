import React from 'react';
import styles from "./styles.module.css"

import SubForm from './SubForm'

const Header = () => {
    return (
    <div className={styles["hero-header"]}>
          <div className={styles["hero-header-container"]}>
          <div className={styles["hero-header-intro"]}>
              <h1>
                  Ultimate movies, Tv shows, and more.
              </h1>
              <h2>
                  Watch anywhere. Cancel anytime.
              </h2>
          </div>
            <SubForm />
          </div>
          <img className={styles["hero-header-bg"]} src="/images/home_background.jpeg" alt="movies backdrop" />
      </div>
     );
}
 
export default Header;