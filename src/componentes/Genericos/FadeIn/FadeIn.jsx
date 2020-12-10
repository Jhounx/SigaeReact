import React, { useState, useEffect } from "react"
import { Animated } from "react-animated-css";

export default function FadeIn({ children, visible, time }) {
    const [display, setDisplay] = useState("block")

    useEffect(() => {
        if (visible) setDisplay("block")
        else {
            setTimeout(() => {
                setDisplay("none")
            }, time)
        }
    }, [visible])

    return (
        <Animated style={{ display }} animationIn="fadeIn" animationOut="fadeOut" animationInDuration={time} animationOutDuration={time} isVisible={visible}>
            {children}
        </Animated>
    )
}
