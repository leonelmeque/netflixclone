import styles from "./index.module.css"
export default function Input({inputName,placeholder, ...args }){
    return(
        <label className={styles["nx-input"]}>
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