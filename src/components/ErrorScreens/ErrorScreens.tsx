import React, { FunctionComponent } from 'react'
import styles from './styles.module.css'
type PageErrorProps = {
    headerTitle: string
    message: string;
}

export const PageErrorFallbackScreen:FunctionComponent<PageErrorProps> = (props):JSX.Element=>(
    <div className={`${styles.container}`}>
        <h2>
            {props.headerTitle}
        </h2>
        <p>
            {props.message}
        </p>
    </div>
)