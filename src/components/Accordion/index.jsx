import React from 'react'
import {Plus, Minus} from "react-feather"
import styles from "./index.module.css"

const Accordion = ({label,dropdownText}) => {

    const toggleSummary = () => {
        const details = document.querySelectorAll("details")
        details.forEach((target,_,arr)=>{
            target.addEventListener("toggle", (E)=>{
                if(target.open){
                    arr.forEach(detail=>{
                        if(detail !== E.target){
                            detail.open=false
                        }
                    })
                }
            })
        })
    }
     
     return(
        <>
        <details className={styles.details} onClick={toggleSummary}>
            <summary  className={styles.collapse}>
                {label} 
            <span className={styles.plus}>
            <Plus />
            </span> 
            <span className={styles.minus}>
                <Minus />
            </span>
            </summary>
            <p className={styles.collapseInfo}>
                {dropdownText}
            </p>
        </details>
        </>
     )
}

export default Accordion;
