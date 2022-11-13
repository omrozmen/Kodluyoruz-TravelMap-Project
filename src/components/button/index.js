import React from 'react'

export default function Button({ isFullwidth = false, ...props }) {
    return (
        <button style={{ width: isFullwidth ? "100%" : "auto" }} onClick={props.onClick} className="btn btn-outline-secondary" {...props}>{props.children}</button>
    )
}

