import React from 'react';
import styles from "./styles.module.css"

import SubForm from '../SubscriptonForm/SubForm'

const Header = () => {
    return (
    <header className={styles.header}>
          <div className={styles.container}>
          <div className={styles.intro}>
              <h1 className={styles.h1}>
                  Ultimate movies, Tv shows, and more.
              </h1>
              <h2 className={styles.h2}>
                  Watch anywhere. Cancel anytime.
              </h2>
          </div>
            <SubForm />
          </div>
          <img className={styles.bg} src="/images/hero-img.jpeg" alt="movies backdrop" />
      </header>
     );
}
 
export default Header;