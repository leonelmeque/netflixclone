import styles from "./index.module.css"
import React from 'react'
import * as Icons from 'react-feather'

// Regular button
const Button = React.forwardRef( (props,ref)=> {
    const {label, variant, size, className, icon, ...args} = props
    const Icon = icon ? Icons[icon] : <></>

    return (
        <button ref={ref} className={[styles.nxBtn,styles[variant],styles[size],className].join(" ")} {...args}>
                    {icon && <Icon/>}
                    <span>{label}</span>
        </button>
    )
})

const CircleButton = React.forwardRef((props,ref)=>{
     const {icon, ...args} = props
     const Icon = icon ? Icons[icon] : <></>
    return(
        <button ref={ref} className={styles.circleBtn}  {...args}>
            <Icon />
        </button>
    )
})

// Display names
Button.displayName = "Button"

export default Button
export {CircleButton}