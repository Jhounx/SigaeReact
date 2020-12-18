import React from "react"
import {CodeInput} from "./Input.styles"

export default function InputCodigo({type = "text", fields = 8, ...rest}) {
    return (
        <CodeInput type={type} fields={fields} {...rest}/>
    )
}
