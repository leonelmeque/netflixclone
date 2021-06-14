import styles from "./index.module.css"

export default function Button({label, variant, size, ...args}){
    return (
        <button className={[styles["nx-btn"],styles[`nx-btn--${variant}`],styles[`nx-btn--${size}`]].join(" ")} {...args}>
                    <span>{label}</span>
        </button>
    )
}