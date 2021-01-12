import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "../../Rotas/Store/Context"
import { Animated } from "react-animated-css";
import { SigaeLoading } from "../../Utils/SVG/SVG"

export default function Loading() {
    const { showLoading } = useContext(StoreContext)
    return (
        <CustumAnimated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={0} isVisible={showLoading}>
            <LoadingContainer>
                <SigaeLoading/>
            </LoadingContainer>
        </CustumAnimated>
    )
}

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