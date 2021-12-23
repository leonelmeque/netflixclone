import styles from "./index.module.css"
import * as React from 'react'
import * as Icons from 'react-feather'


type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'text';
  size: 'lg' | 'md' | 'sm';
  className?: string;
  icon?: string;
  onClick?(
    event: React.MouseEvent<HTMLButtonElement>
  ): void;
};

type CircleButtonProps = {
    icon?: string,
    size:number,
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
    style?:object
}


// Regular button
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props,ref)=> {
    const {label, variant, size, className, icon, ...args} = props
    const Icon = icon ? Icons[icon] : <></>

    return (
        <button ref={ref} className={[styles.nxBtn,styles[variant],styles[size],className].join(" ")} {...args}>
                    {icon && <Icon/>}
                    <span>{label}</span>
        </button>
    )
})

const CircleButton = React.forwardRef<HTMLButtonElement, CircleButtonProps>((props,ref)=>{
     const {icon, size,...args} = props
     const Icon = icon ? Icons[icon] : <></>
    return(
        <button ref={ref} className={styles.circleBtn}  {...args}>
            <Icon size={size}/>
        </button>
    )
})

// Display names
Button.displayName = "Button"
CircleButton.displayName = "CircleButton"

export default Button
export {CircleButton}