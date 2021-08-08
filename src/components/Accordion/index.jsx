import React from 'react'
import {Plus, Minus} from "react-feather"
import styles from "./index.module.css"
import PropTypes from 'prop-types'
const Accordion= React.forwardRef(({label,dropdownText},ref)=>{

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
        <details data-testid="accordion" className={styles.details} onClick={toggleSummary}>
            <summary  className={styles.collapse}>
                {label} 
            <span className={styles.plus}>
            <Plus  />
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
})

Accordion.defaultProps={
    label:"Title",
    dropdownText:"A quick summary of the title"
}

Accordion.propTypes = {
    label: PropTypes.string.isRequired,
    dropdownText: PropTypes.string.isRequired
}

export default Accordion;
