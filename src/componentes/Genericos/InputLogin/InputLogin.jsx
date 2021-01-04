import React, { useState, forwardRef } from "react"
import { CustumInput, InputPlaceHolder } from "./InputLogin.styles"

const InputLogin = ({ className, style, holder, value, setErro, erro = false, children, ...inputProps }, ref) => {
    const [placeColor, setPlaceColor] = useState("#9392b9")
    return (
        <div className={className} style={{
            position: "relative",
            width: "100%",
            ...style
        }} >
            <InputPlaceHolder className="inputLoginHolder" visivel={value.length > 0} color={placeColor}>{holder}</InputPlaceHolder>
            <CustumInput value={value} spellCheck="false" erro={erro} placeholder={holder} {...inputProps}
                onFocus={() => {
                    setPlaceColor("#827ffe");
                    if (typeof setErro == "function") setErro(false)
                }}
                onBlur={() => { setPlaceColor("#9392b9") }} ref={ref} {...inputProps} />
            {children}
        </div>
    )
}

export default forwardRef(InputLogin)