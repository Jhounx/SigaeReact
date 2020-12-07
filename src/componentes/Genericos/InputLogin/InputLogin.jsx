import React, {useState} from "react"
import estilos from "./InputLogin.module.css"

const InputLogin = ({holder, visible, children, newClass="",...inputProps}) => {
    const [placeColor, setPlaceColor] = useState("--foreground-roxo-fraco")

    return (
        <div className={`${estilos.inputContainer} ${estilos.inputContainer2}`}>
            <div style={{ opacity: visible ? 100 : 0, color: `var(${placeColor})` }}
                className={estilos.inputPlaceholder}>{holder}</div>
            <input type="text" className={`${estilos.campo} ${newClass}`} placeholder={holder}
                spellCheck="false"
                onFocus={() => { setPlaceColor("--foreground-roxo-brilhante") }}
                onBlur={() => { setPlaceColor("--foreground-roxo-fraco") }} {...inputProps}
            />
            {children}
        </div>
    )
}

export default InputLogin