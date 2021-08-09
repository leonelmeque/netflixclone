import styles from "./index.module.css"
import React from 'react'
import PropTypes from 'prop-types'
import * as Icons from 'react-feather'

const Button = React.forwardRef( ({label,variant,size,className,icon, ...args},ref)=> {
    const Icon = icon ? Icons[icon] : <></>
    console.log(Icon)
    return (
        <button ref={ref} className={[styles.nxBtn,styles[variant],styles[size],className].join(" ")} {...args}>
                    <span>{label}</span>
                    {icon && <Icon/>}
        </button>
    )
})

Button.propTypes ={
    label:PropTypes.string.isRequired,
    variant:PropTypes.oneOf(["primary","secondary","tertiary"]).isRequired,
    size: PropTypes.oneOf(["sm","md","lg"]).isRequired,
    icon:PropTypes.oneOf([...Object.keys(Icons)])
}
Button.defaultProps = {
    label:"Button",
    variant:"primary",
    size:"md",
    className:"",
    icon:null
}

export default Button