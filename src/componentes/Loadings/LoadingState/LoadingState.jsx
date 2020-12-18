import React from "react"
import { Animated } from "react-animated-css";
import styled from "styled-components"

export default function LoadingState({visible, children}) {
    return (
        <CustumAnimated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={0} isVisible={visible}>
            {children}
        </CustumAnimated>
    )
}

const CustumAnimated = styled(Animated)`
    position: absolute;
    z-index: 1000;
`