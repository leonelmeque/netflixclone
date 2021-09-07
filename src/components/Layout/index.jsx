import styles from './styles.module.css'
import React from 'react'

const Layout = React.forwardRef(({children, row, column},ref) => {
    return (
        <div ref={ref} className={
                `${styles.container} 
                ${row && styles.row} 
                ${column && styles.column}`.trim()}>
            {children}
        </div>
 );
})
 
Layout.defaulName="Layout"

export default Layout;