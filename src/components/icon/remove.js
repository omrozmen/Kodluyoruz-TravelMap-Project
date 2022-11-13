
import React from "react"
export default function RemoveIcon({className="",...props}) {
    return (
        <i style={{ cursor: "pointer" }} className={"fa fa-times"+ className}  {...props}></i>
    )
}