import { useToasts } from "react-toast-notifications"
const { addToast } = useToasts()

export class Toast {

    static ok(mensagem) {
        addToast(mensagem, {
            appearance: "success",
            autoDismiss: false,
        })
    }

    static info(mensagem) {
        addToast(mensagem, {
            appearance: "info",
            autoDismiss: false,
        })
    }

    static error(mensagem) {
        addToast(mensagem, {
            appearance: "error",
            autoDismiss: false,
        })
    }

    static warning(mensagem) {
        addToast(mensagem, {
            appearance: "warning",
            autoDismiss: false,
        })
    }
}