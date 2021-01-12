import React, { useState, forwardRef } from "react"
import { Container, Input, Placeholder } from "./InputLogin.styles"

export default React.memo(forwardRef(({ className, placeholder, onChange, setErro, erro = false, children, ...rest }, ref) => {
    const [show, setShow] = useState(false)
    const onChangeFun = (e) => {
        var t = e.target.value
        if(t.length > 0 && !show) setShow(true)
        if(t.length === 0) setShow(false)
    }
    return (
        <Container className={className} erro={erro} >
            <Placeholder className="inputLoginHolder" visivel={show}>
                {placeholder}
            </Placeholder>
            <Input spellCheck="false" placeholder={placeholder} ref={ref} {...rest}
                onChange={(e) => {
                    onChangeFun(e)
                    if(typeof onChange == "function") onChange(e)
                }}
            />
            {children}
        </Container>
    )
}))