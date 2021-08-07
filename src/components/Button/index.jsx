import styles from "./index.module.css"

export default function Button({label, variant, size, ...args}){
    return (
        <button className={[styles.nxBtn,styles[variant],styles[size]].join(" ")} {...args}>
                    <span>{label}</span>
        </button>
    )
}

Button.defaultProps = {
    label:"Button",
    variant:"primary",
    size:"md"
}