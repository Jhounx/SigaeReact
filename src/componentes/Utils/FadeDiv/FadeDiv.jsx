import React, { useState, useEffect, memo } from "react"
import { Animated } from "react-animated-css";

export default ({children, className, visible, time = 500}) => {
    const [display, setDisplay] = useState(visible ? "block" : "none")

    useEffect(() => {
        if (visible) setDisplay("block")
        else {
            setTimeout(() => {
                setDisplay("none")
            }, time)
        }
    }, [visible])
    
    return (
        <Animated style={{ display }} className={className} animationIn="fadeIn" animationOut="fadeOut" animationInDuration={time} animationOutDuration={time} isVisible={visible}>
            {children}
        </Animated>
    )
}
