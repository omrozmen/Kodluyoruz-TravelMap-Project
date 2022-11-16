import React from 'react'

export default function ImgButton({src, cty = "", isFullwidth = true, ...props }) {
    return (

        <button style={{ borderRadius:"60px", width: isFullwidth ? "100%" : "auto" }} onClick={props.onClick} className="btn btn-outline-warning" {...props}>
            <img src={require(`../../static/image/cities/${cty}.png`)} style={{ width: "100%", height: "250px", borderRadius:"60px" }}>
                {props.children}
            </img>
        </button>

    )
}

