import React from 'react'
import {Plus, Minus} from "react-feather"

const ButtonCollapse = ({label,dropdownText}) => {

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
        <details onClick={toggleSummary}>
            <summary className="nx-collapse">{label} <span className="plus"><Plus /></span> <span className="minus"><Minus /></span></summary>
            <p className="nx-collapse__info">
                {dropdownText}
            </p>
        </details>
        <style jsx>
            {
                `
                details summary span.minus{
                    display: none;
                }

                details[open] summary span.minus{
                    display: block;
                }

                details[open] summary span.plus{
                    display: none;    
                }
                
                .nx-collapse{
                    --nx-color-dark: #333;
                    display: flex;
                    width: 100%;
                    flex-flow: row;
                    height: 48px;
                    align-items: center;
                    justify-content: space-between;
                    background-color: var(--nx-color-dark);
                    padding: 0 1.25rem;
                    font-size: 1.15rem;
                    outline: none;
                }

                .nx-collapse__info{
                    --nx-color-dark: #333;
                    background-color: var(--nx-color-dark);
                    padding: 2rem 1.25rem;
                    margin-top: 0.05rem;
                }
                `
            }

        </style>
        </>
     )
}

export default ButtonCollapse;
