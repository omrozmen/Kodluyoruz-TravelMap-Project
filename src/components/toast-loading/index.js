import React, { useEffect, useRef, useState } from "react"
import "./style.css"

const defaultClass = "top-right"
const classNames = ["toast", "fade show app-toast", defaultClass]
const _message = "Loading..."

export default function LoadingToast() {

    const [state, setState] = useState({
        show: false,
        message: _message,
    })

    const ref = useRef();

    const setPosition = (position) => {
        ref.current.setAttribute("class", classNames.join(" "))
        // Düzgün çalışmadı. Eski değer üzerinde kaldı.
        // // ref.current.classList.remove(defaultClass)
        ref.current.classList.add(position || defaultClass)

    }

    const subscriber = (e) => {
        if (typeof (e.detail) === "object") {
            const { show, position, message } = e.detail;

            // setShow(show);
            // setMessage(message || _message)
            setState({
                show: show,
                message: message || _message

            })
            setPosition(position);
        }
        else {
            // setShow(e.detail)
            // setMessage(_message)
            setState({
                show: e.detail,
                message: _message

            })
            setPosition(defaultClass);


        }
    }
    useEffect(() => {
        document.addEventListener("FETCHING", subscriber);
        return () => {
            document.removeEventListener("FETCHING", subscriber);
        }

    }, [])

    return (
        <div style={{
            visibility: state.show ? "visible" : "hidden"
        }} ref={ref} className={classNames.join(" ")} role="alert">
            <div className="toast-header">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden"> Loading...</span>
                </div>
                <strong className="me-auto">Loading</strong>
                <small className="text-muted">...</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                <p>
                    {state.message}
                </p>
            </div>
        </div>
    )
}