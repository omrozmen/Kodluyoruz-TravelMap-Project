import React from 'react'

export default function ImgButton({ isFullwidth = true, ...props }) {
    return (

        <button style={{ width: isFullwidth ? "100%" : "auto" }} onClick={props.onClick} className="btn btn-outline-warning" {...props}>
            <img src={require("../../static/image/cities/default.png")} style={{ width: "100%", height:"210px" }}>
                {props.children}
            </img>
        </button>

    )
}

