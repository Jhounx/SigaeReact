import React, { useState, useEffect, memo } from "react"
import { Animated } from "react-animated-css";
import { SigaeLoading } from "../../Utils/SVG/SVG"
import styled from "styled-components"

export default React.memo(({timer = 0}) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => {
                setVisible(false)
            }, timer);
        }
    }, [timer])

    return (
        <CustumAnimated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={0} isVisible={visible}>
            <LoadingContainer>
                <SigaeLoading/>
            </LoadingContainer>
        </CustumAnimated>
    )
})

const CustumAnimated = styled(Animated)`
    position: absolute;
    z-index: 1000;
`

const LoadingContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgb(241, 242, 243);
    margin: 0;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`