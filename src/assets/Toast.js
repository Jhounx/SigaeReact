import React from "react"
import { toast } from "react-toastify";

import DoneIcon from "@material-ui/icons/Done";
import InfoIcon from "@material-ui/icons/Info";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/Warning";

export default class Toast {

    static defaultToast(mensagem, icon) {
        toast.success((
            <>
                {icon}
                <div style={{marginLeft: "8px"}}>{mensagem}</div>
            </>
        ), {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true
        });
    }

    static ok(mensagem) {
        Toast.defaultToast(mensagem, <DoneIcon style={{color: "#28a745"}}/>)
    }

    static info(mensagem) {
        Toast.defaultToast(mensagem, <InfoIcon style={{color: "#88a4e6"}}/>)
    }

    static error(mensagem) {
        Toast.defaultToast(mensagem, <ErrorOutlineIcon style={{color: "#e44a4a"}}/>)
    }

    static warning(mensagem) {
        Toast.defaultToast(mensagem, <WarningIcon style={{color: "#e4c930"}}/>)
    }
}