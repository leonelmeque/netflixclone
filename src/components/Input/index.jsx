import styles from "./index.module.css"
import PropTypes from 'prop-types'

 const Input = React.forwardRef(({inputName,placeholder, ...args },ref)=>{
    return(
        <label className={styles.input}>
            <input
                ref={ref}
                data-testid="input" 
                id={`id-nx-input-${inputName}`}
                placeholder={placeholder}
                {...args}
                />
            <label htmlFor={`id-nx-input-${inputName}`}>
                {placeholder}
            </label>
    </label>
    )
})

Input.propTypes = {
    inputName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input