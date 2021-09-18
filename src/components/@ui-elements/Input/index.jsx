import React from 'react'
import styles from "./index.module.css"
import PropTypes from 'prop-types'

 const Input = React.forwardRef(({inputName,placeholder,className, ...args },ref)=>{
    return(
        <label className={[styles.input, className].join(" ")}>
            <input
                ref={ref}
                data-testid="input" 
                id={`id-nx-input-${inputName}`}
                placeholder={placeholder}
                autoComplete="false"
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