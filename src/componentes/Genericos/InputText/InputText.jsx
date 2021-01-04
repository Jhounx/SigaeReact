import React, {useState, forwardRef} from "react"
import { Container, Placeholder, Input} from "./InputText.styles"

export default React.memo(forwardRef(({className, placeholder, placeholderColor, height, erro, onChange, ...rest}, ref) => {
    const [show, setShow] = useState(false)
    const onChangeFun = (e) => {
        var t = e.target.value
        if(t.length > 0 && !show) setShow(true)
        if(t.length === 0) setShow(false)
    }
    return (
        <Container className={className} erro={erro}>
            <Placeholder visivel={show} backgroundColor={placeholderColor}>{placeholder}</Placeholder>
            <Input placeholder={placeholder} height={height} ref={ref} {...rest} onChange={(e) => {
                onChangeFun(e)
                if(typeof onChange == "function") onChange()
            }} />
        </Container>
    )
}))