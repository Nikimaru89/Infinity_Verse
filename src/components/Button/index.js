import React from "react";

import styles from './Button.module.scss'

const Button = (props) => {
    return (
        <>
            {props.dark && <button
                className={styles.dark}
                style={props.style}
                onClick={props.onClick}>
                {props.value}
                {props.src && <img src={props.src} alt="icon" />}
            </button>}
            {props.light && <button
                className={styles.light}
                style={props.style}
                onClick={props.onClick}>
                {props.value}
            </button>}
        </>
    )
}

export default Button