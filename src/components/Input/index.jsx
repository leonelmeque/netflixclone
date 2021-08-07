import styles from "./index.module.css"
import PropTypes from 'prop-types'
export default function Input({inputName,placeholder, ...args }){
    return(
        <label className={styles.input}>
            <input 
                id={`id-nx-input-${inputName}`}
                placeholder={placeholder}
                {...args}
                />
            <label htmlFor={`id-nx-input-${inputName}`}>
                {placeholder}
            </label>
    </label>
    )
}

Input.propTypes = {
    inputName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}