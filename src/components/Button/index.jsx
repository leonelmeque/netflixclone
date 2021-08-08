import styles from "./index.module.css"
import React from 'react'
import PropTypes from 'prop-types'

const Button = React.forwardRef( ({label,variant,size,className, ...args},ref)=> {
    return (
        <button ref={ref} className={[styles.nxBtn,styles[variant],styles[size],className].join(" ")} {...args}>
                    <span>{label}</span>
        </button>
    )
})

Button.propTypes ={
    label:PropTypes.string.isRequired,
    variant:PropTypes.oneOf(["primary","secondary","tertiary"]).isRequired,
    size: PropTypes.oneOf(["sm","md","lg"]).isRequired
}
Button.defaultProps = {
    label:"Button",
    variant:"primary",
    size:"md",
    className:""
}

export default Button