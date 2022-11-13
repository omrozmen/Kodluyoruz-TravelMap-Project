import React from 'react'
import styles from "./styles.css"

const PageExtension = (props) => {
    return (
        <div className={`container ${styles.Page}`}>
            {props.children}
        </div>
    )
}
export default PageExtension;