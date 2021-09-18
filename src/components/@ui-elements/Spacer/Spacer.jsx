import styles from './styles.module.css'

const Spacer = ({ size }) => {
    return (<div className={`${styles[size]} ${styles.spacer}`}>

    </div>);
}

export default Spacer;