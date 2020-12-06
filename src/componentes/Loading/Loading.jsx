import React, {useState, useEffect} from "react"
import estilos from "./styles.module.css"
import {Animated} from "react-animated-css";
import Logo from "../../assets/imagens/sigae-loading.svg"

const Loading = ({timer = 0, isVisible = true})=> {
    const [visible, setVisible] = useState(isVisible)

    useEffect(()=>{
        if(timer > 0) {
            setTimeout(() => {
                setVisible(false)
            }, timer);
        }
    }, [timer])

    return (
        <Animated style={{"position":"absolute", "zIndex": 1000}} animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={0} isVisible={visible}>
            <div className={estilos.logo}>
                <img src={Logo} height={300} alt="Logo"/>
            </div>
        </Animated>
    )
}

export default Loading