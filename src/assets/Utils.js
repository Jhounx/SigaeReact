import { isMobile } from "react-device-detect"
import {updateEstadoApp, updateCrashErro} from "./DadosGlobais"

export class AppUtils {
 
    static crash(erro) {
        updateEstadoApp(-1)
        updateCrashErro(erro)
    }
}

export class InterfaceUtils {

    static setMobileHeight() {
        if(isMobile) {
            var height = document.getElementsByTagName("body")[0].offsetHeight 
            document.getElementsByTagName("body")[0].style.height = height
        }
    }

    static setMobileFixed() {
        if(isMobile) {
            document.getElementsByTagName("body")[0].style.position = "fixed"
        }
    }

    static disableMobileFixed() {
        if(isMobile) {
            document.getElementsByTagName("body")[0].style.position = "static"
        }
    }
}

export class RegexUtils {

    static regexEmail(email) {
        var regex = /^[a-z0-9]{3,64}@[a-z0-9]{3,30}[.]{1,1}.+[a-z0-9]{1,20}$/;
        return regex.test(email);
    }
}