import React, { useState } from "react"
import estilos from "./InputLogin.module.css"

export default function InputLogin({ style, holder, value, setErro, erro = false, children, ...inputProps }) {
    const [placeColor, setPlaceColor] = useState("--foreground-roxo-fraco")
    return (
        <div style={style}  className={estilos.inputContainer}>
            <div style={{
                color: `var(${placeColor})`,
                opacity: value.length > 0 ? 100 : 0
            }} className={estilos.inputPlaceholder}>{holder}
            </div>
            <input type="text" className={estilos.campo} placeholder={holder}
                spellCheck="false"
                style={{
                    borderColor: `var(--${erro ? "foreground-vermelho-erro" : "foreground-roxo-fraco"}`
                }}
                onFocus={() => {
                    setPlaceColor("--foreground-roxo-brilhante");
                    if (typeof setErro == "function") setErro(false)
                }}
                onBlur={() => { setPlaceColor("--foreground-roxo-fraco") }} {...inputProps}
            />
            {children}
        </div>
    )
}