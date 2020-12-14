import React, { useState } from "react"
import { CustumInput, InputPlaceHolder } from "./InputLogin.styles"

export default function InputLogin({ className, style, holder, value, setErro, erro = false, children, ...inputProps }) {
    const [placeColor, setPlaceColor] = useState("--foreground-roxo-fraco")
    return (
        <div className={className} style={{
            position: "relative",
            width: "100%",
            ...style
        }} >
            <InputPlaceHolder className="inputLoginHolder" visivel={value.length > 0} color={placeColor}>{holder}</InputPlaceHolder>
            <CustumInput value={value} spellCheck="false" erro={erro} placeholder={holder} {...inputProps}
                onFocus={() => {
                    setPlaceColor("--foreground-roxo-brilhante");
                    if (typeof setErro == "function") setErro(false)
                }}
                onBlur={() => { setPlaceColor("--foreground-roxo-fraco") }} {...inputProps} />
            {children}
        </div>
    )
}