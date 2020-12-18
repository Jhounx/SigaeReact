import styled from "styled-components"
import ReactCodeInput from "react-code-input"

export const CodeInput = styled(ReactCodeInput)`
    input {
        width: 40px;
        height: 40px;
        margin-left: 3px;
        margin-right: 3px;
        font-size: 22px;
        text-align: center;
        font-weight: bold;
        border: 2px solid var(--foreground-roxo-fraco);
        outline: none;
        color: var(--foreground-roxo-escuro);
        text-transform: uppercase;
    }
`
